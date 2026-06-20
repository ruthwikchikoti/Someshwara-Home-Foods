// One-off image recompression for Someshwara Home Foods.
//
// Resizes product/ambient PNG sources to a max of ~1000px and applies lossy
// PNG quantization (palette + reduced colors) to drastically cut file size
// without visible quality loss. Filenames are kept identical so all
// `next/image` references keep working. brand/shiva.png is intentionally
// left untouched.
//
// Usage: node scripts/recompress-images.mjs
import sharp from "sharp";
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const DIRS = [
  join(root, "public/images/products"),
  join(root, "public/images/ambient"),
];

const MAX_DIM = 1000;

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(0)}KB`;
}

async function processFile(filePath) {
  const before = (await stat(filePath)).size;
  const tmp = `${filePath}.tmp`;

  await sharp(filePath)
    .resize(MAX_DIM, MAX_DIM, { fit: "inside", withoutEnlargement: true })
    .png({
      palette: true, // lossy quantization
      quality: 78, // target palette quality
      effort: 9, // max zlib/quantization effort
      compressionLevel: 9,
    })
    .toFile(tmp);

  const after = (await stat(tmp)).size;

  // Only keep the recompressed version if it's actually smaller.
  if (after < before) {
    await rename(tmp, filePath);
  } else {
    await unlink(tmp);
  }

  return { before, after: Math.min(after, before) };
}

let totalBefore = 0;
let totalAfter = 0;

for (const dir of DIRS) {
  const entries = await readdir(dir);
  for (const name of entries) {
    if (!name.toLowerCase().endsWith(".png")) continue;
    const filePath = join(dir, name);
    const { before, after } = await processFile(filePath);
    totalBefore += before;
    totalAfter += after;
    console.log(`${name.padEnd(22)} ${fmtKB(before).padStart(8)} -> ${fmtKB(after).padStart(8)}`);
  }
}

console.log("-".repeat(44));
console.log(
  `TOTAL ${fmtKB(totalBefore)} -> ${fmtKB(totalAfter)} ` +
    `(${(100 - (totalAfter / totalBefore) * 100).toFixed(1)}% smaller)`,
);
