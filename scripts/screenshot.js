import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { mkdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const screenshotsDir = join(__dirname, "../screenshots");

// Create screenshots directory if it doesn't exist
mkdirSync(screenshotsDir, { recursive: true });

const takeScreenshots = async () => {
  const browser = await chromium.launch();

  try {
    // Desktop (1280x720)
    console.log("📸 Taking desktop screenshots (1280x720)...");
    const desktopPage = await browser.newPage();
    await desktopPage.setViewportSize({ width: 1280, height: 720 });
    await desktopPage.goto("http://localhost:5173", {
      waitUntil: "networkidle",
    });

    // Wait a bit for animations to settle
    await desktopPage.waitForTimeout(1000);

    // Hero section
    await desktopPage.screenshot({
      path: join(screenshotsDir, "01-hero-desktop.png"),
      fullPage: false,
    });

    // Scroll to projects
    await desktopPage.locator("#projects").scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: join(screenshotsDir, "02-projects-desktop.png"),
      fullPage: false,
    });

    // Scroll to skills
    await desktopPage.locator("#skills").scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: join(screenshotsDir, "03-skills-desktop.png"),
      fullPage: false,
    });

    // Scroll to contact
    await desktopPage.locator("#contact").scrollIntoViewIfNeeded();
    await desktopPage.waitForTimeout(500);
    await desktopPage.screenshot({
      path: join(screenshotsDir, "04-contact-desktop.png"),
      fullPage: false,
    });

    await desktopPage.close();

    // Mobile (375x812)
    console.log("📸 Taking mobile screenshots (375x812)...");
    const mobilePage = await browser.newPage();
    await mobilePage.setViewportSize({ width: 375, height: 812 });
    await mobilePage.goto("http://localhost:5173", {
      waitUntil: "networkidle",
    });

    await mobilePage.waitForTimeout(1000);

    // Hero
    await mobilePage.screenshot({
      path: join(screenshotsDir, "01-hero-mobile.png"),
      fullPage: false,
    });

    // Projects
    await mobilePage.locator("#projects").scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(500);
    await mobilePage.screenshot({
      path: join(screenshotsDir, "02-projects-mobile.png"),
      fullPage: false,
    });

    // Skills
    await mobilePage.locator("#skills").scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(500);
    await mobilePage.screenshot({
      path: join(screenshotsDir, "03-skills-mobile.png"),
      fullPage: false,
    });

    // Contact
    await mobilePage.locator("#contact").scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(500);
    await mobilePage.screenshot({
      path: join(screenshotsDir, "04-contact-mobile.png"),
      fullPage: false,
    });

    await mobilePage.close();

    console.log("✅ Screenshots saved to /screenshots");
  } catch (error) {
    console.error("❌ Error taking screenshots:", error);
    process.exit(1);
  } finally {
    await browser.close();
  }
};

takeScreenshots();
