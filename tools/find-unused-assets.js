#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const assetsDir = path.join(root, 'src', 'Assets');
const srcDir = path.join(root, 'src');

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const it of items) {
    const p = path.join(dir, it.name);
    if (it.isDirectory()) {
      files = files.concat(walk(p));
    } else {
      files.push(p);
    }
  }
  return files;
}

function isAssetFile(f) {
  return /\.(png|jpe?g|gif|webp|svg|json)$/i.test(f);
}

const assets = walk(assetsDir).filter(isAssetFile).map(f => path.relative(root, f));

const codeFiles = walk(srcDir).filter(p => !p.includes(path.join('src','Assets')) && /\.(js|jsx|ts|tsx|css)$/i.test(p));

const unused = [];

for (const a of assets) {
  const basename = path.basename(a);
  const rel = a.replace('src' + path.sep, '');
  let found = false;
  for (const cf of codeFiles) {
    const content = fs.readFileSync(cf, 'utf8');
    if (content.includes(rel) || content.includes(basename)) {
      found = true;
      break;
    }
  }
  if (!found) unused.push(a);
}

if (!unused.length) {
  console.log('No unused assets detected under src/Assets.');
  process.exit(0);
}

console.log('Potentially unused assets (please review before deleting):');
for (const u of unused) console.log('-', u);

// write candidates to tools/unused-assets.txt for review
try {
  fs.writeFileSync(path.join(root, 'tools', 'unused-assets.txt'), unused.join('\n'), 'utf8');
  console.log('\nWrote tools/unused-assets.txt');
} catch (e) {
  console.error('Failed to write tools/unused-assets.txt', e);
}
