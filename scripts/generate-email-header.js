const { createCanvas } = require('canvas');
const opentype = require('opentype.js');
const path = require('path');
const fs = require('fs');

const fontPath = path.join(__dirname, '..', 'public', 'Jacquard12.ttf');
const font = opentype.loadSync(fontPath);

const text = 'Pesan Baru Dari Portofolio';
const fontSize = 40;
const width = 600;
const height = 90;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#111111';
ctx.fillRect(0, 0, width, height);

// Draw text using opentype
const textWidth = font.getAdvanceWidth(text, fontSize);
const x = (width - textWidth) / 2;
const y = height / 2 + fontSize / 3;

const p = font.getPath(text, x, y, fontSize);
p.fill = '#ffffff';
p.draw(ctx);

// Save
const out = path.join(__dirname, '..', 'public', 'email-header.png');
fs.writeFileSync(out, canvas.toBuffer('image/png'));
console.log('Done! Saved to:', out);
