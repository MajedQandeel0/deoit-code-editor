const fs = require('fs');
const path = require('path');
const LESSONS = require('./js/lessons.js');

const BASE_URL = 'https://deoit.js.org';

function slugify(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function generateMetaDescription(lesson, courseTitle) {
  const pad = ` Learn ${lesson.title} step by step with interactive code examples on Deoit — a browser-based IDE for HTML, CSS, and JavaScript.`;
  let d = (lesson.desc || '') + pad;
  if (d.length > 160) d = d.substring(0, 157) + '...';
  if (d.length < 150) d = (lesson.desc || lesson.title) + ` — Free ${courseTitle} tutorial with code examples on Deoit. Learn step by step.`;
  return d;
}

function generateKeywords(lesson, courseTitle) {
  const words = lesson.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 2);
  const base = [words.join(' '), `${courseTitle.toLowerCase()} tutorial`, `${courseTitle.toLowerCase()} lesson`, lesson.title.toLowerCase(), 'deoit'];
  return base.join(', ');
}

function generateLessonPage(course, lesson, courseTitle, courseColor) {
  const slug = slugify(lesson.title);
  const desc = generateMetaDescription(lesson, courseTitle);
  const keywords = generateKeywords(lesson, courseTitle);
  const canonicalUrl = `${BASE_URL}/learn/${course}/${slug}`;
  const pageTitle = `${lesson.title} — ${courseTitle} Tutorial for Beginners | Deoit`;
  const metaTitle = `${lesson.title} — Learn ${courseTitle} Free Lesson | Deoit`;

  const prevLesson = lesson.id > 1 ? LESSONS[course].lessons.find(l => l.id === lesson.id - 1) : null;
  const nextLesson = LESSONS[course].lessons.find(l => l.id === lesson.id + 1);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Courses", "item": `${BASE_URL}/learn` },
      { "@type": "ListItem", "position": 3, "name": `${courseTitle} Course`, "item": `${BASE_URL}/learn-${course}` },
      { "@type": "ListItem", "position": 4, "name": lesson.title, "item": canonicalUrl }
    ]
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": lesson.title,
    "description": desc,
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
    "proficiencyLevel": "Beginner",
    "dependencies": `${courseTitle}`,
    "about": {
      "@type": "Course",
      "name": `${courseTitle} Course`,
      "url": `${BASE_URL}/learn-${course}`
    }
  };

  let content = lesson.content;
  content = content.replace(/data-try="html"/g, '');

  const prevLink = prevLesson
    ? `<a href="/learn/${course}/${slugify(prevLesson.title)}" class="lesson-nav-link prev"><span class="nav-label">← Previous</span><span class="nav-title">${prevLesson.title}</span></a>`
    : `<a href="/learn-${course}" class="lesson-nav-link prev"><span class="nav-label">← Back to</span><span class="nav-title">${courseTitle} Course</span></a>`;

  const nextLink = nextLesson
    ? `<a href="/learn/${course}/${slugify(nextLesson.title)}" class="lesson-nav-link next"><span class="nav-label">Next →</span><span class="nav-title">${nextLesson.title}</span></a>`
    : `<a href="/learn-${course}" class="lesson-nav-link next"><span class="nav-label">Complete!</span><span class="nav-title">Back to ${courseTitle} Course</span></a>`;

  const sidebarLinks = LESSONS[course].lessons.map(l => {
    const isActive = l.id === lesson.id;
    const lslug = slugify(l.title);
    return `<a href="/learn/${course}/${lslug}" class="sidebar-link ${isActive ? 'active' : ''}">
            <span class="sidebar-num">${l.id}</span>
            <span class="sidebar-title">${l.title}</span>
          </a>`;
  }).join('\n        ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<meta name="title" content="${metaTitle}">
<meta name="description" content="${desc}">
<meta name="keywords" content="${keywords}">
<meta name="author" content="Majed Qandeel">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="theme-color" content="#0d0d0d">
<meta name="google-site-verification" content="AJuuF0rsaIv06P5hV9rmSIwmJUU99Laf3kELRWwfoqo" />
<meta name="msvalidate.01" content="D4B611868B4A3969DF885DDAB7189672" />
<meta property="og:type" content="article">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:title" content="${metaTitle}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${BASE_URL}/og-image.png">
<meta property="og:image:width" content="1280">
<meta property="og:image:height" content="640">
<meta property="og:image:alt" content="Deoit — Write, run, and preview HTML, CSS & JavaScript">
<meta property="og:site_name" content="Deoit">
<meta property="og:locale" content="en_US">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${metaTitle}">
<meta name="twitter:description" content="${desc}">
<meta name="twitter:image" content="${BASE_URL}/og-image.png">
<meta name="twitter:image:alt" content="Deoit — Write, run, and preview HTML, CSS & JavaScript">
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
<script src="../../js/seo-engine.js"></script>
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
        <a href="/search">Search</a>
      </div>
      <div class="blog-nav-actions">
        <a href="/search" class="nav-search-btn" title="Search">🔍</a>
        <a href="/pages/editor" class="btn btn-accent">Open Editor</a>
      </div>
    </div>
  </nav>

  <div class="learn-layout">
    <aside class="learn-sidebar">
      <div class="sidebar-header">
        <a href="/learn-${course}" class="sidebar-course-link">
          <span class="course-dot" style="background:${courseColor}"></span>
          ${courseTitle}
        </a>
        <p style="font-size:12px;color:var(--text-muted);margin-top:4px">${LESSONS[course].lessons.length} lessons</p>
      </div>
      <nav class="sidebar-nav">
        ${sidebarLinks}
      </nav>
    </aside>

    <main class="learn-main">
      <nav class="learn-breadcrumbs">
        <a href="/">Home</a>
        <span class="bc-sep">›</span>
        <a href="/learn">Courses</a>
        <span class="bc-sep">›</span>
        <a href="/learn-${course}">${courseTitle}</a>
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
          <span>·</span>
          <span>Lesson ${lesson.id} of ${LESSONS[course].lessons.length}</span>
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
        <p>Practice what you learned in the <a href="/pages/editor" target="_blank" rel="noopener">Deoit Editor</a> — a browser-based IDE for HTML, CSS, and JavaScript.</p>
        <a href="/pages/editor" class="btn btn-accent">Open Editor →</a>
      </div>

      <div class="lesson-feedback">
        <div class="feedback-bar">
          <span>Was this lesson helpful?</span>
          <button onclick="reportFeedback('helpful')" class="feedback-btn yes">👍 Yes</button>
          <button onclick="reportFeedback('not-helpful')" class="feedback-btn no">👎 No</button>
          <button onclick="reportFeedback('error')" class="feedback-btn err">⚠️ Found an error</button>
        </div>
        <div id="feedbackMsg" class="feedback-msg" style="display:none"></div>
        <div class="error-form" id="errorForm" style="display:none">
          <textarea id="errorDesc" placeholder="Describe the error or issue you found..." rows="3"></textarea>
          <button onclick="submitError()" class="btn btn-accent">Submit Report</button>
        </div>
      </div>
    </main>
  </div>

  <footer class="blog-footer">
    <p>&copy; 2026 Deoit · Built by <a href="${BASE_URL}"><strong>Majed Qandeel</strong></a></p>
  </footer>
  <script>
    var _fbSent=0;var _MAX_FB=3;
    function reportFeedback(type) {
      if(_fbSent>=_MAX_FB){var msg=document.getElementById('feedbackMsg');msg.style.display='block';msg.innerHTML='<span style="color:#98c379">Thanks for the feedback!</span>';return;}
      var msg = document.getElementById('feedbackMsg');
      var form = document.getElementById('errorForm');
      msg.style.display = 'block';
      if (type === 'error') {
        form.style.display = 'block';
        msg.innerHTML = '<span style="color:#e5c07b">Please describe the error below:</span>';
      } else if (type === 'helpful') {
        msg.innerHTML = '<span style="color:#98c379">Thanks for the feedback!</span>';
        form.style.display = 'none';
      } else {
        msg.innerHTML = '<span style="color:#e06c75">Sorry to hear that. Please describe what was wrong:</span>';
        form.style.display = 'block';
      }
      _fbSent++;
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: '[Deoit Feedback] ' + type + ' - ${lesson.title}',
          page: window.location.pathname,
          type: type,
          from_name: 'Deoit Lesson Feedback'
        })
      });
    }
    function submitError() {
      var desc = document.getElementById('errorDesc').value;
      var msg = document.getElementById('feedbackMsg');
      if (!desc.trim()) { msg.innerHTML = '<span style="color:#e06c75">Please describe the issue.</span>'; return; }
      if(_fbSent>=_MAX_FB){msg.innerHTML='<span style="color:#98c379">Thanks for the feedback!</span>';document.getElementById('errorForm').style.display='none';return;}
      _fbSent++;
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',
          subject: '[Deoit Error Report] ${lesson.title}',
          page: window.location.pathname,
          error_description: desc,
          from_name: 'Deoit Error Report'
        })
      });
      msg.innerHTML = '<span style="color:#98c379">Thanks for reporting!</span>';
      document.getElementById('errorForm').style.display = 'none';
    }
  </script>
</body>
</html>`;
}

let generated = 0;
const courses = [
  { key: 'html', title: 'HTML', color: '#e44d26' },
  { key: 'css', title: 'CSS', color: '#2965f1' },
  { key: 'js', title: 'JavaScript', color: '#f7df1e' }
];

// Clean old lesson files
for (const c of courses) {
  const dir = path.join(__dirname, 'learn', c.key);
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(f => {
      if (f.endsWith('.html')) fs.unlinkSync(path.join(dir, f));
    });
  }
}

for (const c of courses) {
  for (const lesson of LESSONS[c.key].lessons) {
    const slug = slugify(lesson.title);
    const html = generateLessonPage(c.key, lesson, c.title, c.color);
    const filePath = path.join(__dirname, 'learn', c.key, `${slug}.html`);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ ${c.key}/${slug}.html`);
    generated++;
  }
}

console.log(`\n🎉 Generated ${generated} lesson pages`);
