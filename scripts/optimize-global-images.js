import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const baseDir = path.join(rootDir, 'public', 'images', 'imagens-la-global');
const originalsDir = path.join(baseDir, 'originals');
const optimizedDir = path.join(baseDir, 'optimized');
const manifestPath = path.join(baseDir, 'image-manifest.json');

const allowedExt = new Set(['.png', '.jpg', '.jpeg', '.webp']);

const slugify = (value) =>
    value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');

async function ensureDir(dirPath) {
    await fs.mkdir(dirPath, { recursive: true });
}

async function walk(dirPath) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        const relative = path.relative(baseDir, fullPath);
        const parts = relative.split(path.sep);
        if (parts[0] === 'originals' || parts[0] === 'optimized') {
            continue;
        }

        if (entry.isDirectory()) {
            files.push(...(await walk(fullPath)));
        } else if (allowedExt.has(path.extname(entry.name).toLowerCase())) {
            files.push(fullPath);
        }
    }

    return files;
}

async function run() {
    await ensureDir(originalsDir);
    await ensureDir(optimizedDir);

    const sources = await walk(baseDir);
    const manifest = [];

    for (const sourcePath of sources) {
        const relPath = path.relative(baseDir, sourcePath);
        const relDir = path.dirname(relPath);
        const ext = path.extname(sourcePath);
        const fileName = path.basename(sourcePath, ext);
        const pathParts = relPath.split(path.sep);
        const serviceFolder = pathParts.length > 1 ? pathParts[0] : 'root';

        const originalCopyPath = path.join(originalsDir, relPath);
        await ensureDir(path.dirname(originalCopyPath));
        await fs.copyFile(sourcePath, originalCopyPath);

        const optimizedService = slugify(serviceFolder);
        const optimizedFile = `${slugify(fileName)}.webp`;
        const optimizedPath = path.join(optimizedDir, optimizedService, optimizedFile);
        await ensureDir(path.dirname(optimizedPath));

        await sharp(sourcePath)
            .webp({
                quality: 74,
                effort: 5,
            })
            .toFile(optimizedPath);

        const originalStat = await fs.stat(sourcePath);
        const optimizedStat = await fs.stat(optimizedPath);

        manifest.push({
            sourceRelativePath: relPath.replaceAll('\\', '/'),
            originalCopyRelativePath: path.relative(rootDir, originalCopyPath).replaceAll('\\', '/'),
            optimizedRelativePath: path.relative(rootDir, optimizedPath).replaceAll('\\', '/'),
            serviceFolder,
            optimizedServiceFolder: optimizedService,
            sourceFileName: path.basename(sourcePath),
            optimizedFileName: optimizedFile,
            sourceBytes: originalStat.size,
            optimizedBytes: optimizedStat.size,
            reductionPercent: Number((((originalStat.size - optimizedStat.size) / originalStat.size) * 100).toFixed(2)),
            relDir: relDir === '.' ? '' : relDir.replaceAll('\\', '/'),
        });
    }

    manifest.sort((a, b) => a.optimizedRelativePath.localeCompare(b.optimizedRelativePath));

    const totalSourceBytes = manifest.reduce((acc, item) => acc + item.sourceBytes, 0);
    const totalOptimizedBytes = manifest.reduce((acc, item) => acc + item.optimizedBytes, 0);

    const payload = {
        generatedAt: new Date().toISOString(),
        totalImages: manifest.length,
        totalSourceBytes,
        totalOptimizedBytes,
        totalReductionPercent: Number(
            (((totalSourceBytes - totalOptimizedBytes) / totalSourceBytes) * 100).toFixed(2)
        ),
        images: manifest,
    };

    await fs.writeFile(manifestPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
    console.log(`Optimized ${manifest.length} images.`);
    console.log(`Manifest: ${path.relative(rootDir, manifestPath).replaceAll('\\', '/')}`);
}

run().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
