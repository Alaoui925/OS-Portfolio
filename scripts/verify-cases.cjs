/**
 * Verification captures for the OS-Portfolio case-study audit.
 * Scrolls each target into view, waits for the reveal animation and
 * lazy images, then screenshots. Run with NODE_PATH=<global node_modules>.
 */
const { chromium } = require("playwright");
const os = require("os");
const path = require("path");

const TARGETS = [
  { id: "uniconnect-title", file: "w02-uniconnect.png" },
  { id: "medicare-title", file: "w03-medicare.png" },
  { id: "haven-title", file: "w05-haven.png" },
  { id: "os-portfolio-title", file: "w06-portfolio.png" },
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto("http://localhost:3210", { waitUntil: "load" });
  await page.waitForTimeout(1500);

  for (const t of TARGETS) {
    const el = page.locator(`[id="${t.id}"]`);
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1400);
    await page.screenshot({ path: path.join(os.tmpdir(), "opencode", t.file) });
  }

  // stat band at the bottom of evidence
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1800);
  await page.screenshot({ path: path.join(os.tmpdir(), "opencode", "stats-footer.png") });

  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await browser.close();
  console.log("captured:", TARGETS.map((t) => t.file).join(", "), "| errors:", errors.length);
})();
