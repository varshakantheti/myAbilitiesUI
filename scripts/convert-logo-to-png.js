// Script to convert SVG logo to PNG
// Run with: node scripts/convert-logo-to-png.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
  <g id="graphic">
    <line x1="30" y1="18" x2="30" y2="8" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="40" y1="16" x2="44" y2="10" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="50" y1="14" x2="56" y2="8" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="60" y1="12" x2="68" y2="6" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="70" y1="10" x2="80" y2="5" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="80" y1="8" x2="90" y2="4" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="90" y1="10" x2="100" y2="5" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="100" y1="12" x2="108" y2="6" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="110" y1="14" x2="116" y2="8" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="120" y1="16" x2="124" y2="10" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <line x1="130" y1="18" x2="130" y2="8" stroke="#D4A574" stroke-width="2" stroke-linecap="round" />
    <path d="M 30 22 Q 80 12 130 22" fill="#D4A574" stroke="none" />
    <line x1="25" y1="26" x2="135" y2="26" stroke="#D4A574" stroke-width="1.5" stroke-linecap="round" />
    <line x1="20" y1="30" x2="140" y2="30" stroke="#D4A574" stroke-width="1.5" stroke-linecap="round" />
  </g>
  <text x="80" y="50" font-family="Georgia, serif" font-size="20" fill="#4A5568" font-weight="400" text-anchor="middle" letter-spacing="0.5">MyAbilities</text>
</svg>`;

// Save SVG and convert to PNG
const publicDir = path.join(__dirname, '..', 'public', 'assets');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const svgPath = path.join(publicDir, 'logo.svg');
const pngPath = path.join(publicDir, 'logo.png');

// Save SVG
fs.writeFileSync(svgPath, svgContent);
console.log('SVG saved to:', svgPath);

// Convert to PNG
try {
  await sharp(Buffer.from(svgContent))
    .resize(540, 180, { // 3x scale for retina displays
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
    })
    .png()
    .toFile(pngPath);
  
  console.log('PNG saved to:', pngPath);
  console.log('✓ Logo conversion complete!');
} catch (error) {
  console.error('Error converting to PNG:', error.message);
  console.log('\nYou can manually convert the SVG to PNG using:');
  console.log('1. Online converter: https://svgtopng.com');
  console.log('2. ImageMagick: convert public/assets/logo.svg public/assets/logo.png');
}

