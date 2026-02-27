const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

async function run() {
  const outDir = path.resolve(__dirname, '..', 'build_snapshots');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const base = process.env.SCREENSHOT_BASE || 'http://localhost:3002/ts_website';
  const pages = [
    { route: '/', name: 'home' },
    { route: '/about', name: 'about' },
    { route: '/stories', name: 'stories' },
  ];

  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();

  for (const p of pages) {
    const url = `${base}${p.route}`;
    console.log('Navigating to', url);
    try {
      await page.goto(url, { waitUntil: 'networkidle' , timeout: 15000});
      await page.waitForTimeout(500); // stabilize
      const file = path.join(outDir, `${p.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      console.log('Saved', file);
    } catch (err) {
      console.error('Failed to capture', url, err.message);
    }
  }

  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
