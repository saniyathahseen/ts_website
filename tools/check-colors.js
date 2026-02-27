#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src');

const exts = ['.css', '.module.css', '.js', '.jsx', '.ts', '.tsx'];

const hexRe = /#[0-9a-fA-F]{3,6}\b/;
const hexReGlobal = /#[0-9a-fA-F]{3,6}\b/g;
const rgbRe = /rgb\([^)]*\)/i;
const rgbReGlobal = /rgb\([^)]*\)/ig;
const keywordRe = /\b(white|black|gray|grey|red|blue|green|yellow|pink|orange)\b/i;

const fixesEnabled = process.argv.includes('--fix');
const dryRun = process.argv.includes('--dry-run');
const preview = process.argv.includes('--preview') || process.argv.includes('--diff');

// map of safe hex replacements (lowercase keys)
const safeHexMap = {
  '#c48641': 'var(--brand-color)',
  '#91742b': 'var(--brand-dark)',
  '#fbf9f8': 'var(--white)',
  '#ffffff': 'var(--white)',
  '#fff': 'var(--white)',
  '#000000': 'var(--black)',
  '#000': 'var(--black)',
  '#facd9a': 'var(--text-color)',
  '#222222': 'var(--page-footer-bg)',
  '#222': 'var(--page-footer-bg)',
  '#c0392b': 'var(--error-color)'
};

function rgbToHex(r, g, b) {
  const toHex = (n) => {
    const v = Math.max(0, Math.min(255, Number(n) || 0));
    return v.toString(16).padStart(2, '0');
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
}

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
const replacements = [];

for (const file of files) {
  // allow tokens in index.css (authoritative source)
  const isIndex = file.endsWith(path.join('src','index.css')) || file.endsWith('index.css');
  const content = fs.readFileSync(file, 'utf8');

  // we'll operate line-by-line for diagnostics; accumulate edits only for CSS files when fixesEnabled
  const lines = content.split(/\r?\n/);
  let fileChanged = false;
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (!line) continue;
    // don't flag lines that explicitly use tokens
    if (line.includes('var(--')) continue;
    // skip CSS variable definitions (they live in index.css)
    if (/^\s*--[\w-]+\s*:\s*#/.test(line)) continue;
    if (isIndex) continue; // skip index.css entirely

    // skip css/js comment lines
    const t = line.trim();
    if (t.startsWith('/*') || t.startsWith('*') || t.startsWith('//') || t.includes('{/*')) continue;

    // If fix mode and this is a CSS file, try safe replacements first
    const isCssFile = file.endsWith('.css') || file.endsWith('.module.css');
    if (fixesEnabled && isCssFile) {
      // replace hex occurrences that map to safe tokens
      const hexMatches = line.match(hexReGlobal);
      if (hexMatches) {
        for (const h of hexMatches) {
          const key = h.toLowerCase();
          if (safeHexMap[key]) {
            line = line.split(h).join(safeHexMap[key]);
            replacements.push({ file, line: i + 1, from: h, to: safeHexMap[key] });
            fileChanged = true;
          }
        }
      }

      // replace rgb(...) where possible
      const rgbMatches = line.match(rgbReGlobal);
      if (rgbMatches) {
        for (const rtext of rgbMatches) {
          // ignore alpha/backdrop forms
          if (rtext.includes('/')) continue;
          // extract numbers (either comma or space separated)
          const nums = rtext.replace(/[rgb()]/ig, '').replace(/\//g, '').replace(/%/g, '').trim();
          const parts = nums.split(/[,\s]+/).filter(Boolean).slice(0,3);
          if (parts.length === 3) {
            const hex = rgbToHex(parts[0], parts[1], parts[2]);
            if (safeHexMap[hex]) {
              line = line.split(rtext).join(safeHexMap[hex]);
              replacements.push({ file, line: i + 1, from: rtext, to: safeHexMap[hex] });
              fileChanged = true;
            }
          }
        }
      }

      // if we modified the line, write it back to lines
      if (fileChanged) lines[i] = line;
    }

    // After attempting fixes (if any), still run the original detection rules to collect remaining problems
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

  // persist file changes if fixes were applied (and not dry-run)
  if (fixesEnabled && fileChanged) {
    if (dryRun) {
      // do not write files in dry-run mode
      continue;
    }
    try {
      fs.writeFileSync(file, lines.join('\n'), 'utf8');
    } catch (err) {
      console.error('Failed to write fixes to', file, err);
    }
  }
}

// If preview/diff requested, show a simple line-by-line diff for changed files
if (preview && replacements.length) {
  const grouped = replacements.reduce((acc, r) => {
    acc[r.file] = acc[r.file] || [];
    acc[r.file].push(r);
    return acc;
  }, {});

  console.log('\nPreview diffs for files with safe replacements:');
  for (const file of Object.keys(grouped)) {
    try {
      const orig = fs.readFileSync(file, 'utf8').split(/\r?\n/);
      // re-run the replacement logic on the original content (in-memory) to build the modified content
      let modified = orig.slice();
      for (let i = 0; i < modified.length; i++) {
        let line = modified[i];
        if (!line) continue;
        if (line.includes('var(--')) continue;
        const hexMatches = line.match(hexReGlobal);
        if (hexMatches) {
          for (const h of hexMatches) {
            const key = h.toLowerCase();
            if (safeHexMap[key]) line = line.split(h).join(safeHexMap[key]);
          }
        }
        const rgbMatches = line.match(rgbReGlobal);
        if (rgbMatches) {
          for (const rtext of rgbMatches) {
            if (rtext.includes('/')) continue;
            const nums = rtext.replace(/[rgb()]/ig, '').replace(/\//g, '').replace(/%/g, '').trim();
            const parts = nums.split(/[,\s]+/).filter(Boolean).slice(0,3);
            if (parts.length === 3) {
              const hex = rgbToHex(parts[0], parts[1], parts[2]);
              if (safeHexMap[hex]) line = line.split(rtext).join(safeHexMap[hex]);
            }
          }
        }
        modified[i] = line;
      }

      console.log('\n--- ' + file + ' (preview) ---');
      const max = Math.max(orig.length, modified.length);
      for (let i = 0; i < max; i++) {
        const o = orig[i] === undefined ? '' : orig[i];
        const m = modified[i] === undefined ? '' : modified[i];
        if (o !== m) {
          console.log(`-${o}`);
          console.log(`+${m}`);
        }
      }
    } catch (e) {
      console.error('Could not preview diff for', file, e.message);
    }
  }
}

if (replacements.length) {
  console.log('\nApplied safe color replacements (--fix):');
  for (const r of replacements) {
    console.log(`${r.file}:${r.line}  ${r.from} -> ${r.to}`);
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
  if (!replacements.length) {
    console.log('No hard-coded colors found (outside src/index.css).');
  } else {
    console.log('\nAll safe replacements applied. Please review changes and commit.');
  }
  process.exit(0);
}
