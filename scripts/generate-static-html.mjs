/**
 * generate-static-html.mjs
 *
 * Post-build script for static deployment (e.g. Hostinger).
 *
 * TanStack Start + Cloudflare Workers does NOT emit a static index.html —
 * the server renders it on each request. This script reads the built
 * dist/client/assets/ and generates a proper production index.html for
 * client-side rendering on static hosts.
 *
 * Usage: node scripts/generate-static-html.mjs
 * Triggered automatically via "postbuild" in package.json.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const distClientDir = path.join(root, "dist", "client");
const assetsDir = path.join(distClientDir, "assets");
const outputHtml = path.join(distClientDir, "index.html");

if (!fs.existsSync(assetsDir)) {
  console.error("❌ dist/client/assets not found. Run npm run build first.");
  process.exit(1);
}

const files = fs.readdirSync(assetsDir);

// Find the compiled CSS file (starts with "styles")
const cssFile = files.find((f) => f.endsWith(".css") && f.startsWith("styles"));

// Find all JS files (exclude any server-only chunks if present)
const jsFiles = files.filter((f) => f.endsWith(".js"));

// Sort ascending by file size: smaller = entry/bootstrap, larger = vendor bundle
jsFiles.sort((a, b) => {
  const sA = fs.statSync(path.join(assetsDir, a)).size;
  const sB = fs.statSync(path.join(assetsDir, b)).size;
  return sA - sB;
});

const cssTag = cssFile
  ? `  <link rel="stylesheet" href="/assets/${cssFile}" />`
  : "";

const jsTags = jsFiles
  .map((js) => `  <script type="module" src="/assets/${js}"></script>`)
  .join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Feri DW — Web Developer</title>
  <meta name="description" content="Portfolio of Feri DW, a web developer crafting clean, fast, and thoughtful interfaces with React, TypeScript, and modern web tooling." />
  <meta name="author" content="Feri DW" />
  <meta property="og:title" content="Feri DW — Web Developer" />
  <meta property="og:description" content="Portfolio of Feri DW — clean, modern web experiences." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
  <link rel="icon" type="image/png" href="/favicon.png" />
${cssTag}
</head>
<body>
${jsTags}
</body>
</html>
`;

fs.writeFileSync(outputHtml, html);

console.log("✓ Generated dist/client/index.html");
console.log("  Included assets:");
if (cssFile) console.log(`    CSS : ${cssFile}`);
jsFiles.forEach((js) => {
  const kb = (fs.statSync(path.join(assetsDir, js)).size / 1024).toFixed(1);
  console.log(`    JS  : ${js} (${kb} kB)`);
});
