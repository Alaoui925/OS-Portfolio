/**
 * Verification harness for the pinned horizontal exhibit (section 03).
 * Measures the real thing in a real browser:
 *   1. pin behaviour — stage pinned while scrollY traverses the runway
 *   2. scrub mapping — track translateX vs scroll position, sampled linearly
 *   3. counter + active-card handoff (01→05, W-cards in order)
 *   4. keyboard — focusing an off-screen card brings it into view
 *   5. console hygiene — zero errors/warnings
 *   6. stacked fallbacks — <768px and prefers-reduced-motion
 * Run: NODE_PATH=$(npm root -g) node scripts/verify-exhibit.cjs
 */
const { chromium } = require("playwright");

const BASE = process.env.BASE || "http://localhost:3210";

/**
 * Collect console problem lines + the set of URLs that 404'd on this page.
 * The Vercel-edge analytics script (/_vercel/insights/script.js) 404s on the
 * local static export by design — such lines are removed by vercel404Only().
 */
const listen = (page, bag) => {
  const dud404 = new Set();
  page.on("response", (r) => {
    if (r.status() === 404) dud404.add(r.url());
  });
  page.on("console", (m) => {
    if (m.type() === "error" || m.type() === "warning")
      bag.push(`${m.type()}: ${m.text().slice(0, 200)}`);
  });
  page.on("pageerror", (e) => bag.push(`pageerror: ${e.message.slice(0, 200)}`));
  return dud404;
};

/* drop "Failed to load resource" lines only when a /_vercel URL actually 404'd
   (the analytics script is edge-served by Vercel in real deployments) */
const vercel404Only = (lines, duds) =>
  lines.filter(
    (line) =>
      !(
        line.includes("Failed to load resource") &&
        [...duds].some((u) => u.includes("/_vercel/"))
      ),
  );

(async () => {
  const browser = await chromium.launch();
  const report = { BASE };

  /* ── desktop rail ─────────────────────────────────────────── */
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const consoleDesktop = [];
  const dudsDesktop = listen(page, consoleDesktop);
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document.querySelector("#work").scrollIntoView({ behavior: "instant", block: "start" });
  });
  await page.waitForTimeout(500);

  report.geometry = await page.evaluate(() => {
    const runway = document.querySelector(".work-runway");
    const stage = runway.querySelector(".sticky");
    const track = runway.querySelector(".exhibit-track");
    const cards = runway.querySelectorAll(".work-card");
    const first = cards[0].getBoundingClientRect();
    return {
      runwayTop: Math.round(runway.getBoundingClientRect().top + window.scrollY),
      runwayH: Math.round(runway.offsetHeight),
      vh: window.innerHeight,
      overflowPx: Math.round(track.scrollWidth - stage.clientWidth),
      cardCount: cards.length,
      cardRect: {
        w: Math.round(first.width),
        h: Math.round(first.height),
        vw: window.innerWidth,
        targetWVw: Math.round((first.width / window.innerWidth) * 100),
        targetVh: Math.round((first.height / window.innerHeight) * 100),
      },
      sliverOfNextCardPx: Math.round(first.right - window.innerWidth + 0),
    };
  });

  // native horizontal scrollbar must not exist (stage clips, page never scrolls sideways)
  report.noHorizontalScrollbar =
    await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth);

  const samples = [];
  for (const f of [0, 0.25, 0.5, 0.75, 1]) {
    const y = Math.round(
      report.geometry.runwayTop + f * report.geometry.overflowPx,
    );
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), y);
    await page.waitForTimeout(1100); // spring settles (~1s, scrub:1 analog)
    samples.push({
      fraction: f,
    ...(await page.evaluate(() => {
      const stage = document.querySelector(".work-runway .sticky");
      const track = document.querySelector(".exhibit-track");
      const counter = stage.querySelector("p span");
      const bar = stage.querySelector(".bg-brand");
      const active = document.querySelector(".work-card[data-active]");
      const m = new DOMMatrixReadOnly(getComputedStyle(track).transform);
      return {
        scrollY: Math.round(window.scrollY),
        stageTop: Math.round(stage.getBoundingClientRect().top),
        trackX: Math.round(m.m41),
        counter: counter.textContent,
        activeIdx: active.getAttribute("data-card-index"),
        activeName: active.querySelector("h3").textContent.trim(),
        barScale: Number(
          (bar.getBoundingClientRect().width / bar.parentElement.getBoundingClientRect().width).toFixed(3),
        ),
      };
    })),
    });
  }
  report.pinnedSamples = samples;

  // pin assertions
  report.assertPin =
    samples.every((s) => s.stageTop === 0) &&
    Math.abs(samples[0].trackX) <= report.geometry.overflowPx * 0.005 &&
    Math.abs(samples[4].trackX + report.geometry.overflowPx) <= report.geometry.overflowPx * 0.005;
  const quarter = samples[1];
  report.assertLinearQuarter =
    Math.abs(quarter.trackX + Math.round(report.geometry.overflowPx * 0.25)) <= 24;
  report.assertCounter = samples.map((s) => s.counter).join(",");
  report.assertActiveOrder = samples.map((s) => s.activeIdx).join(",");

  // keyboard: focus a button inside the 4th card while at pin start
  const railStartTop = report.geometry.runwayTop;
  await page.evaluate((t) => window.scrollTo({ top: t, behavior: "instant" }), railStartTop);
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    document.querySelector(".work-card[data-card-index='3'] a").focus();
  });
  await page.waitForTimeout(400);
  report.keyboard = await page.evaluate(() => {
    const el = document.activeElement;
    const card = el.closest(".work-card");
    const r = card.getBoundingClientRect();
    return {
      focusedTag: el.tagName,
      focusedHref: el.getAttribute("href"),
      cardIdx: card.getAttribute("data-card-index"),
      floor: Math.round(r.top + window.scrollY),
      cardLeftInView: r.left >= -80 && r.right <= window.innerWidth + 80,
      nowScrollY: Math.round(window.scrollY),
    };
  });

  report.consoleDesktop = vercel404Only(consoleDesktop, dudsDesktop);
  await page.close();

  /* ── mobile <768px → stacked ──────────────────────────────── */
  const mob = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const consoleMob = [];
  const dudsMob = listen(mob, consoleMob);
  await mob.goto(BASE, { waitUntil: "networkidle" });
  await mob.waitForTimeout(900);
  report.mobile = await mob.evaluate(() => {
    const runway = document.querySelector(".work-runway");
    const stack = document.querySelectorAll("#work ol li");
    document.querySelector("#work").scrollIntoView({ behavior: "instant" });
    const tops = [...document.querySelectorAll("#work article")].map((c) =>
      Math.round(c.getBoundingClientRect().top + window.scrollY),
    );
    return {
      runwayGone: runway === null,
      stackedCards: document.querySelectorAll("#work article").length,
      topsMonotonic: tops.every((t, i) => i === 0 || t > tops[i - 1]),
      noHScroll: document.documentElement.scrollWidth <= window.innerWidth + 1,
    };
  });
  report.consoleMobile = vercel404Only(consoleMob, dudsMob);
  await mob.screenshot({ path: "_verify/mobile-stack.png", fullPage: false });
  await mob.close();

  /* ── reduced motion → stacked ─────────────────────────────── */
  const rm = await browser.newPage({
    viewport: { width: 1280, height: 800 },
    reducedMotion: "reduce",
  });
  const consoleRM = [];
  const dudsRM = listen(rm, consoleRM);
  await rm.goto(BASE, { waitUntil: "networkidle" });
  await rm.waitForTimeout(900);
  report.reducedMotion = await rm.evaluate(() => ({
    runwayGone: document.querySelector(".work-runway") === null,
    stackedCards: document.querySelectorAll("#work article").length,
  }));
  report.consoleReduced = vercel404Only(consoleRM, dudsRM);
  await rm.close();

  /* ── desktop screenshots ─────────────────────────────────── */
  const shots = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  listen(shots, []);
  await shots.goto(BASE, { waitUntil: "networkidle" });
  await shots.evaluate(() => {
    document.querySelector("#work").scrollIntoView({ behavior: "instant", block: "start" });
  });
  await shots.waitForTimeout(900);
  await shots.screenshot({ path: "_verify/rail-01.png" });
  await shots.evaluate(
    (y) => window.scrollTo({ top: y, behavior: "instant" }),
    Math.round(report.geometry.runwayTop + report.geometry.overflowPx * 0.5),
  );
  await shots.waitForTimeout(900);
  await shots.screenshot({ path: "_verify/rail-03.png" });
  await shots.close();

  await browser.close();
  console.log(JSON.stringify(report, null, 2));
})();
