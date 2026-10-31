const { chromium } = require("playwright");
const BASE = "http://localhost:3210";
const sizes = [["desktop-2k",1920,1080],["desktop-fhd",1440,900],["tablet-land",1024,768],["tablet-port",834,1110],["short-laptop",1280,620]];
(async () => {
  const browser = await chromium.launch();
  const report = [];
  for (const [name, w, h] of sizes) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    const errs = [];
    page.on("console", (m) => { if (m.type() === "error") errs.push(m.text().slice(0, 120)); });
    page.on("pageerror", (e) => errs.push("pageerror: " + e.message.slice(0, 120)));
    await page.goto(BASE, { waitUntil: "networkidle" });
    await page.waitForTimeout(600);
    const g = await page.evaluate(() => {
      const runway = document.querySelector(".work-runway");
      document.querySelector("#work").scrollIntoView({ behavior: "instant", block: "start" });
      window.scrollBy({ top: 2, behavior: "instant" });
      const stage = runway.querySelector(".sticky");
      const card = runway.querySelector(".work-card");
      const media = runway.querySelector(".work-card > div");
      const progress = runway.querySelector("div[aria-hidden='true']");
      const stageTop = Math.round(stage.getBoundingClientRect().top);
      const cr = card.getBoundingClientRect(), mr = media.getBoundingClientRect(), pr = progress.getBoundingClientRect();
      return { atPin: stageTop === 0, cardW: Math.round(cr.width), cardH: Math.round(cr.height),
        mediaRatio: Number((mr.width / mr.height).toFixed(3)),
        topGap: Math.round(cr.top), bottomVsProgress: Math.round(pr.top - cr.bottom),
        fits: cr.top >= 0 && cr.bottom <= pr.top - 4 };
    });
    report.push({ name, ...g, errs });
    await page.close();
  }
  await browser.close();
  console.log(JSON.stringify(report, null, 1));
})();
