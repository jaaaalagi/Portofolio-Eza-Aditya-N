// scripts/compress-images.js
// Run: node scripts/compress-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');

// Images to compress with target quality settings
const imagesToCompress = [
    { input: 'projects/project-5.png', quality: 80, width: 1200 },
    { input: 'projects/Agrotera.png', quality: 80, width: 1200 },
    { input: 'projects/Moneaze 1.png', quality: 80, width: 1200 },
    { input: 'projects/project-2.png', quality: 80, width: 1200 },
    { input: 'projects/project-3.png', quality: 80, width: 1200 },
    { input: 'projects/project-4.png', quality: 80, width: 1200 },
    { input: 'about/Photo Profile 1.png', quality: 85, width: 800 },
    { input: 'about/wdw .png', quality: 80, width: 1200 },
    { input: 'certificate/sertifikat_sololearn_Eza Aditya N.jpg', quality: 80, width: 1200 },
];

async function compressImages() {
    console.log('🗜️  Compressing images...\n');
    let totalSavings = 0;

    for (const img of imagesToCompress) {
        const inputPath = path.join(PUBLIC_DIR, img.input);

        if (!fs.existsSync(inputPath)) {
            console.log(`⚠️  Skipped (not found): ${img.input}`);
            continue;
        }

        const originalSize = fs.statSync(inputPath).size;

        // Backup original
        const backupPath = inputPath + '.bak';
        if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(inputPath, backupPath);
        }

        try {
            const ext = path.extname(img.input).toLowerCase();
            let pipeline = sharp(inputPath).resize({ width: img.width, withoutEnlargement: true });

            if (ext === '.jpg' || ext === '.jpeg') {
                pipeline = pipeline.jpeg({ quality: img.quality, progressive: true });
            } else {
                pipeline = pipeline.png({ quality: img.quality, compressionLevel: 9, effort: 10 });
            }

            const buffer = await pipeline.toBuffer();

            // Only write if smaller
            if (buffer.length < originalSize) {
                fs.writeFileSync(inputPath, buffer);
                const newSize = buffer.length;
                const saved = originalSize - newSize;
                totalSavings += saved;
                console.log(`✅ ${img.input}`);
                console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024 / 1024).toFixed(2)} MB  (saved ${(saved / 1024).toFixed(0)} KB)\n`);
            } else {
                console.log(`ℹ️  ${img.input} — already optimal, skipped\n`);
            }
        } catch (err) {
            console.error(`❌ Error compressing ${img.input}:`, err.message);
        }
    }

    console.log(`\n🎉 Done! Total space saved: ${(totalSavings / 1024 / 1024).toFixed(2)} MB`);
}

compressImages();
