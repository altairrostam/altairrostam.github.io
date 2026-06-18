import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
const htmlFiles = [];

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    const stat = statSync(path);

    if (stat.isDirectory()) {
      walk(path);
    } else if (path.endsWith('.html')) {
      htmlFiles.push(path);
    }
  }
}

function count(pattern, value) {
  return value.match(pattern)?.length ?? 0;
}

walk(root);

const failures = [];
const contrastPairs = [
  ['light primary on bg', '#2E3B3F', '#F5F4EF'],
  ['light secondary on bg', '#5D6B6F', '#F5F4EF'],
  ['light secondary on surface', '#5D6B6F', '#EBE8E0'],
  ['light bg on ocean CTA', '#F5F4EF', '#476F6F'],
  ['dark primary on bg', '#E8E4DA', '#161C1D'],
  ['dark secondary on bg', '#B4BBB8', '#161C1D'],
  ['dark secondary on surface', '#B4BBB8', '#20292B'],
  ['dark bg on ocean CTA', '#161C1D', '#6B9A97'],
];

function hexToRgb(hex) {
  const value = hex.replace('#', '');
  return [0, 2, 4].map((start) => parseInt(value.slice(start, start + 2), 16) / 255);
}

function luminance(hex) {
  const channels = hexToRgb(hex).map((channel) =>
    channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
  );

  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}

function contrastRatio(foreground, background) {
  const first = luminance(foreground);
  const second = luminance(background);
  const lighter = Math.max(first, second);
  const darker = Math.min(first, second);

  return (lighter + 0.05) / (darker + 0.05);
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const imgCount = count(/<img\b/g, html);
  const altCount = count(/<img\b[^>]*\balt=/g, html);
  const buttonCount = count(/<button\b/g, html);
  const namedButtonCount = count(/<button\b(?=[^>]*(aria-label|aria-labelledby|>[^<]))/g, html);

  if (!/<main\b/.test(html)) failures.push(`${file}: missing <main>`);
  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${file}: missing title`);
  if (!/<meta name="description"/.test(html)) failures.push(`${file}: missing meta description`);
  if (!/<link rel="canonical"/.test(html)) failures.push(`${file}: missing canonical`);
  if (!/<meta property="og:image"/.test(html)) failures.push(`${file}: missing og:image`);
  if (imgCount !== altCount) failures.push(`${file}: ${imgCount - altCount} image(s) missing alt`);
  if (buttonCount !== namedButtonCount) failures.push(`${file}: ${buttonCount - namedButtonCount} button(s) missing accessible name`);
}

for (const [label, foreground, background] of contrastPairs) {
  const ratio = contrastRatio(foreground, background);

  if (ratio < 4.5) {
    failures.push(`${label}: contrast ratio ${ratio.toFixed(2)} is below 4.5`);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Static audit passed for ${htmlFiles.length} HTML files.`);
