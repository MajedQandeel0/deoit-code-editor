# Contributing to Deoit

Thanks for your interest in contributing to Deoit! This guide will help you get started.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 16+ (for local development)
- [Git](https://git-scm.com/)
- A modern web browser (Chrome, Firefox, Edge, or Safari)

### Local Development Setup

1. **Fork the repository**
   - Go to [github.com/MajedQandeel0/deoit-code-editor](https://github.com/MajedQandeel0/deoit-code-editor)
   - Click the **Fork** button in the top-right corner
   - This creates a copy of the project under your GitHub account

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/deoit-code-editor.git
   cd deoit-code-editor
   ```

3. **Start a local server**
   ```bash
   # Option A: Python
   python -m http.server 3000

   # Option B: Node.js
   npx serve .

   # Option C: PHP
   php -S localhost:3000
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

No build step is required. Deoit is built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
deoit-code-editor/
├── index.html              # Landing page
├── login.html              # Login page
├── learn.html              # Course listing
├── learn-html.html         # HTML course
├── learn-css.html          # CSS course
├── learn-js.html           # JavaScript course
├── learn-react.html        # React course
├── learn-node.html         # Node.js course
├── learn-tools.html        # Developer tools course
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── 404.html                # Custom 404 page
├── embed.html              # Embeddable widget
├── blog/
│   ├── index.html          # Blog listing
│   ├── bootstrap-is-dead.html
│   └── learn-html-7-days.html
├── pages/
│   └── editor.html         # Code editor page
├── js/
│   ├── editor.js           # Core editor logic
│   ├── auth.js             # Supabase authentication
│   └── script.js           # Shared utilities
├── css/
│   ├── style.css           # Landing page + shared styles
│   ├── editor.css          # Editor page styles
│   ├── learn.css           # Course page styles
│   └── blog.css            # Blog page styles
├── logo.png                # Deoit logo
├── favicon.png             # Browser favicon
├── manifest.json           # PWA manifest
├── sw.js                   # Service worker
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site map
├── llms.txt                # AI model site description
├── llms-full.txt           # Detailed AI model description
└── LICENSE                 # MIT License
```

## How to Contribute

### Report a Bug

1. Go to [Issues](https://github.com/MajedQandeel0/deoit-code-editor/issues)
2. Click **New Issue**
3. Describe the bug:
   - What you expected to happen
   - What actually happened
   - Steps to reproduce
   - Browser and device info

### Suggest a Feature

1. Go to [Issues](https://github.com/MajedQandeel0/deoit-code-editor/issues)
2. Click **New Issue**
3. Title it: `Feature: [your idea]`
4. Describe the feature, why it's useful, and how it should work

### Submit Code Changes

1. **Create a branch** for your change
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes**
   - Follow the code style (see below)
   - Test your changes in multiple browsers
   - Test on mobile and desktop

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your short description"
   ```

   Commit message format:
   - `feat:` — new feature
   - `fix:` — bug fix
   - `docs:` — documentation only
   - `style:` — code style (formatting, no logic change)
   - `refactor:` — code restructuring (no feature change)
   - `test:` — adding or updating tests

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**
   - Go to the original repo
   - Click **Compare & pull request**
   - Describe what you changed and why
   - Link any related issues (e.g., `Closes #12`)

## Code Style

### General Rules

- **No frameworks.** Deoit is built with vanilla JavaScript only.
- **No build tools.** No webpack, Vite, or bundlers.
- Keep files small and focused. One file = one responsibility.
- Use semantic HTML (`<nav>`, `<section>`, `<article>`, etc.)

### HTML

- Use 2-space indentation
- Add `alt` attributes to all `<img>` tags
- Add `aria-label` to icon-only buttons
- Keep meta tags consistent across pages

### CSS

- Use CSS custom properties (`var(--accent)`, `var(--bg)`, etc.)
- Use class names with BEM-like patterns: `.feature-card-landing`, `.hero-fcard`
- Avoid `!important`
- Keep responsive: mobile-first approach
- Test on screens from 320px to 2560px

### JavaScript

- Use vanilla JS only — no jQuery, no libraries
- Use `const` and `let`, never `var`
- Add event listeners with `{ passive: true }` for scroll/touch events
- Wrap scripts in IIFEs or `DOMContentLoaded` to avoid global scope pollution
- Handle errors gracefully with `.catch()` or `try/catch`

### Security

- Never log secrets, tokens, or API keys
- Always validate user input
- Use `textContent` instead of `innerHTML` for user-generated content
- Check `postMessage` origins

## Available Issues

Look for issues tagged with:

- `good first issue` — perfect for first-time contributors
- `help wanted` — we need community help
- `bug` — something is broken
- `enhancement` — new feature ideas

## Questions?

If you have questions about contributing:

- Open a [Discussion](https://github.com/MajedQandeel0/deoit-code-editor/discussions)
- Or email: [deoit.platform@gmail.com](mailto:deoit.platform@gmail.com)

## License

By contributing to Deoit, you agree that your contributions will be licensed under the [MIT License](LICENSE).
