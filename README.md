<p align="center">
  <img src="logo.png" alt="Deoit" width="80" height="80" style="border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.3);">
</p>

<h1 align="center">Deoit</h1>

<p align="center">
  <strong>Free, open-source browser-based code editor for HTML, CSS & JavaScript</strong><br>
  Write, run, and preview code instantly — no downloads, no setup, no sign-up required.
</p>

<p align="center">
  <a href="https://deoit.js.org">
    <img src="https://img.shields.io/badge/Try_Deoit-deoit.js.org-4361ee?style=for-the-badge&logo=vercel&logoColor=white" alt="Try Deoit">
  </a>
  <a href="https://github.com/MajedQandeel0/deoit-code-editor/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License">
  </a>
  <a href="https://github.com/MajedQandeel0/deoit-code-editor">
    <img src="https://img.shields.io/github/stars/MajedQandeel0/deoit-code-editor?style=for-the-badge&logo=github" alt="GitHub Stars">
  </a>
  <a href="https://github.com/MajedQandeel0/deoit-code-editor/fork">
    <img src="https://img.shields.io/github/forks/MajedQandeel0/deoit-code-editor?style=for-the-badge&logo=github" alt="GitHub Forks">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Zero_Frameworks-e5c07b?style=flat" alt="Zero Frameworks">
  <img src="https://img.shields.io/badge/81+_Lessons-22c55e?style=flat" alt="81+ Lessons">
  <img src="https://img.shields.io/badge/7_Themes-61afef?style=flat" alt="7 Themes">
</p>

---

## What is Deoit?

Deoit is a **free, open-source browser-based code editor** for learning and building with HTML, CSS, and JavaScript. Think of it as CodePen meets free courses — but lighter, faster, and built with zero frameworks.

- **No installs. No sign-up. Just open and code.**
- **81+ interactive lessons** across 6 topics
- **MIT License** — use it, fork it, build on it

**[Try it live → deoit.js.org](https://deoit.js.org)**

---

## Demo

> **[Click here to try it live](https://deoit.js.org/pages/editor)** — loads in under 2 seconds.

---

## Why Deoit?

| Feature | Deoit | CodePen | JSFiddle | CodeSandbox |
|---------|:-----:|:-------:|:--------:|:-----------:|
| **100% Free** | ✅ | ✅ | ✅ | ❌ |
| **Open Source (MIT)** | ✅ | ❌ | ❌ | ❌ |
| **No sign-up needed** | ✅ | ❌ | ✅ | ❌ |
| **File Explorer** | ✅ | ❌ | ❌ | ✅ |
| **81+ Free Lessons** | ✅ | ❌ | ❌ | ❌ |
| **Console Panel** | ✅ | ❌ | ✅ | ✅ |
| **Zero Frameworks** | ✅ | ❌ | ❌ | ❌ |
| **Mobile Friendly** | ✅ | ❌ | ❌ | ❌ |
| **Offline Support** | ✅ | ❌ | ❌ | ❌ |
| **Export as ZIP** | ✅ | ✅ | ❌ | ✅ |

---

## Features

### Smart Code Editor
- Syntax highlighting for **25+ token types**
- **Smart autocomplete** with fuzzy matching (HTML tags, CSS properties, JS keywords)
- **Auto-closing tags** and bracket pairs
- **HTML5 boilerplate** shortcut (`!` + Tab)
- **7 themes** — Dark, Light, Dracula, Monokai, Nord, GitHub Dark, One Dark

### File Explorer
- Create, rename, delete files and folders
- **Drag-and-drop** reordering
- Multi-file project support
- Auto-save to browser + cloud

### Live Preview
- **One-click run** in a sandboxed popup
- Multiple HTML file support

### Console
- Captures `console.log`, `warn`, `error`, `info`
- Runtime error catching

### Cloud Sync
- **Google Sign-In** and **GitHub Sign-In**
- Auto-save projects to cloud

### 81+ Free Lessons
- **HTML** (20 lessons) — Tags, forms, semantic HTML
- **CSS** (17 lessons) — Flexbox, Grid, animations, responsive
- **JavaScript** (20 lessons) — DOM, async, ES6+
- **React** (12 lessons) — Components, hooks, state
- **Node.js** (6 lessons) — Modules, HTTP, npm
- **Developer Tools** (6 lessons) — Git, terminal, devtools

---

## Quick Start

### Use Online (Recommended)

**[Open Deoit → deoit.js.org](https://deoit.js.org/pages/editor)**

### Run Locally

```bash
git clone https://github.com/MajedQandeel0/deoit-code-editor.git
cd deoit-code-editor
npx serve .
```

Then open `http://localhost:3000` in your browser.

### Use the CLI

```bash
npx deoit-cli
```

---

## Embed Deoit in Your Site

Add a live code playground to any webpage:

```html
<iframe 
  src="https://deoit.js.org/embed" 
  width="100%" 
  height="500" 
  frameborder="0"
  style="border-radius:12px;border:1px solid #252525;"
></iframe>
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML, CSS, JavaScript |
| Auth | Supabase (Google + GitHub) |
| Hosting | Vercel |
| Analytics | Umami (privacy-respecting) |
| Storage | localStorage + Supabase Cloud |
| Build | None — zero build step |

**Why vanilla?** No React, no Vue, no build tools. Every edit is instantly deployable.

---

## For Educators

Deoit is perfect for teaching web development:

- **No student sign-ups** — just share the link
- **81 structured lessons** — ready to use as curriculum
- **"Try it Yourself"** — students jump from lesson to editor instantly
- **Works on any device** — Chromebooks, tablets, phones
- **Free forever** — no premium plans, no ads

---

## Contributing

We welcome contributions! See the [Contributing Guide](CONTRIBUTING.md) for setup instructions, code style rules, and how to submit a Pull Request.

**Quick start:**

```bash
# Fork → Clone → Branch → Code → PR
git checkout -b feature/your-feature-name
# ... make changes ...
git commit -m "feat: add your short description"
git push origin feature/your-feature-name
# Then open a Pull Request on GitHub
```

Look for issues tagged [`good first issue`](https://github.com/MajedQandeel0/deoit-code-editor/labels/good%20first%20issue) to get started.

---

## Roadmap

- [x] Browser Extension ("Edit in Deoit")
- [x] Embed Widget (iframe playground)
- [x] CLI tool (`npx deoit-cli`)
- [x] Open Source (MIT License)
- [x] Blog with tutorials
- [ ] VS Code Extension
- [ ] Collaborative editing (real-time)
- [ ] More lessons (TypeScript, Python, Git)
- [ ] Keyboard shortcuts cheat sheet

---

## Author

**Majed Qandeel** — [deoit.platform@gmail.com](mailto:deoit.platform@gmail.com) — [GitHub](https://github.com/MajedQandeel0)

---

## License

[MIT License](LICENSE) — free to use, modify, and distribute.

```
MIT License

Copyright (c) 2026 Majed Qandeel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
