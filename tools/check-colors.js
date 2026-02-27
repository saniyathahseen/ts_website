#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');

const exts = ['.css', '.module.css', '.js', '.jsx', '.ts', '.tsx'];

const hexRe = /#[0-9a-fA-F]{3,6}\b/;
const rgbRe = /rgb\([^)]*\)/i;
const keywordRe = /\b(white|black|gray|grey|red|blue|green|yellow|pink|orange)\b/i;

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const it of items) {
    const p = path.join(dir, it.name);
    if (it.isDirectory()) {
      if (it.name === 'node_modules' || it.name === 'build' || it.name === '.git') continue;
      files = files.concat(walk(p));
    } else {
      if (exts.some(e => p.endsWith(e))) files.push(p);
    }
  }
  return files;
}

const files = walk(src);
const problems = [];

for (const file of files) {
  // allow tokens in index.css (authoritative source)
  const isIndex = file.endsWith(path.join('src','index.css')) || file.endsWith('index.css');
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line) continue;
    // don't flag lines that explicitly use tokens
    if (line.includes('var(--')) continue;
    // skip CSS variable definitions (they live in index.css)
    if (/^\s*--[\w-]+\s*:\s*#/.test(line)) continue;
    if (isIndex) continue; // skip index.css entirely

    // skip css/js comment lines
    const t = line.trim();
    if (t.startsWith('/*') || t.startsWith('*') || t.startsWith('//') || t.includes('{/*')) continue;

    // match hex
    if (hexRe.test(line)) {
      problems.push({ file, line: i + 1, text: line.trim() });
      continue;
    }

    // match rgb(...) but ignore colors with alpha/backdrop like 'rgb(0 0 0 / 10%)'
    const rgbMatch = line.match(rgbRe);
    if (rgbMatch) {
      const rgbText = rgbMatch[0];
      if (!rgbText.includes('/')) {
        problems.push({ file, line: i + 1, text: line.trim() });
        continue;
      }
    }

    // match color keywords but only when used in a CSS/property context (avoid classnames like 'bg-white')
    if (keywordRe.test(line)) {
      const propContext = /\b(background|color|border|outline|fill|stroke)\b/i.test(line) || line.includes(':') || /style=\{/.test(line);
      if (propContext) {
        problems.push({ file, line: i + 1, text: line.trim() });
        continue;
      }
    }
  }
}

if (problems.length) {
  console.error('\nFound hard-coded color literals outside `src/index.css` (replace with tokens):\n');
  for (const p of problems) {
    console.error(`${p.file}:${p.line}: ${p.text}`);
  }
  console.error('\nPlease centralize colors in src/index.css and reference them via var(--your-token).');
  process.exit(1);
} else {
  console.log('No hard-coded colors found (outside src/index.css).');
  process.exit(0);
}
