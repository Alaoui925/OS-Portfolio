/** Final verification: caption/frame separation + stat band reveal. */
const { chromium } = require("playwright");
const os = require("os");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  // correlate the generic "Failed to load resource" line with real 404 URLs:
  // the /_vercel analytics script 404s only on the local static export
  const dud404 = new Set();
  page.on("response", (r) => { if (r.status() === 404) dud404.add(r.url()); });
  page.on("console", (m) => {
    if (
      m.type() === "error" &&
      !(m.text().includes("Failed to load resource") && [...dud404].some((u) => u.includes("/_vercel/")))
    )
      errors.push(m.text());
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
