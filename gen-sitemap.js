const fs = require('fs');
const code = fs.readFileSync(__dirname + '/js/lessons.js', 'utf8').replace('const LESSONS', 'var LESSONS');
eval(code);

function slugify(t) {
  return t.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

const courses = [
  { k: 'html', t: 'HTML' },
  { k: 'css', t: 'CSS' },
  { k: 'js', t: 'JavaScript' }
];

const staticPages = [
  { path: '', freq: 'weekly', priority: '1.0' },
  { path: 'pages/editor', freq: 'weekly', priority: '0.9' },
  { path: 'learn', freq: 'weekly', priority: '0.9' },
  { path: 'blog', freq: 'monthly', priority: '0.8' },
  { path: 'blog/bootstrap-is-dead', freq: 'monthly', priority: '0.7' },
  { path: 'blog/learn-html-7-days', freq: 'monthly', priority: '0.7' },
  { path: 'terms', freq: 'monthly', priority: '0.5' },
  { path: 'privacy', freq: 'monthly', priority: '0.5' },
  { path: 'search', freq: 'weekly', priority: '0.8' }
];

let lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xhtml="http://www.w3.org/1999/xhtml"',
  '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
];

staticPages.forEach(p => {
  const loc = p.path ? `https://deoit.js.org/${p.path}` : 'https://deoit.js.org/';
  lines.push(`  <url>`);
  lines.push(`    <loc>${loc}</loc>`);
  lines.push(`    <lastmod>2026-07-26</lastmod>`);
  lines.push(`    <changefreq>${p.freq}</changefreq>`);
  lines.push(`    <priority>${p.priority}</priority>`);
  lines.push(`    <xhtml:link rel="alternate" hreflang="en" href="${loc}"/>`);
  lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`);
  if (p.path === '' || p.path === 'pages/editor') {
    lines.push(`    <image:image>`);
    lines.push(`      <image:loc>https://deoit.js.org/logo.png</image:loc>`);
    lines.push(`      <image:title>Deoit - Free Online Code Editor</image:title>`);
    lines.push(`      <image:caption>Deoit online code editor for HTML, CSS, and JavaScript</image:caption>`);
    lines.push(`    </image:image>`);
  }
  lines.push(`  </url>`);
});

let count = staticPages.length;
courses.forEach(c => {
  LESSONS[c.k].lessons.forEach(l => {
    const slug = slugify(l.title);
    const loc = `https://deoit.js.org/learn/${c.k}/${slug}`;
    lines.push(`  <url>`);
    lines.push(`    <loc>${loc}</loc>`);
    lines.push(`    <lastmod>2026-07-26</lastmod>`);
    lines.push(`    <changefreq>monthly</changefreq>`);
    lines.push(`    <priority>0.8</priority>`);
    lines.push(`    <xhtml:link rel="alternate" hreflang="en" href="${loc}"/>`);
    lines.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}"/>`);
    lines.push(`  </url>`);
    count++;
  });
});

lines.push('</urlset>');
fs.writeFileSync(__dirname + '/sitemap.xml', lines.join('\n'));
console.log('Sitemap updated: ' + count + ' URLs');
