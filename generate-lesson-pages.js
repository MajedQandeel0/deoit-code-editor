const fs = require('fs');
const path = require('path');

// Import lessons data
const lessonsCode = fs.readFileSync(path.join(__dirname, 'js', 'lessons.js'), 'utf8');
const fn = new Function(lessonsCode + '; return LESSONS;');
const LESSONS = fn();

const BASE_URL = 'https://deoit.js.org';

const lessonMeta = {
  html: {
    1: { slug: 'introduction-to-html', keywords: 'what is html, introduction to html, html tutorial for beginners, learn html basics, how the web works html', desc: 'Learn what HTML is and how the web works. Understand the basic structure of an HTML document with tags, attributes, and your first web page.' },
    2: { slug: 'headings-and-paragraphs', keywords: 'html headings, html paragraphs, h1 h2 h3, html text formatting, heading hierarchy html', desc: 'Master HTML headings (h1-h6) and paragraphs. Learn about line breaks, horizontal rules, and best practices for text structure.' },
    3: { slug: 'links-and-images', keywords: 'html links, html images, anchor tag, img tag, href attribute, html hyperlinks', desc: 'Learn how to create hyperlinks with the anchor tag and add images with the img tag. Master link attributes, alt text, and image optimization.' },
    4: { slug: 'lists-and-tables', keywords: 'html lists, html tables, ul ol li, table tag, ordered list, unordered list, html data tables', desc: 'Organize data with ordered lists, unordered lists, nested lists, and HTML tables. Learn table structure with thead, tbody, and tfoot.' },
    5: { slug: 'forms-and-inputs', keywords: 'html forms, html inputs, form tag, input types, textarea, select dropdown, html form validation', desc: 'Build interactive HTML forms with text inputs, email fields, checkboxes, dropdowns, and submit buttons. Learn form validation and accessibility.' },
    6: { slug: 'semantic-html', keywords: 'semantic html, semantic tags, header nav main article, html5 semantic elements, accessibility html', desc: 'Use semantic HTML tags like header, nav, main, article, section, and footer to build accessible, SEO-friendly web pages.' },
    7: { slug: 'html-best-practices', keywords: 'html best practices, clean html code, html validation, html accessibility tips, writing good html', desc: 'Write clean, maintainable, and accessible HTML. Learn about doctype, character encoding, validation, and accessibility best practices.' }
  },
  css: {
    1: { slug: 'introduction-to-css', keywords: 'what is css, introduction to css, css tutorial for beginners, inline internal external css, how to style html', desc: 'Learn what CSS is and how to style your first HTML elements. Understand inline, internal, and external CSS with practical examples.' },
    2: { slug: 'selectors-and-colors', keywords: 'css selectors, css colors, class selector, id selector, hex colors, rgb hsl, css targeting elements', desc: 'Master CSS selectors and color systems. Learn element, class, ID, and combined selectors. Work with hex, RGB, HSL, and named colors.' },
    3: { slug: 'box-model-and-spacing', keywords: 'css box model, margin padding border, box-sizing border-box, css spacing, margin collapse', desc: 'Understand the CSS Box Model — margin, padding, and border. Learn about box-sizing, margin collapse, and spacing best practices.' },
    4: { slug: 'flexbox', keywords: 'css flexbox, flexbox tutorial, flex-direction, justify-content, align-items, flexbox centering, css layout', desc: 'Master CSS Flexbox for modern one-dimensional layouts. Learn flex direction, justify-content, align-items, centering, wrap, and gap.' },
    5: { slug: 'css-grid', keywords: 'css grid, grid layout, grid-template-columns, grid areas, responsive grid css, two-dimensional layout', desc: 'Learn CSS Grid for complex two-dimensional layouts. Master grid template columns, rows, areas, auto-fill, and responsive grids.' },
    6: { slug: 'typography-and-fonts', keywords: 'css typography, web fonts, google fonts, font-family font-size, line-height, text-align, letter-spacing', desc: 'Style text with CSS typography. Learn font families, sizes, weights, line height, letter spacing, and how to use Google Fonts.' },
    7: { slug: 'animations-and-transitions', keywords: 'css animations, css transitions, keyframes, transform, hover effects, animation timing, css motion', desc: 'Bring your pages to life with CSS animations and transitions. Learn keyframes, transforms, timing functions, and GPU-accelerated effects.' }
  },
  js: {
    1: { slug: 'introduction-to-javascript', keywords: 'what is javascript, javascript tutorial for beginners, how to use javascript, console log, script tag', desc: 'Learn what JavaScript is and how to use it. Write your first scripts, understand statements, comments, and the console.' },
    2: { slug: 'variables-and-data-types', keywords: 'javascript variables, let const var, data types js, string number boolean array object, typeof', desc: 'Master JavaScript variables and data types. Learn let vs const, strings, numbers, booleans, arrays, objects, and type checking.' },
    3: { slug: 'functions', keywords: 'javascript functions, function declaration, arrow functions, parameters return values, es6 functions', desc: 'Learn JavaScript functions — declaration, parameters, return values, arrow functions, and default parameters. Write reusable code.' },
    4: { slug: 'dom-manipulation', keywords: 'javascript dom, dom manipulation, querySelector, getElementById, addEventListener, create element js', desc: 'Interact with HTML elements using DOM manipulation. Select, change, create, and remove elements with JavaScript.' },
    5: { slug: 'events-and-interactivity', keywords: 'javascript events, addEventListener, click event, keyboard event, form submit, event delegation js', desc: 'Respond to user actions with JavaScript events. Handle clicks, keyboard input, form submissions, and master event delegation.' },
    6: { slug: 'arrays-and-loops', keywords: 'javascript arrays, for loop, forEach map filter, array methods, for of loop, while loop js', desc: 'Work with collections of data using JavaScript arrays and loops. Master push, pop, map, filter, forEach, and loop patterns.' },
    7: { slug: 'es6-features', keywords: 'javascript es6, template literals, destructuring, spread operator, optional chaining, arrow functions es6', desc: 'Learn modern ES6+ JavaScript features — arrow functions, template literals, destructuring, spread operator, optional chaining, and more.' }
  }
};

function generateLessonPage(course, lesson, courseTitle, courseColor) {
  const meta = lessonMeta[course][lesson.id];
  const prevLesson = lesson.id > 1 ? LESSONS[course].lessons[lesson.id - 2] : null;
  const nextLesson = lesson.id < LESSONS[course].lessons.length ? LESSONS[course].lessons[lesson.id] : null;
  
  const canonicalUrl = `${BASE_URL}/learn/${course}/${meta.slug}`;
  const pageTitle = `${lesson.title} - ${courseTitle} Tutorial | Deoit`;
  const metaTitle = `${lesson.title} - Free ${courseTitle} Lesson | Deoit`;
  
  // Build breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": `${courseTitle} Course`, "item": `${BASE_URL}/learn-${course}.html` },
      { "@type": "ListItem", "position": 3, "name": lesson.title, "item": canonicalUrl }
    ]
  };

  // Build article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": lesson.title,
    "description": meta.desc,
    "url": canonicalUrl,
    "datePublished": "2026-07-26",
    "dateModified": "2026-07-26",
    "author": { "@type": "Person", "name": "Majed Qandeel" },
    "publisher": {
      "@type": "Organization",
      "name": "Deoit",
      "logo": { "@type": "ImageObject", "url": `${BASE_URL}/logo.png` }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl },
    "about": {
      "@type": "Course",
      "name": `${courseTitle} Course - Learn ${courseTitle} from Scratch`,
      "url": `${BASE_URL}/learn-${course}.html`
    },
    "isPartOf": {
      "@type": "Course",
      "name": `${courseTitle} Course`,
      "url": `${BASE_URL}/learn-${course}.html`
    },
    "position": lesson.id,
    "articleSection": `${courseTitle} Lesson ${lesson.id}`
  };

  // Clean content (remove lesson-code spans for standalone display)
  let content = lesson.content;
  content = content.replace(/data-try="html"/g, '');

  const prevLink = prevLesson 
    ? `<a href="/learn/${course}/${lessonMeta[course][prevLesson.id].slug}" class="lesson-nav-link prev"><span class="nav-label">← Previous</span><span class="nav-title">${prevLesson.title}</span></a>`
    : `<a href="/learn-${course}.html" class="lesson-nav-link prev"><span class="nav-label">← Back to</span><span class="nav-title">${courseTitle} Course</span></a>`;
    
  const nextLink = nextLesson
    ? `<a href="/learn/${course}/${lessonMeta[course][nextLesson.id].slug}" class="lesson-nav-link next"><span class="nav-label">Next →</span><span class="nav-title">${nextLesson.title}</span></a>`
    : `<a href="/learn-${course}.html" class="lesson-nav-link next"><span class="nav-label">Complete!</span><span class="nav-title">Back to ${courseTitle} Course</span></a>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<meta name="title" content="${metaTitle}">
<meta name="description" content="${meta.desc}">
<meta name="keywords" content="${meta.keywords}">
<meta name="author" content="Majed Qandeel">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="theme-color" content="#0d0d0d">
<meta name="google-site-verification" content="AJuuF0rsaIv06P5hV9rmSIwmJUU99Laf3kELRWwfoqo" />
<meta name="msvalidate.01" content="D4B611868B4A3969DF885DDAB7189672" />
<meta property="og:type" content="article">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:title" content="${metaTitle}">
<meta property="og:description" content="${meta.desc}">
<meta property="og:image" content="${BASE_URL}/logo.png">
<meta property="og:site_name" content="Deoit">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${metaTitle}">
<meta name="twitter:description" content="${meta.desc}">
<meta name="twitter:image" content="${BASE_URL}/logo.png">
<link rel="canonical" href="${canonicalUrl}">
<link rel="alternate" href="${canonicalUrl}" hreflang="en">
<link rel="alternate" href="${canonicalUrl}" hreflang="x-default">
<link rel="icon" type="image/png" href="../../logo.png">
<link rel="apple-touch-icon" href="../../logo.png">
<link rel="stylesheet" href="../../css/learn.css">
<script type="application/ld+json">
${JSON.stringify(breadcrumbJsonLd, null, 2)}
</script>
<script type="application/ld+json">
${JSON.stringify(articleJsonLd, null, 2)}
</script>
<script defer src="https://cloud.umami.is/script.js" data-website-id="e41f2e20-74af-4d7a-a757-5eed0348d629"></script>
</head>
<body>
  <nav class="blog-nav">
    <div class="blog-nav-inner">
      <a href="/" class="blog-nav-logo"><img src="../../logo.png" alt="Deoit" width="28" height="28"><span>Deoit</span></a>
      <div class="blog-nav-links">
        <a href="/">Home</a>
        <a href="/pages/editor">Editor</a>
        <a href="/learn" class="active">Courses</a>
        <a href="/blog">Blog</a>
      </div>
      <div class="blog-nav-actions"><a href="/pages/editor" class="btn btn-accent">Open Editor</a></div>
    </div>
  </nav>

  <div class="learn-layout">
    <aside class="learn-sidebar">
      <div class="sidebar-header">
        <a href="/learn-${course}.html" class="sidebar-course-link">
          <span class="course-dot" style="background:${courseColor}"></span>
          ${courseTitle}
        </a>
      </div>
      <nav class="sidebar-nav">
        ${LESSONS[course].lessons.map(l => {
          const isActive = l.id === lesson.id;
          const slug = lessonMeta[course][l.id].slug;
          return `<a href="/learn/${course}/${slug}" class="sidebar-link ${isActive ? 'active' : ''}">
            <span class="sidebar-num">${l.id}</span>
            <span class="sidebar-title">${l.title}</span>
          </a>`;
        }).join('\n        ')}
      </nav>
    </aside>

    <main class="learn-main">
      <nav class="learn-breadcrumbs">
        <a href="/">Home</a>
        <span class="bc-sep">›</span>
        <a href="/learn">Courses</a>
        <span class="bc-sep">›</span>
        <a href="/learn-${course}.html">${courseTitle}</a>
        <span class="bc-sep">›</span>
        <span>${lesson.title}</span>
      </nav>

      <div class="lesson-header">
        <span class="lesson-tag" style="background:${courseColor}">${courseTitle} — Lesson ${lesson.id}</span>
        <h1>${lesson.title}</h1>
        <p class="lesson-desc">${lesson.desc}</p>
        <div class="lesson-meta">
          <span>By Majed Qandeel</span>
          <span>·</span>
          <span>Jul 26, 2026</span>
        </div>
      </div>

      <div class="lesson-content">
        ${content}
      </div>

      <div class="lesson-navigation">
        ${prevLink}
        ${nextLink}
      </div>

      <div class="lesson-cta">
        <p>Practice what you learned in the <a href="/pages/editor" target="_blank" rel="noopener">Deoit Editor</a> — a free, browser-based code editor.</p>
        <a href="/pages/editor" class="btn btn-accent">Open Editor →</a>
      </div>
    </main>
  </div>

  <footer class="blog-footer">
    <p>&copy; 2026 Deoit · Built by <a href="${BASE_URL}"><strong>Majed Qandeel</strong></a></p>
  </footer>
</body>
</html>`;
}

// Generate all pages
let generated = 0;

const courses = [
  { key: 'html', title: 'HTML', color: '#e44d26' },
  { key: 'css', title: 'CSS', color: '#2965f1' },
  { key: 'js', title: 'JavaScript', color: '#f7df1e' }
];

for (const c of courses) {
  for (const lesson of LESSONS[c.key].lessons) {
    const meta = lessonMeta[c.key][lesson.id];
    const html = generateLessonPage(c.key, lesson, c.title, c.color);
    const filePath = path.join(__dirname, 'learn', c.key, `${meta.slug}.html`);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ Created: learn/${c.key}/${meta.slug}.html`);
    generated++;
  }
}

console.log(`\n🎉 Generated ${generated} lesson pages`);
