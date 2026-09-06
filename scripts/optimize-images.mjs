import sharp from "sharp";
import fs from "fs";
import path from "path";

const PUB = "public";

// [source, output, maxWidth, quality]
const jobs = [
  ["hero.png", "hero.webp", 1920, 80],
  ["hero_responsive.png", "hero_responsive.webp", 1080, 80],
  ["company.jpg", "company.webp", 1200, 80],
  ["pistachio.jpg", "pistachio.webp", 800, 82],
  ["raisins.JPG", "raisins.webp", 800, 82],
  ["fig.JPG", "fig.webp", 800, 82],
  ["apricot.JPG", "apricot.webp", 800, 82],
  ["date.JPG", "date.webp", 800, 82],
  ["date2.JPG", "date2.webp", 800, 82],
  ["plum.JPG", "plum.webp", 800, 82],
  ["kutu1.jpeg", "kutu1.webp", 1000, 80],
  ["kutu2.jpeg", "kutu2.webp", 1000, 80],
  ["kutu3.jpg", "kutu3.webp", 1000, 80],
  ["kutu4.jpg", "kutu4.webp", 1000, 80],
  ["kutu5.jpg", "kutu5.webp", 1000, 80],
  ["kutu6.jpg", "kutu6.webp", 1000, 80],
  ["kutu7.jpg", "kutu7.webp", 1000, 80],
];

const kb = (p) => Math.round(fs.statSync(p).size / 1024);

for (const [src, out, maxW, q] of jobs) {
  const srcPath = path.join(PUB, src);
  const outPath = path.join(PUB, out);
  const before = kb(srcPath);
  await sharp(srcPath)
    .resize({ width: maxW, withoutEnlargement: true })
    .webp({ quality: q })
    .toFile(outPath);
  const after = kb(outPath);
  console.log(
    `${src.padEnd(22)} ${String(before + "KB").padEnd(9)} -> ${out.padEnd(22)} ${after}KB`
  );
}
