import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });
await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
await page.evaluate(() => document.getElementById('about')?.scrollIntoView());
await page.waitForTimeout(1500);
await page.screenshot({ path: 'screenshot-about.png' });
console.log('done');
await browser.close();
