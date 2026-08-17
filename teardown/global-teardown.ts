import fs from 'fs';
import path from 'path';

export default async function globalTeardown() {
    const authDir = path.resolve('playwright/auth');

    if (fs.existsSync(authDir)) {
        fs.rmSync(authDir, {
            recursive: true,
            force: true,
        });
    }
}