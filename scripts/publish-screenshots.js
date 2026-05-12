import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { mkdirSync, copyFileSync, existsSync, readdirSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcDir = join(__dirname, "../screenshots/live");
const destDir = join(__dirname, "../public/screenshots/live");

mkdirSync(destDir, { recursive: true });

if (!existsSync(srcDir)) {
  console.warn("Source screenshots directory not found:", srcDir);
  process.exit(0);
}

const files = readdirSync(srcDir).filter(
  (f) => f.endsWith(".png") || f.endsWith(".webp") || f.endsWith(".jpg"),
);
if (files.length === 0) {
  console.warn("No screenshot files found in", srcDir);
  process.exit(0);
}

for (const file of files) {
  const src = join(srcDir, file);
  const dest = join(destDir, file);
  copyFileSync(src, dest);
  console.log(`Copied ${file} -> public/screenshots/live/${file}`);
}

console.log("All screenshots published to public/screenshots/live");
