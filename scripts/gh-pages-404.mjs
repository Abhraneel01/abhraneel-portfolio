// GitHub Pages has no SPA fallback: copy index.html -> 404.html and add .nojekyll
import { copyFileSync, writeFileSync } from 'node:fs';
const dir = 'dist/abhraneel-portfolio/browser';
copyFileSync(`${dir}/index.html`, `${dir}/404.html`);
writeFileSync(`${dir}/.nojekyll`, '');
console.log('✔ 404.html and .nojekyll created for GitHub Pages');
