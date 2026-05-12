import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const screenshotsDir = join(__dirname, '../screenshots/live');
mkdirSync(screenshotsDir, { recursive: true });

const projects = [
  { name: 'Watch Me', url: 'https://ohaya-watch-me.vercel.app/' },
  { name: 'MD Pro', url: 'https://md-pro-45064.web.app/' },
  { name: 'Portfolio', url: 'https://kelvin-ohaya-portfolio.netlify.app/' },
  { name: 'Mist', url: 'https://ko-mist.netlify.app' },
  { name: 'React Calculator', url: 'https://calculator-livid-kappa-43.vercel.app/' }
];

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

(async () => {
  const browser = await chromium.launch();
  try {
    for (const project of projects) {
      const id = slug(project.name);
      console.log(`📸 Capturing ${project.name} — ${project.url}`);

      // Desktop
      const page = await browser.newPage();
      await page.setViewportSize({ width: 1280, height: 800 });
      await page.goto(project.url, { waitUntil: 'networkidle' });
      await page.waitForTimeout(1000);
      const desktopPath = join(screenshotsDir, `${id}-desktop.png`);
      await page.screenshot({ path: desktopPath, fullPage: true });
      await page.close();

      // Mobile
      const mobile = await browser.newPage();
      await mobile.setViewportSize({ width: 375, height: 812 });
      await mobile.goto(project.url, { waitUntil: 'networkidle' });
      await mobile.waitForTimeout(1000);
      const mobilePath = join(screenshotsDir, `${id}-mobile.png`);
      await mobile.screenshot({ path: mobilePath, fullPage: true });
      await mobile.close();

      console.log(`✅ Saved ${desktopPath} and ${mobilePath}`);
    }

    console.log('All done — screenshots saved to /screenshots/live');
  } catch (err) {
    console.error('Error capturing screenshots:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
