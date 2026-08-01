/*!
 * Deoit SEO Engine v1.0.0
 * ---------------------------------------------------------------------------
 * Zero-dependency, client-side metadata orchestrator for the Deoit platform.
 *
 * Responsibilities (executed synchronously inside <head>, BEFORE body render):
 *   1. Resolve the active window.location.pathname against a pre-compiled
 *      path-to-metadata registry (no network I/O, O(1) lookup).
 *   2. Synchronously reconcile <title>, <meta name="description">,
 *      <meta name="keywords">, <meta property="og:title"> and
 *      <meta property="og:description"> to eliminate title/content flicker.
 *   3. Enforce a single canonical URL: update an existing
 *      <link rel="canonical"> or synthesize one on-the-fly.
 *
 * The registry below is generated from the live static pages so it never
 * drifts from the content Googlebot receives on first paint.
 * ---------------------------------------------------------------------------
 */
(function (window, document) {
  'use strict';

  /* ---------------------------------------------------------------- config */
  var ORIGIN = 'https://deoit.js.org';
  var REGISTRY = {
  "/": {
    "title": "Deoit — Zero-Setup Online HTML Editor & Web IDE",
    "description": "Compile and ship HTML, CSS & JS instantly in your browser. A free zero-setup online HTML editor with autocomplete, file explorer, and live preview.",
    "keywords": "online HTML editor, zero setup web IDE, interactive coding platform, browser IDE, code playground, HTML CSS JS editor, live preview, syntax highlighting, autocomplete, web IDE, front-end IDE, browser development environment, code sandbox"
  },
  "/learn": {
    "title": "Free Web Development Courses — HTML, CSS & JS | Deoit",
    "description": "Learn web development for free with 52 interactive lessons in HTML, CSS, and JavaScript. Practice code in the browser with no downloads or setup needed.",
    "keywords": "learn web development, web development tutorial, learn HTML, learn CSS, learn JavaScript, learn React, learn Node.js, HTML tutorial, CSS tutorial, JavaScript tutorial, React tutorial, online code editor, web development course, interactive coding lessons"
  },
  "/learn-html": {
    "title": "Learn HTML — 25 Free Lessons for Semantic Markup",
    "description": "Orchestrate accessible, semantic HTML with 25 free lessons — tags, forms, tables, and modern page architecture. Practice live in the browser.",
    "keywords": "learn HTML, HTML course, semantic HTML, HTML5, HTML tags, web accessibility, HTML forms, HTML tables, page structure, markup language"
  },
  "/learn-css": {
    "title": "Learn CSS — 15 Free Lessons on Flexbox, Grid & Layout",
    "description": "Master CSS layout orchestration — Flexbox, Grid, and responsive fluidity — in 15 free lessons. Animations included. Code live in the browser.",
    "keywords": "learn CSS, CSS course, Flexbox, CSS Grid, responsive web design, CSS layout, CSS animations, CSS selectors, CSS variables, typography"
  },
  "/learn-js": {
    "title": "Learn JavaScript — 12 Free Lessons on ES6+ & DOM",
    "description": "Master JavaScript architecture — DOM manipulation, async paradigms, and ES6+ — across 12 free lessons. Run every snippet live in the browser.",
    "keywords": "learn JavaScript, JavaScript course, ES6+, DOM manipulation, async await, fetch API, JavaScript functions, closures, JavaScript classes, ES modules"
  },
  "/search": {
    "title": "Search Deoit - Find Lessons, Tutorials & Guides | Deoit",
    "description": "Search through 52+ free coding lessons on HTML, CSS, and JavaScript. Find tutorials, code examples, and interactive guides on the Deoit platform today.",
    "keywords": ""
  },
  "/pages/editor": {
    "title": "Deoit — Browser-Based IDE for HTML, CSS & JS",
    "description": "Build, test, and preview HTML, CSS, and JavaScript in real time. Deoit is a browser-based IDE with syntax highlighting, autocomplete, file explorer, and live preview.",
    "keywords": "browser IDE, HTML editor, CSS editor, JavaScript editor, web development, code playground, live preview, syntax highlighting, autocomplete, front-end IDE, prototyping tool"
  },
  "/404": {
    "title": "Page Not Found - Deoit",
    "description": "The page you're looking for doesn't exist. Return to Deoit's homepage and start coding.",
    "keywords": "",
    "noindex": true
  },
  "/learn/html/block-vs-inline-elements": {
    "title": "Block vs Inline Elements — HTML Tutorial for Beginners | Deoit",
    "description": "Understanding element display behavior and how to change it. Learn Block vs Inline Elements step by step with interactive code examples on Deoit.",
    "keywords": "block inline elements, html tutorial, html lesson, block vs inline elements, deoit"
  },
  "/learn/html/div-span-grouping-elements": {
    "title": "Div, Span & Grouping Elements — HTML Tutorial for Beginners | Deoit",
    "description": "Grouping content with generic and semantic containers. Learn Div, Span & Grouping Elements step by step with interactive code examples on Deoit.",
    "keywords": "div span grouping elements, html tutorial, html lesson, div, span & grouping elements, deoit"
  },
  "/learn/html/doctype-character-encoding": {
    "title": "Doctype & Character Encoding — HTML Tutorial for Beginners | Deoit",
    "description": "Understanding DOCTYPE declarations and character encoding. Learn Doctype & Character Encoding step by step with interactive code examples on Deoit.",
    "keywords": "doctype character encoding, html tutorial, html lesson, doctype & character encoding, deoit"
  },
  "/learn/html/forms-inputs": {
    "title": "Forms & Inputs — HTML Tutorial for Beginners | Deoit",
    "description": "Building interactive forms for user input. Learn Forms & Inputs step by step with interactive code examples on Deoit.",
    "keywords": "forms inputs, html tutorial, html lesson, forms & inputs, deoit"
  },
  "/learn/html/headings-paragraphs": {
    "title": "Headings & Paragraphs — HTML Tutorial for Beginners | Deoit",
    "description": "Structuring text content on a page. Learn Headings & Paragraphs step by step with interactive code examples on Deoit.",
    "keywords": "headings paragraphs, html tutorial, html lesson, headings & paragraphs, deoit"
  },
  "/learn/html/html-accessibility-a11y": {
    "title": "HTML Accessibility (a11y) — HTML Tutorial for Beginners | Deoit",
    "description": "Making your pages usable by everyone with ARIA and best practices. Learn HTML Accessibility (a11y) step by step with interactive code examples on Deoit.",
    "keywords": "html accessibility a11y, html tutorial, html lesson, html accessibility (a11y), deoit"
  },
  "/learn/html/html-attributes-deep-dive": {
    "title": "HTML Attributes Deep Dive — HTML Tutorial for Beginners | Deoit",
    "description": "Mastering attributes that customize element behavior. Learn HTML Attributes Deep Dive step by step with interactive code examples on Deoit.",
    "keywords": "html attributes deep dive, html tutorial, html lesson, html attributes deep dive, deoit"
  },
  "/learn/html/html-audio-video": {
    "title": "HTML Audio & Video — HTML Tutorial for Beginners | Deoit",
    "description": "Embedding multimedia content with native HTML elements. Learn HTML Audio & Video step by step with interactive code examples on Deoit.",
    "keywords": "html audio video, html tutorial, html lesson, html audio & video, deoit"
  },
  "/learn/html/html-best-practices": {
    "title": "HTML Best Practices — HTML Tutorial for Beginners | Deoit",
    "description": "Writing clean, maintainable, and accessible HTML. Learn HTML Best Practices step by step with interactive code examples on Deoit.",
    "keywords": "html best practices, html tutorial, html lesson, html best practices, deoit"
  },
  "/learn/html/html-canvas-basics": {
    "title": "HTML Canvas Basics — HTML Tutorial for Beginners | Deoit",
    "description": "Drawing graphics and animations with the HTML Canvas API. Learn HTML Canvas Basics step by step with interactive code examples on Deoit.",
    "keywords": "html canvas basics, html tutorial, html lesson, html canvas basics, deoit"
  },
  "/learn/html/html-comments": {
    "title": "HTML Comments — HTML Tutorial for Beginners | Deoit",
    "description": "Documenting your code with comments for future reference. Learn HTML Comments step by step with interactive code examples on Deoit.",
    "keywords": "html comments, html tutorial, html lesson, html comments, deoit"
  },
  "/learn/html/html-data-attributes": {
    "title": "HTML Data Attributes — HTML Tutorial for Beginners | Deoit",
    "description": "Storing custom data on elements for JavaScript interaction. Learn HTML Data Attributes step by step with interactive code examples on Deoit.",
    "keywords": "html data attributes, html tutorial, html lesson, html data attributes, deoit"
  },
  "/learn/html/html-email-templates": {
    "title": "HTML Email Templates — HTML Tutorial for Beginners | Deoit",
    "description": "Building email-compatible HTML with table-based layouts. Learn HTML Email Templates step by step with interactive code examples on Deoit.",
    "keywords": "html email templates, html tutorial, html lesson, html email templates, deoit"
  },
  "/learn/html/html-entities-symbols": {
    "title": "HTML Entities & Symbols — HTML Tutorial for Beginners | Deoit",
    "description": "Using special characters and symbols in HTML. Learn HTML Entities & Symbols step by step with interactive code examples on Deoit.",
    "keywords": "html entities symbols, html tutorial, html lesson, html entities & symbols, deoit"
  },
  "/learn/html/html-forms-validation": {
    "title": "HTML Forms & Validation — HTML Tutorial for Beginners | Deoit",
    "description": "Built-in validation without JavaScript using HTML attributes. Learn HTML Forms & Validation step by step with interactive code examples on Deoit.",
    "keywords": "html forms validation, html tutorial, html lesson, html forms & validation, deoit"
  },
  "/learn/html/html-head-meta-tags": {
    "title": "HTML Head & Meta Tags — HTML Tutorial for Beginners | Deoit",
    "description": "Configuring the head section for SEO, sharing, and performance. Learn HTML Head & Meta Tags step by step with interactive code examples on Deoit.",
    "keywords": "html head meta tags, html tutorial, html lesson, html head & meta tags, deoit"
  },
  "/learn/html/html-iframes": {
    "title": "HTML Iframes — HTML Tutorial for Beginners | Deoit",
    "description": "Embedding external content and understanding security implications. Learn HTML Iframes step by step with interactive code examples on Deoit.",
    "keywords": "html iframes, html tutorial, html lesson, html iframes, deoit"
  },
  "/learn/html/html-media-elements": {
    "title": "HTML Media Elements — HTML Tutorial for Beginners | Deoit",
    "description": "Displaying images with modern formats and responsive techniques. Learn HTML Media Elements step by step with interactive code examples on Deoit.",
    "keywords": "html media elements, html tutorial, html lesson, html media elements, deoit"
  },
  "/learn/html/html-seo-meta-tags": {
    "title": "HTML SEO & Meta Tags — HTML Tutorial for Beginners | Deoit",
    "description": "Optimizing HTML for search engines and social media. Learn HTML SEO & Meta Tags step by step with interactive code examples on Deoit.",
    "keywords": "html seo meta tags, html tutorial, html lesson, html seo & meta tags, deoit"
  },
  "/learn/html/html-svg-basics": {
    "title": "HTML SVG Basics — HTML Tutorial for Beginners | Deoit",
    "description": "Creating scalable vector graphics inline in HTML. Learn HTML SVG Basics step by step with interactive code examples on Deoit.",
    "keywords": "html svg basics, html tutorial, html lesson, html svg basics, deoit"
  },
  "/learn/html/html-tables-advanced": {
    "title": "HTML Tables Advanced — HTML Tutorial for Beginners | Deoit",
    "description": "Complex tables with merged cells, sections, and accessibility. Learn HTML Tables Advanced step by step with interactive code examples on Deoit.",
    "keywords": "html tables advanced, html tutorial, html lesson, html tables advanced, deoit"
  },
  "/learn/html/introduction-to-html": {
    "title": "Introduction to HTML — HTML Tutorial for Beginners | Deoit",
    "description": "What is HTML and how the web works. Learn Introduction to HTML step by step with interactive code examples on Deoit.",
    "keywords": "introduction html, html tutorial, html lesson, introduction to html, deoit"
  },
  "/learn/html/links-images": {
    "title": "Links & Images — HTML Tutorial for Beginners | Deoit",
    "description": "Adding hyperlinks and images to your pages. Learn Links & Images step by step with interactive code examples on Deoit.",
    "keywords": "links images, html tutorial, html lesson, links & images, deoit"
  },
  "/learn/html/lists-tables": {
    "title": "Lists & Tables — HTML Tutorial for Beginners | Deoit",
    "description": "Organizing data with lists and tables. Learn Lists & Tables step by step with interactive code examples on Deoit.",
    "keywords": "lists tables, html tutorial, html lesson, lists & tables, deoit"
  },
  "/learn/html/semantic-html": {
    "title": "Semantic HTML — HTML Tutorial for Beginners | Deoit",
    "description": "Using meaningful tags for better structure and SEO. Learn Semantic HTML step by step with interactive code examples on Deoit.",
    "keywords": "semantic html, html tutorial, html lesson, semantic html, deoit"
  },
  "/learn/css/animations-transitions": {
    "title": "Animations & Transitions — CSS Tutorial for Beginners | Deoit",
    "description": "Adding motion and interactivity with CSS. Learn Animations & Transitions step by step with interactive code examples on Deoit.",
    "keywords": "animations transitions, css tutorial, css lesson, animations & transitions, deoit"
  },
  "/learn/css/backgrounds-gradients": {
    "title": "Backgrounds & Gradients — CSS Tutorial for Beginners | Deoit",
    "description": "Enhancing designs with background images and gradients. Learn Backgrounds & Gradients step by step with interactive code examples on Deoit.",
    "keywords": "backgrounds gradients, css tutorial, css lesson, backgrounds & gradients, deoit"
  },
  "/learn/css/box-model-spacing": {
    "title": "Box Model & Spacing — CSS Tutorial for Beginners | Deoit",
    "description": "Understanding margins, padding, and borders. Learn Box Model & Spacing step by step with interactive code examples on Deoit.",
    "keywords": "box model spacing, css tutorial, css lesson, box model & spacing, deoit"
  },
  "/learn/css/css-grid": {
    "title": "CSS Grid — CSS Tutorial for Beginners | Deoit",
    "description": "Two-dimensional layout for complex designs. Learn CSS Grid step by step with interactive code examples on Deoit.",
    "keywords": "css grid, css tutorial, css lesson, css grid, deoit"
  },
  "/learn/css/css-position": {
    "title": "CSS Position — CSS Tutorial for Beginners | Deoit",
    "description": "Controlling element placement with position properties. Learn CSS Position step by step with interactive code examples on Deoit.",
    "keywords": "css position, css tutorial, css lesson, css position, deoit"
  },
  "/learn/css/css-units": {
    "title": "CSS Units — CSS Tutorial for Beginners | Deoit",
    "description": "Understanding different units for sizing and spacing. Learn CSS Units step by step with interactive code examples on Deoit.",
    "keywords": "css units, css tutorial, css lesson, css units, deoit"
  },
  "/learn/css/css-variables": {
    "title": "CSS Variables — CSS Tutorial for Beginners | Deoit",
    "description": "Using custom properties for reusable values. Learn CSS Variables step by step with interactive code examples on Deoit.",
    "keywords": "css variables, css tutorial, css lesson, css variables, deoit"
  },
  "/learn/css/display-property": {
    "title": "Display Property — CSS Tutorial for Beginners | Deoit",
    "description": "Controlling how elements are displayed and laid out. Learn Display Property step by step with interactive code examples on Deoit.",
    "keywords": "display property, css tutorial, css lesson, display property, deoit"
  },
  "/learn/css/flexbox": {
    "title": "Flexbox — CSS Tutorial for Beginners | Deoit",
    "description": "Modern one-dimensional layout system. Learn Flexbox step by step with interactive code examples on Deoit.",
    "keywords": "flexbox, css tutorial, css lesson, flexbox, deoit"
  },
  "/learn/css/introduction-to-css": {
    "title": "Introduction to CSS — CSS Tutorial for Beginners | Deoit",
    "description": "What CSS is and how to style your first elements. Learn Introduction to CSS step by step with interactive code examples on Deoit.",
    "keywords": "introduction css, css tutorial, css lesson, introduction to css, deoit"
  },
  "/learn/css/media-queries": {
    "title": "Media Queries — CSS Tutorial for Beginners | Deoit",
    "description": "Making responsive designs for different screen sizes. Learn Media Queries step by step with interactive code examples on Deoit.",
    "keywords": "media queries, css tutorial, css lesson, media queries, deoit"
  },
  "/learn/css/pseudo-classes-pseudo-elements": {
    "title": "Pseudo-Classes & Pseudo-Elements — CSS Tutorial for Beginners | Deoit",
    "description": "Styling elements in specific states or creating virtual elements. Learn Pseudo-Classes & Pseudo-Elements step by step with interactive code examples on Deoit.",
    "keywords": "pseudoclasses pseudoelements, css tutorial, css lesson, pseudo-classes & pseudo-elements, deoit"
  },
  "/learn/css/selectors-colors": {
    "title": "Selectors & Colors — CSS Tutorial for Beginners | Deoit",
    "description": "Targeting elements with selectors and using colors. Learn Selectors & Colors step by step with interactive code examples on Deoit.",
    "keywords": "selectors colors, css tutorial, css lesson, selectors & colors, deoit"
  },
  "/learn/css/shadows-effects": {
    "title": "Shadows & Effects — CSS Tutorial for Beginners | Deoit",
    "description": "Adding depth with box shadows, text shadows, and filters. Learn Shadows & Effects step by step with interactive code examples on Deoit.",
    "keywords": "shadows effects, css tutorial, css lesson, shadows & effects, deoit"
  },
  "/learn/css/typography-fonts": {
    "title": "Typography & Fonts — CSS Tutorial for Beginners | Deoit",
    "description": "Styling text with fonts, sizes, and spacing. Learn Typography & Fonts step by step with interactive code examples on Deoit.",
    "keywords": "typography fonts, css tutorial, css lesson, typography & fonts, deoit"
  },
  "/learn/js/arrays-loops": {
    "title": "Arrays & Loops — JavaScript Tutorial for Beginners | Deoit",
    "description": "Working with collections of data. Learn Arrays & Loops step by step with interactive code examples on Deoit.",
    "keywords": "arrays loops, javascript tutorial, javascript lesson, arrays & loops, deoit"
  },
  "/learn/js/date-time": {
    "title": "Date & Time — JavaScript Tutorial for Beginners | Deoit",
    "description": "Working with dates, times, and formatting. Learn Date & Time step by step with interactive code examples on Deoit.",
    "keywords": "date time, javascript tutorial, javascript lesson, date & time, deoit"
  },
  "/learn/js/dom-manipulation": {
    "title": "DOM Manipulation — JavaScript Tutorial for Beginners | Deoit",
    "description": "Interacting with HTML elements using JavaScript. Learn DOM Manipulation step by step with interactive code examples on Deoit.",
    "keywords": "dom manipulation, javascript tutorial, javascript lesson, dom manipulation, deoit"
  },
  "/learn/js/error-handling-debugging": {
    "title": "Error Handling & Debugging — JavaScript Tutorial for Beginners | Deoit",
    "description": "Managing errors gracefully and debugging effectively. Learn Error Handling & Debugging step by step with interactive code examples on Deoit.",
    "keywords": "error handling debugging, javascript tutorial, javascript lesson, error handling & debugging, deoit"
  },
  "/learn/js/es6-features": {
    "title": "ES6+ Features — JavaScript Tutorial for Beginners | Deoit",
    "description": "Modern JavaScript features you should know. Learn ES6+ Features step by step with interactive code examples on Deoit.",
    "keywords": "es6 features, javascript tutorial, javascript lesson, es6+ features, deoit"
  },
  "/learn/js/events-interactivity": {
    "title": "Events & Interactivity — JavaScript Tutorial for Beginners | Deoit",
    "description": "Responding to user actions with events. Learn Events & Interactivity step by step with interactive code examples on Deoit.",
    "keywords": "events interactivity, javascript tutorial, javascript lesson, events & interactivity, deoit"
  },
  "/learn/js/functions": {
    "title": "Functions — JavaScript Tutorial for Beginners | Deoit",
    "description": "Reusable blocks of code. Learn Functions step by step with interactive code examples on Deoit.",
    "keywords": "functions, javascript tutorial, javascript lesson, functions, deoit"
  },
  "/learn/js/introduction-to-javascript": {
    "title": "Introduction to JavaScript — JavaScript Tutorial for Beginners | Deoit",
    "description": "What JavaScript is and how to use it. Learn Introduction to JavaScript step by step with interactive code examples on Deoit.",
    "keywords": "introduction javascript, javascript tutorial, javascript lesson, introduction to javascript, deoit"
  },
  "/learn/js/json-fetch-api": {
    "title": "JSON & Fetch API — JavaScript Tutorial for Beginners | Deoit",
    "description": "Working with data formats and making HTTP requests. Learn JSON & Fetch API step by step with interactive code examples on Deoit.",
    "keywords": "json fetch api, javascript tutorial, javascript lesson, json & fetch api, deoit"
  },
  "/learn/js/number-math-methods": {
    "title": "Number & Math Methods — JavaScript Tutorial for Beginners | Deoit",
    "description": "Working with numbers, calculations, and formatting. Learn Number & Math Methods step by step with interactive code examples on Deoit.",
    "keywords": "number math methods, javascript tutorial, javascript lesson, number & math methods, deoit"
  },
  "/learn/js/string-methods": {
    "title": "String Methods — JavaScript Tutorial for Beginners | Deoit",
    "description": "Working with text using built-in string methods. Learn String Methods step by step with interactive code examples on Deoit.",
    "keywords": "string methods, javascript tutorial, javascript lesson, string methods, deoit"
  },
  "/learn/js/variables-data-types": {
    "title": "Variables & Data Types — JavaScript Tutorial for Beginners | Deoit",
    "description": "Storing data with variables and understanding types. Learn Variables & Data Types step by step with interactive code examples on Deoit.",
    "keywords": "variables data types, javascript tutorial, javascript lesson, variables & data types, deoit"
  },
  "/blog/bootstrap-is-dead": {
    "title": "Bootstrap is Dead in 2026 (Use This Instead) | Deoit Blog",
    "description": "Bootstrap's era is over in 2026. Learn why modern CSS frameworks and vanilla CSS have fully replaced Bootstrap, and what you should use instead today.",
    "keywords": "bootstrap dead, bootstrap alternative 2026, tailwind vs bootstrap, modern CSS, no framework web development, why stop using bootstrap"
  },
  "/blog/css-positioning-guide": {
    "title": "CSS Positioning: Center, Top, Bottom & More (2026 Guide) | Deoit Blog",
    "description": "Master CSS positioning. Learn to center elements, and place them at the top, bottom, left, or right using Flexbox, Grid, and position properties.",
    "keywords": "CSS center div, CSS center element, CSS position top, CSS position bottom, CSS flexbox center, CSS grid center, how to center a div, CSS layout guide, CSS positioning tutorial"
  },
  "/blog/index": {
    "title": "Web Development Blog — Tutorials & Guides for Coders | Deoit",
    "description": "Free web development tutorials, guides, and articles on HTML, CSS, JavaScript, and modern web frameworks. Learn to code online with the Deoit blog today.",
    "keywords": "web development blog, HTML tutorial, CSS tutorial, JavaScript tutorial, coding tips, learn to code, web development tips"
  },
  "/blog/learn-html-7-days": {
    "title": "Learn HTML in 7 Days — Free Beginner Guide | Deoit",
    "description": "Master HTML in just 7 days with this step-by-step guide. Learn elements, tags, forms, tables, and semantic HTML with daily exercises.",
    "keywords": "learn html, html tutorial, html in 7 days, learn html fast, html guide, html course, how to learn html"
  },
  "/login": {
    "title": "Sign In — Deoit",
    "description": "Sign in to Deoit with Google or GitHub to save projects, access all lessons, and unlock the full code editor experience."
  },
  "/privacy": {
    "title": "Deoit Privacy Policy — Data Collection & Cookies Policy",
    "description": "Read Deoit's Privacy Policy. Learn how we collect, use, and protect your personal data. No ads, no data sales."
  },
  "/terms": {
    "title": "Deoit Terms of Service — Usage Policy & Guidelines",
    "description": "Read Deoit's Terms of Service. Learn about acceptable use, intellectual property rights, user responsibilities, and more."
  },
  "/embed": {
    "title": "Embed — Deoit Code Editor",
    "description": "Embed the Deoit code editor on any page. Zero-setup HTML, CSS & JavaScript playground with live preview.",
    "noindex": true
  }
};

  /* ------------------------------------------------------- path utilities */
  function normalizePath(pathname) {
    var path = pathname || '/';
    try { path = decodeURIComponent(path); } catch (e) { /* keep raw */ }
    var q = path.indexOf('?');
    if (q !== -1) path = path.slice(0, q);
    var h = path.indexOf('#');
    if (h !== -1) path = path.slice(0, h);
    if (path.length > 1) {
      path = path.replace(/\.html$/i, '');
      path = path.replace(/\/+$/, '');
    }
    return path.length ? path : '/';
  }

  /* ------------------------------------------------------ meta mutation */
  function setMetaByProperty(prop, content) {
    if (!content) return;
    var el = document.querySelector('meta[property="' + prop + '"]');
    if (el) {
      el.setAttribute('content', content);
      return;
    }
    el = document.createElement('meta');
    el.setAttribute('property', prop);
    el.setAttribute('content', content);
    document.head.appendChild(el);
  }

  function setMetaByName(name, content) {
    if (!content) return;
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el) {
      el.setAttribute('content', content);
      return;
    }
    el = document.createElement('meta');
    el.setAttribute('name', name);
    el.setAttribute('content', content);
    document.head.appendChild(el);
  }

  /* ---------------------------------------------------------- canonical */
  function ensureCanonical(url) {
    var link = document.querySelector('link[rel="canonical"]');
    if (link) {
      if (link.getAttribute('href') !== url) link.setAttribute('href', url);
      return;
    }
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }

  /* -------------------------------------------------------------- apply */
  function apply(pathname) {
    var path = normalizePath(pathname);
    if (path === '/index') { path = '/'; }
    var meta = REGISTRY[path];
    var canonical = ORIGIN + path;

    ensureCanonical(canonical);

    if (!meta) {
      /* Unmatched route: keep static markup, canonical already normalized. */
      return;
    }

    if (meta.noindex) {
      setMetaByName('robots', 'noindex, follow');
      setMetaByName('googlebot', 'noindex, follow');
    }

    if (meta.title) {
      document.title = meta.title;
      setMetaByProperty('og:title', meta.title);
    }
    if (meta.description) {
      setMetaByName('description', meta.description);
      setMetaByProperty('og:description', meta.description);
    }
    if (meta.keywords) {
      setMetaByName('keywords', meta.keywords);
    }
  }

  /* ------------------------------------------- public API (SPA-ready) */
  var api = { apply: apply, normalizePath: normalizePath, ORIGIN: ORIGIN };
  if (window.PushStateEvent && window.history && window.history.pushState) {
    /* future-proof hook for client-side routing */
    window.addEventListener('popstate', function () {
      apply(window.location.pathname);
    });
  }
  try { window.DeoitSEO = api; } catch (e) { /* noop */ }

  /* ---------------------------------------------------- synchronous boot */
  apply(window.location.pathname);
})(window, document);
