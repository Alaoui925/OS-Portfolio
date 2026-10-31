/** Final verification: caption/frame separation + stat band reveal. */
const { chromium } = require("playwright");
const os = require("os");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });

  await page.goto("http://localhost:3210", { waitUntil: "load" });
  await page.waitForTimeout(1500);

  await page.locator(`[id="uniconnect-title"]`).scrollIntoViewIfNeeded();
  await page.waitForTimeout(1400);
  await page.screenshot({ path: path.join(os.tmpdir(), "opencode", "final-w02.png") });

  await page.getByText("Public repositories").scrollIntoViewIfNeeded();
  await page.waitForTimeout(1800);
  await page.screenshot({ path: path.join(os.tmpdir(), "opencode", "final-stats.png") });

  await browser.close();
  console.log("errors:", errors.length ? errors.join(" || ") : "none");
})();
