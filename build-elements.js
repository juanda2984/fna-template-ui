const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, 'dist', 'fna-template-ui');
const outRoot = path.join(__dirname, 'dist-webcomponent');
const out = path.join(outRoot, 'fna-template-ui');

const PUBLIC_BASE = 'fna-template-ui/';

fs.rmSync(outRoot, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

const files = fs.readdirSync(dist);

const jsFiles = files
  .filter((f) => f.endsWith('.js') && !f.startsWith('polyfills'))
  .sort((a, b) => {
    const order = ['runtime', 'scripts', 'main'];
    const ai = order.findIndex((x) => a.startsWith(x));
    const bi = order.findIndex((x) => b.startsWith(x));
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

const cssFiles = files.filter((f) => f.endsWith('.css'));

function fixPaths(content) {
  return content
    .replace(/assets\/fna\//g, `${PUBLIC_BASE}assets/fna/`)
    .replace(/\/FNA-TemplateUI\/fna\//g, `${PUBLIC_BASE}assets/fna/`)
    .replace(/https:\/\/fnabogpsoa\.fna\.gov\.co:8099\/FNA-TemplateUI\/fna\//g, `${PUBLIC_BASE}assets/fna/`)
    .replace(/["']?[^"']*FNA-TemplateUI\/fna\/header\.xhtml["']?/g, '""')
    .replace(/["']?[^"']*FNA-TemplateUI\/fna\/footer\.xhtml["']?/g, '""');
}

let jsBundle = '';
for (const file of jsFiles) {
  let content = fs.readFileSync(path.join(dist, file), 'utf8');
  content = fixPaths(content);
  jsBundle += content + '\n';
}

let cssBundle = '';
for (const file of cssFiles) {
  let content = fs.readFileSync(path.join(dist, file), 'utf8');
  content = fixPaths(content);

  content = content.replace(
    /@import\s+url\(["']?https:\/\/fnabogpsoa\.fna\.gov\.co:8099\/FNA-TemplateUI\/fna\/css\/bootstrap\/3\.3\.6\/bootstrap\.css["']?\);\s*/g,
    ''
  );

  content = content.replace(
    /@import\s+url\(["']?https:\/\/fnabogpsoa\.fna\.gov\.co:8099\/FNA-TemplateUI\/fna\/css\/fna\/1\.0\.0\/fna\.css["']?\);\s*/g,
    ''
  );

  cssBundle += content + '\n';
}

fs.writeFileSync(path.join(out, 'fna-template-ui.js'), jsBundle);
fs.writeFileSync(path.join(out, 'fna-template-ui.css'), cssBundle);

const assetExtensions = [
  '.eot',
  '.ttf',
  '.woff',
  '.woff2',
  '.svg',
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.ico',
  '.json'
];

for (const file of files) {
  const source = path.join(dist, file);
  const target = path.join(out, file);

  if (fs.statSync(source).isFile()) {
    const ext = path.extname(file).toLowerCase();

    if (assetExtensions.includes(ext)) {
      fs.copyFileSync(source, target);
    }
  }
}

const assetsSrc = path.join(dist, 'assets');
const assetsDest = path.join(out, 'assets');

if (fs.existsSync(assetsSrc)) {
  fs.cpSync(assetsSrc, assetsDest, { recursive: true });
}

console.log('Web Component generado en dist-webcomponent/fna-template-ui');