(function () {
  'use strict';

  /* ══════════════════════════════════════════════
     DEUIT LEARN PLATFORM — Interactive Engine
     ══════════════════════════════════════════════ */

  // ─── CONFIG ───
  var PROGRESS_KEY = 'deoit_learn_progress';
  var BOOKMARKS_KEY = 'deoit_learn_bookmarks';

  // ─── UTILITY ───
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }

  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  function storage() {
    try { return localStorage; } catch (e) { return { getItem: function () { return null; }, setItem: function () { }, removeItem: function () { } }; }
  }

  function getProgress() {
    try { return JSON.parse(storage().getItem(PROGRESS_KEY)) || {}; } catch (e) { return {}; }
  }

  function saveProgress(data) {
    storage().setItem(PROGRESS_KEY, JSON.stringify(data));
  }

  function getBookmarks() {
    try { return JSON.parse(storage().getItem(BOOKMARKS_KEY)) || []; } catch (e) { return []; }
  }

  function saveBookmarks(data) {
    storage().setItem(BOOKMARKS_KEY, JSON.stringify(data));
  }

  function getPath() { return window.location.pathname.replace(/\/+$/, '') || '/'; }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function debounce(fn, wait) {
    var t;
    return function () { var ctx = this, args = arguments; clearTimeout(t); t = setTimeout(function () { fn.apply(ctx, args); }, wait); };
  }

  // ─── 1. INTERACTIVE CODE PLAYGROUND ───
  function initPlaygrounds() {
    var containers = $$('.code-playground');
    if (!containers.length) return;

    containers.forEach(function (el, idx) {
      var lang = el.getAttribute('data-lang') || 'html';
      var code = el.getAttribute('data-code') || el.textContent.trim();
      var title = el.getAttribute('data-title') || 'Example';

      // Clear original content
      el.textContent = '';
      el.classList.add('cp-initialized');

      // Create header
      var header = document.createElement('div');
      header.className = 'cp-header';

      var titleSpan = document.createElement('span');
      titleSpan.className = 'cp-title';
      titleSpan.textContent = title;

      var actions = document.createElement('div');
      actions.className = 'cp-actions';

      var runBtn = document.createElement('button');
      runBtn.className = 'cp-btn cp-run';
      runBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Run';
      runBtn.setAttribute('aria-label', 'Run code');

      var resetBtn = document.createElement('button');
      resetBtn.className = 'cp-btn cp-reset';
      resetBtn.textContent = 'Reset';
      resetBtn.setAttribute('aria-label', 'Reset code');

      actions.appendChild(runBtn);
      actions.appendChild(resetBtn);
      header.appendChild(titleSpan);
      header.appendChild(actions);

      // Create editor body
      var body = document.createElement('div');
      body.className = 'cp-body';

      var editorCol = document.createElement('div');
      editorCol.className = 'cp-editor';

      // Language tabs for multi-language playgrounds
      var langTabs = document.createElement('div');
      langTabs.className = 'cp-lang-tabs';

      var langs = (el.getAttribute('data-langs') || lang).split(',');
      var codes = {};
      langs.forEach(function (l) {
        codes[l.trim()] = el.getAttribute('data-code-' + l.trim()) || (l.trim() === lang ? code : '');
      });

      langs.forEach(function (l, i) {
        var tab = document.createElement('button');
        tab.className = 'cp-lang-tab' + (i === 0 ? ' active' : '');
        tab.textContent = l.trim().toUpperCase();
        tab.dataset.lang = l.trim();
        tab.addEventListener('click', function () {
          $$('.cp-lang-tab', el).forEach(function (t) { t.classList.remove('active'); });
          tab.classList.add('active');
          var ta = $('.cp-textarea', el);
          ta.value = codes[l.trim()] || '';
          ta.dataset.lang = l.trim();
          updatePreview();
        });
        langTabs.appendChild(tab);
      });

      var textarea = document.createElement('textarea');
      textarea.className = 'cp-textarea';
      textarea.value = codes[langs[0].trim()] || '';
      textarea.dataset.lang = langs[0].trim();
      textarea.spellcheck = false;
      textarea.setAttribute('aria-label', 'Code editor');

      editorCol.appendChild(langTabs);
      editorCol.appendChild(textarea);

      var previewCol = document.createElement('div');
      previewCol.className = 'cp-preview';

      var iframe = document.createElement('iframe');
      iframe.className = 'cp-iframe';
      iframe.setAttribute('sandbox', 'allow-scripts allow-modals');
      iframe.setAttribute('referrerpolicy', 'no-referrer');
      iframe.setAttribute('title', 'Live preview');
      previewCol.appendChild(iframe);

      body.appendChild(editorCol);
      body.appendChild(previewCol);

      el.appendChild(header);
      el.appendChild(body);

      // ── Run handler ──
      function updatePreview() {
        var ta = $('.cp-textarea', el);
        var currentLang = ta.dataset.lang;
        var fullCode = '';

        if (currentLang === 'html') {
          fullCode = ta.value;
        } else if (currentLang === 'css') {
          fullCode = '<!DOCTYPE html><html><head><style>' + ta.value + '</style></head><body><p contenteditable>Styled content</p></body></html>';
        } else if (currentLang === 'js') {
          fullCode = '<!DOCTYPE html><html><head></head><body><script>' + ta.value + '<\/script></body></html>';
        } else {
          fullCode = ta.value;
        }

        iframe.srcdoc = fullCode;
      }

      textarea.addEventListener('input', debounce(updatePreview, 400));

      runBtn.addEventListener('click', function (e) {
        e.preventDefault();
        updatePreview();
      });

      resetBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var firstLang = langs[0].trim();
        codes = {};
        langs.forEach(function (l) {
          codes[l.trim()] = el.getAttribute('data-code-' + l.trim()) || (l.trim() === lang ? code : '');
        });
        var ta = $('.cp-textarea', el);
        ta.value = codes[firstLang] || '';
        ta.dataset.lang = firstLang;
        $$('.cp-lang-tab', el).forEach(function (t, i) { t.classList.toggle('active', i === 0); });
        updatePreview();
      });

      // Initial render
      setTimeout(updatePreview, 100);

      // Make textarea resizable with Ctrl+Enter to run
      textarea.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'Enter') {
          e.preventDefault();
          updatePreview();
        }
      });

      // Store reference for later updates
      el._updatePreview = updatePreview;
    });
  }

  // ─── 2. TABLE OF CONTENTS ───
  function initTOC() {
    var toc = document.getElementById('lessonTOC');
    if (!toc) return;

    var content = $('.lesson-content');
    if (!content) { toc.style.display = 'none'; return; }

    var headings = $$('h2, h3', content);
    if (!headings.length) { toc.style.display = 'none'; return; }

    var list = document.createElement('ul');
    list.className = 'toc-list';

    headings.forEach(function (h, i) {
      if (!h.id) h.id = 'toc-' + i;
      var li = document.createElement('li');
      li.className = h.tagName === 'H3' ? 'toc-sub' : 'toc-main';
      var a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(h.id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, '', '#' + h.id);
        }
      });
      li.appendChild(a);
      list.appendChild(li);
    });

    toc.appendChild(list);

    // Track scroll position for active TOC item
    var tocLinks = $$('.toc-list a');
    function updateActive() {
      var scrollPos = window.scrollY + 120;
      var activeIdx = -1;
      headings.forEach(function (h, i) {
        if (h.offsetTop <= scrollPos) activeIdx = i;
      });
      tocLinks.forEach(function (a, i) {
        a.classList.toggle('active', i === activeIdx);
      });
    }

    window.addEventListener('scroll', debounce(updateActive, 100));
    updateActive();

    // Mobile toggle
    var toggle = document.getElementById('tocToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        toc.classList.toggle('open');
      });
    }
  }

  // ─── 3. QUIZ SYSTEM ───
  function initQuizzes() {
    $$('.lesson-quiz').forEach(function (quiz) {
      var questions = [];
      try { questions = JSON.parse(quiz.getAttribute('data-questions') || '[]'); } catch (e) { return; }
      if (!questions.length) { quiz.style.display = 'none'; return; }

      // Build quiz UI
      quiz.innerHTML = '<div class="quiz-header"><h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> Quick Quiz</h3><p class="quiz-desc">Test what you learned</p></div>';

      var form = document.createElement('form');
      form.className = 'quiz-form';
      form.addEventListener('submit', function (e) { e.preventDefault(); });

      questions.forEach(function (q, qi) {
        var qDiv = document.createElement('div');
        qDiv.className = 'quiz-question';
        qDiv.dataset.index = qi;

        var qLabel = document.createElement('p');
        qLabel.className = 'quiz-q';
        qLabel.textContent = (qi + 1) + '. ' + q.q;
        qDiv.appendChild(qLabel);

        if (q.type === 'mcq') {
          q.options.forEach(function (opt, oi) {
            var label = document.createElement('label');
            label.className = 'quiz-option';

            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'quiz-' + qi;
            radio.value = oi;
            radio.dataset.correct = opt.correct ? 'true' : 'false';

            var span = document.createElement('span');
            span.textContent = opt.text;

            var check = document.createElement('span');
            check.className = 'quiz-check';
            check.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';

            label.appendChild(radio);
            label.appendChild(span);
            label.appendChild(check);
            qDiv.appendChild(label);
          });
        } else if (q.type === 'truefalse') {
          ['True', 'False'].forEach(function (opt, oi) {
            var label = document.createElement('label');
            label.className = 'quiz-option';

            var radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'quiz-' + qi;
            radio.value = oi;
            radio.dataset.correct = (oi === q.answer) ? 'true' : 'false';

            var span = document.createElement('span');
            span.textContent = opt;

            var check = document.createElement('span');
            check.className = 'quiz-check';
            check.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';

            label.appendChild(radio);
            label.appendChild(span);
            label.appendChild(check);
            qDiv.appendChild(label);
          });
        }

        form.appendChild(qDiv);
      });

      var submitBtn = document.createElement('button');
      submitBtn.type = 'submit';
      submitBtn.className = 'quiz-submit';
      submitBtn.textContent = 'Check Answers';

      var resultDiv = document.createElement('div');
      resultDiv.className = 'quiz-result';

      submitBtn.addEventListener('click', function () {
        var total = questions.length;
        var correct = 0;
        var allAnswered = true;

        questions.forEach(function (q, qi) {
          var qDiv = $$('.quiz-question', quiz)[qi];
          var selected = $('input[name="quiz-' + qi + '"]:checked', qDiv);

          // Remove previous states
          $$('.quiz-option', qDiv).forEach(function (o) { o.classList.remove('correct', 'wrong'); });

          if (!selected) { allAnswered = false; return; }

          var isCorrect = selected.dataset.correct === 'true';
          selected.parentNode.classList.add(isCorrect ? 'correct' : 'wrong');
          if (isCorrect) correct++;

          // Highlight correct answer
          $$('input[name="quiz-' + qi + '"]', qDiv).forEach(function (inp) {
            if (inp.dataset.correct === 'true') inp.parentNode.classList.add('correct');
          });
        });

        if (!allAnswered) {
          resultDiv.className = 'quiz-result error';
          resultDiv.textContent = 'Please answer all questions first.';
          return;
        }

        var pct = Math.round((correct / total) * 100);
        resultDiv.className = 'quiz-result ' + (pct >= 70 ? 'success' : 'fail');
        resultDiv.innerHTML = '<span class="quiz-score">' + correct + '/' + total + '</span> ' + (pct >= 70 ? 'Great job! You passed.' : 'Keep studying and try again.');

        if (pct >= 70) {
          // Mark as passed
          var progress = getProgress();
          var path = getPath();
          if (!progress[path]) progress[path] = {};
          if (!progress[path].quiz) {
            progress[path].quiz = true;
            addXP(XP_PER_QUIZ);
            unlockAchievement('quiz_master');
          }
          saveProgress(progress);
          updateCompletionUI();
        }
      });

      quiz.appendChild(form);
      quiz.appendChild(submitBtn);
      quiz.appendChild(resultDiv);
    });
  }

  // ─── 4. PROGRESS TRACKING ───
  function initProgress() {
    var btn = document.getElementById('markComplete');
    if (!btn) return;

    var path = getPath();
    var progress = getProgress();

    function updateBtn() {
      var p = progress[path] || {};
      if (p.complete) {
        btn.className = 'complete-btn done';
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Completed';
      } else {
        btn.className = 'complete-btn';
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> Mark as Completed';
      }
    }

    btn.addEventListener('click', function () {
      var p = progress[path] || {};
      var wasComplete = p.complete;
      p.complete = !p.complete;
      p.completedAt = p.complete ? new Date().toISOString() : null;
      progress[path] = p;
      saveProgress(progress);
      // Award XP & update streak when marking complete
      if (p.complete && !wasComplete) {
        addXP(XP_PER_LESSON);
        updateStreak();
        checkLessonAchievements();
      }
      updateBtn();
      updateCompletionUI();
      updateCourseProgress();
    });

    updateBtn();
  }

  function updateCompletionUI() {
    var path = getPath();
    var progress = getProgress();
    var p = progress[path] || {};

    // Update sidebar links
    $$('.sidebar-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var linkPath = href.replace(/\/+$/, '');
      var lp = progress[linkPath] || {};
      link.classList.toggle('completed', !!lp.complete);
    });

    // Update course progress bar
    updateCourseProgress();
  }

  function updateCourseProgress() {
    var bar = document.getElementById('courseProgress');
    var label = document.getElementById('courseProgressLabel');
    if (!bar) return;

    var links = $$('.sidebar-link');
    if (!links.length) { bar.style.display = 'none'; return; }

    var progress = getProgress();
    var total = 0;
    var done = 0;

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      total++;
      var path = href.replace(/\/+$/, '');
      var p = progress[path] || {};
      if (p.complete) done++;
    });

    var pct = total ? Math.round((done / total) * 100) : 0;
    bar.style.display = 'block';
    bar.value = pct;
    bar.max = 100;
    if (label) label.textContent = done + '/' + total + ' (' + pct + '%)';
  }

  // ─── 5. READING TIME ───
  function initReadingTime() {
    var el = document.getElementById('readingTime');
    if (!el) return;

    var content = $('.lesson-content');
    if (!content) { el.style.display = 'none'; return; }

    var text = content.textContent || '';
    var wordCount = text.split(/\s+/).filter(Boolean).length;
    var minutes = Math.max(1, Math.round(wordCount / 200));
    el.textContent = minutes + ' min read';
  }

  // ─── 6. DIFFICULTY BADGE ───
  function initDifficulty() {
    var el = document.getElementById('difficultyBadge');
    if (!el) return;
    var level = el.getAttribute('data-level') || 'beginner';
    el.className = 'diff-badge diff-' + level;
    el.textContent = level.charAt(0).toUpperCase() + level.slice(1);
  }

  // ─── 7. COPY CODE BUTTON ───
  function initCopyButtons() {
    $$('pre').forEach(function (pre) {
      if (pre.closest('.code-playground') || pre.querySelector('.cp-copy-btn')) return;

      var wrapper = document.createElement('div');
      wrapper.className = 'code-block-wrap';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      var btn = document.createElement('button');
      btn.className = 'cp-copy-btn';
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy';
      btn.setAttribute('aria-label', 'Copy code');

      btn.addEventListener('click', function () {
        var code = pre.textContent || '';
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(code).then(function () {
            btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
            setTimeout(function () {
              btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy';
            }, 2000);
          });
        } else {
          // Fallback
          var ta = document.createElement('textarea');
          ta.value = code;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
          setTimeout(function () { btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy'; }, 2000);
        }
      });

      wrapper.appendChild(btn);
    });
  }
  // ─── 8. CODE CHALLENGES ───

  /**
   * Secure JS execution for code challenges.
   * Runs user code inside an opaque-origin, sandboxed srcdoc iframe with
   * `allow-scripts` ONLY (no allow-same-origin). The code therefore cannot
   * access the parent's cookies, localStorage/sessionStorage (incl. Supabase
   * tokens), DOM, or window. Console output and errors are relayed back via
   * postMessage; the parent verifies `event.source` before trusting payloads.
   * A 5s watchdog terminates the frame so infinite loops cannot hang the page.
   * NOTE: no eval()/new Function() anywhere — user code is injected as a plain
   * inline <script> inside the isolated frame (CSP keeps 'unsafe-eval' off).
   */
  function runJsSandboxed(code, output) {
    output.innerHTML = '<div class="ch-output-placeholder">Running&hellip;</div>';

    var runner = document.createElement('iframe');
    runner.setAttribute('sandbox', 'allow-scripts');
    runner.setAttribute('referrerpolicy', 'no-referrer');
    runner.setAttribute('title', 'Sandboxed JavaScript runner');
    runner.style.display = 'none';
    output.appendChild(runner);

    var settled = false;
    var origin = window.location.origin;

    function cleanup() {
      clearTimeout(timer);
      window.removeEventListener('message', onMsg);
      if (runner && runner.parentNode) runner.parentNode.removeChild(runner);
    }
    function show(logs) {
      output.innerHTML = '';
      if (logs && logs.length) {
        logs.forEach(function (l) {
          var line = document.createElement('div');
          line.className = 'ch-output-line';
          line.textContent = l;
          output.appendChild(line);
        });
      } else {
        output.innerHTML = '<div class="ch-output-placeholder">Code ran successfully (no output)</div>';
      }
    }
    function onMsg(ev) {
      if (settled) return;
      if (ev.source !== runner.contentWindow) return;
      if (!ev.data || ev.data.type !== 'deoit_ch') return;
      settled = true;
      cleanup();
      if (ev.data.err) {
        output.innerHTML = '<div class="ch-output-line ch-error">Error: ' + escapeHtml(ev.data.err) + '</div>';
        return;
      }
      show(ev.data.logs || []);
    }
    function onTimeout() {
      if (settled) return;
      settled = true;
      cleanup();
      output.innerHTML = '<div class="ch-output-line ch-error">Error: Script timed out after 5 seconds.</div>';
    }

    var timer = setTimeout(onTimeout, 5000);
    window.addEventListener('message', onMsg);

    var safeCode = code.replace(/<\/script/gi, '<\\/script');
    var bridge =
      '<script>' +
        'window.__logs=[];' +
        '["log","warn","error","info"].forEach(function(k){var o=console[k]||function(){};' +
        'console[k]=function(){var a=[].slice.call(arguments);' +
        'window.__logs.push(a.map(function(x){try{return typeof x==="object"?JSON.stringify(x):String(x)}catch(e){return String(x)}}).join(" "));' +
        'o.apply(console,arguments);}});' +
        'window.onerror=function(m){window.__err=String(m)};' +
      '<\/script>' +
      '<script>' + safeCode + '<\/script>' +
      '<script>parent.postMessage({type:"deoit_ch",logs:window.__logs,err:window.__err||null},"' + origin + '")<\/script>';

    runner.srcdoc = '<!DOCTYPE html><html><head><meta charset="UTF-8">' + bridge + '</head><body></body></html>';
  }

  function initChallenges() {
    $$('.code-challenge').forEach(function (ch) {
      var instructions = ch.getAttribute('data-instructions') || 'Write your code below:';
      var starterCode = ch.getAttribute('data-starter') || '';
      var expectedOutput = ch.getAttribute('data-expected') || '';
      var lang = ch.getAttribute('data-lang') || 'html';

      ch.innerHTML = '';
      ch.classList.add('ch-initialized');

      var header = document.createElement('div');
      header.className = 'ch-header';
      header.innerHTML = '<h4><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> Code Challenge</h4>';

      var instr = document.createElement('p');
      instr.className = 'ch-instructions';
      instr.textContent = instructions;

      var textarea = document.createElement('textarea');
      textarea.className = 'ch-textarea';
      textarea.value = starterCode;
      textarea.spellcheck = false;
      textarea.setAttribute('aria-label', 'Challenge code editor');

      var actions = document.createElement('div');
      actions.className = 'ch-actions';

      var runBtn = document.createElement('button');
      runBtn.className = 'ch-btn ch-run';
      runBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg> Run';

      var checkBtn = document.createElement('button');
      checkBtn.className = 'ch-btn ch-check';
      checkBtn.textContent = 'Check Solution';

      var resetBtn = document.createElement('button');
      resetBtn.className = 'ch-btn ch-reset';
      resetBtn.textContent = 'Reset';

      actions.appendChild(runBtn);
      actions.appendChild(checkBtn);
      actions.appendChild(resetBtn);

      var output = document.createElement('div');
      output.className = 'ch-output';
      output.innerHTML = '<div class="ch-output-placeholder">Click Run to see output</div>';

      ch.appendChild(header);
      ch.appendChild(instr);
      ch.appendChild(textarea);
      ch.appendChild(actions);
      ch.appendChild(output);

      // ── Run logic ──
      function runChallenge() {
        var code = textarea.value;
        var resultEl = document.createElement('div');
        resultEl.className = 'ch-result';

        if (lang === 'js') {
          runJsSandboxed(code, output);
        } else {
          // HTML mode
          var srcdoc = code;
          output.innerHTML = '<iframe class="ch-preview" sandbox="allow-scripts" referrerpolicy="no-referrer" srcdoc="' + escapeHtml(srcdoc) + '"></iframe>';
        }
      }

      function checkSolution() {
        var code = textarea.value;
        if (!expectedOutput) {
          output.innerHTML = '<div class="ch-result-info">No expected output configured for automatic checking. Click Run to test manually.</div>';
          return;
        }

        // Simple string matching
        var cleanedCode = code.replace(/\s+/g, ' ').trim();
        var cleanedExpected = expectedOutput.replace(/\s+/g, ' ').trim();

        if (cleanedCode.indexOf(cleanedExpected) !== -1 || cleanedCode === cleanedExpected) {
          output.innerHTML = '<div class="ch-result ch-pass"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Correct! Great solution.</div>';
          // Mark challenge as complete
          var progress = getProgress();
          var path = getPath();
          if (!progress[path]) progress[path] = {};
          if (!progress[path].challenge) {
            progress[path].challenge = true;
            addXP(XP_PER_CHALLENGE);
            unlockAchievement('challenge_solver');
          }
          saveProgress(progress);
        } else {
          output.innerHTML = '<div class="ch-result ch-fail"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Not quite. Check your code and try again.</div>';
        }
      }

      runBtn.addEventListener('click', function (e) { e.preventDefault(); runChallenge(); });
      checkBtn.addEventListener('click', function (e) { e.preventDefault(); checkSolution(); });
      resetBtn.addEventListener('click', function (e) {
        e.preventDefault();
        textarea.value = starterCode;
        output.innerHTML = '<div class="ch-output-placeholder">Code reset. Try again!</div>';
      });

      textarea.addEventListener('keydown', function (e) {
        if (e.ctrlKey && e.key === 'Enter') { e.preventDefault(); runChallenge(); }
      });
    });
  }

  // ─── 9. KEY TAKEAWAYS ───
  function initTakeaways() {
    $$('.lesson-takeaways').forEach(function (el) {
      var items = [];
      try { items = JSON.parse(el.getAttribute('data-items') || '[]'); } catch (e) { return; }
      if (!items.length) return;

      el.innerHTML = '<div class="takeaways-header"><h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Key Takeaways</h3></div>';

      var list = document.createElement('ul');
      list.className = 'takeaways-list';
      items.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
      });
      el.appendChild(list);
    });
  }

  // ─── 10. BOOKMARKS ───
  function initBookmarks() {
    var btn = document.getElementById('bookmarkBtn');
    if (!btn) return;

    var path = getPath();
    var bookmarks = getBookmarks();

    function updateBookmarkUI() {
      var isBookmarked = bookmarks.indexOf(path) !== -1;
      btn.classList.toggle('bookmarked', isBookmarked);
      btn.setAttribute('aria-label', isBookmarked ? 'Remove bookmark' : 'Bookmark this lesson');
      btn.innerHTML = isBookmarked ?
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>' :
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>';
    }

    btn.addEventListener('click', function () {
      var idx = bookmarks.indexOf(path);
      if (idx === -1) {
        bookmarks.push(path);
      } else {
        bookmarks.splice(idx, 1);
      }
      saveBookmarks(bookmarks);
      updateBookmarkUI();
    });

    updateBookmarkUI();
  }

  // ─── 11. COURSE PROGRESS BAR ───
  function initCourseBar() {
    var bar = document.getElementById('courseProgress');
    var label = document.getElementById('courseProgressLabel');
    if (!bar) return;

    var sidebarLinks = $$('.sidebar-link');
    if (!sidebarLinks.length) { bar.style.display = 'none'; return; }

    updateCourseProgress();

    // Update when lesson marked complete
    window.addEventListener('storage', function (e) {
      if (e.key === PROGRESS_KEY) updateCourseProgress();
    });
  }

  // ─── 12. CERTIFICATE ───
  function initCertificate() {
    var btn = document.getElementById('certificateBtn');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var courseName = btn.getAttribute('data-course') || 'HTML';
      var totalLessons = parseInt(btn.getAttribute('data-total') || '0', 10);
      var links = $$('.sidebar-link');
      var progress = getProgress();
      var done = 0;

      if (links.length) {
        links.forEach(function (link) {
          var href = link.getAttribute('href');
          if (!href) return;
          var p = progress[href.replace(/\/+$/, '')] || {};
          if (p.complete) done++;
        });
      }

      if (done < totalLessons) {
        showCertificateModal(null, courseName, done, totalLessons);
        return;
      }

      var userName = document.getElementById('dropdownName') ? ($('#dropdownName') ? $('#dropdownName').textContent : 'Student') : 'Student';
      showCertificateModal(userName, courseName, done, totalLessons);
    });
  }

  function showCertificateModal(name, course, done, total) {
    var overlay = document.createElement('div');
    overlay.className = 'cert-overlay';

    var modal = document.createElement('div');
    modal.className = 'cert-modal';

    if (!name) {
      modal.innerHTML = '<div class="cert-incomplete"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e5c07b" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><h3>Course Not Complete</h3><p>Complete all ' + total + ' lessons to unlock your certificate.</p><p class="cert-progress-text">' + done + '/' + total + ' completed</p><progress class="cert-progress-bar" value="' + done + '" max="' + total + '"></progress><button class="cert-close-btn">Close</button></div>';
    } else {
      modal.innerHTML = '<div class="certificate"><div class="cert-badge">&#9733;</div><h2 class="cert-title">Certificate of Completion</h2><p class="cert-subtitle">This certifies that</p><h1 class="cert-name">' + escapeHtml(name) + '</h1><p class="cert-course">has successfully completed the</p><h3 class="cert-course-name">' + escapeHtml(course) + ' Course</h3><p class="cert-detail">' + done + ' lessons completed</p><p class="cert-date">' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) + '</p><div class="cert-footer"><span>Deoit</span><span>deoit.js.org</span></div></div><div class="cert-actions"><button class="cert-print-btn">Print / Save as PDF</button><button class="cert-close-btn">Close</button></div>';
    }

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Show with animation
    requestAnimationFrame(function () {
      overlay.classList.add('visible');
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target.classList.contains('cert-close-btn')) {
        overlay.classList.remove('visible');
        setTimeout(function () { overlay.remove(); }, 300);
      }
    });

    var printBtn = modal.querySelector('.cert-print-btn');
    if (printBtn) {
      printBtn.addEventListener('click', function () {
        var certHtml = modal.querySelector('.certificate').outerHTML;
        var win = window.open('', '_blank');
        if (win) {
          win.document.write('<!DOCTYPE html><html><head><title>Certificate - Deoit</title><style>body{margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#fff;font-family:"Georgia",serif}@media print{body{padding:0}}.certificate{max-width:700px;width:100%;padding:60px 50px;text-align:center;border:3px solid #1a1a2e;background:#fff}.cert-badge{font-size:48px;color:#e5c07b;margin-bottom:10px}.cert-title{font-size:14px;text-transform:uppercase;letter-spacing:3px;color:#888;margin:0 0 20px}.cert-subtitle{font-size:16px;color:#666;margin:0 0 8px}.cert-name{font-size:36px;color:#1a1a2e;margin:0 0 8px;font-weight:700}.cert-course{font-size:16px;color:#666;margin:0 0 4px}.cert-course-name{font-size:22px;color:#4361ee;margin:0 0 20px}.cert-detail{font-size:13px;color:#999;margin:0 0 6px}.cert-date{font-size:14px;color:#666;margin:0 0 30px}.cert-footer{display:flex;justify-content:space-between;border-top:1px solid #ddd;padding-top:16px;font-size:13px;color:#999;margin-top:10px}</style></head><body>' + certHtml + '</body></html>');
          win.document.close();
          setTimeout(function () { win.print(); }, 500);
        }
      });
    }
  }

  // ─── 13. SEARCH ───
  function initSearch() {
    var input = document.getElementById('lessonSearch');
    if (!input) return;

    var list = document.getElementById('searchResults');
    if (!list) return;

    // Build search index from sidebar links
    var links = $$('.sidebar-link');
    var index = [];

    links.forEach(function (link) {
      var titleEl = link.querySelector('.sidebar-title');
      var numEl = link.querySelector('.sidebar-num');
      if (!titleEl) return;
      index.push({
        title: titleEl.textContent,
        num: numEl ? numEl.textContent : '',
        href: link.getAttribute('href') || ''
      });
    });

    // Also index main content headings
    var contentHeadings = $$('.lesson-content h2, .lesson-content h3');
    var currentSection = '';

    // Add heading-based index entries
    if (index.length === 0) {
      // No sidebar - try content headings
      contentHeadings.forEach(function (h) {
        index.push({
          title: h.textContent,
          num: '',
          href: '#' + (h.id || '')
        });
      });
    }

    function performSearch(query) {
      if (!query || query.length < 2) {
        list.innerHTML = '';
        list.style.display = 'none';
        return;
      }

      var q = query.toLowerCase();
      var results = index.filter(function (item) {
        return item.title.toLowerCase().indexOf(q) !== -1;
      });

      if (results.length === 0) {
        list.innerHTML = '<div class="search-no-results">No results found</div>';
        list.style.display = 'block';
        return;
      }

      list.innerHTML = '';
      results.forEach(function (r) {
        var a = document.createElement('a');
        a.className = 'search-result-item';
        a.href = r.href;
        if (r.num) {
          var numBadge = document.createElement('span');
          numBadge.className = 'search-result-num';
          numBadge.textContent = r.num;
          a.appendChild(numBadge);
        }
        var title = document.createElement('span');
        title.className = 'search-result-title';
        title.textContent = r.title;
        a.appendChild(title);
        list.appendChild(a);
      });
      list.style.display = 'block';
    }

    input.addEventListener('input', debounce(function () {
      performSearch(input.value);
    }, 200));

    // Close search on escape
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        input.value = '';
        list.style.display = 'none';
        input.blur();
      }
    });

    // Close on click outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.lesson-search-wrap')) {
        list.style.display = 'none';
      }
    });
  }

  // ─── 14. COURSE OVERVIEW PAGE ───
  function initCourseOverview() {
    var page = window.LEARN_PAGE;
    if (!page) return;

    var courses = {
      html: {
        name: 'HTML',
        color: '#E44D26',
        icon: '<path fill="#E44D26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>',
        lessons: [
          { num: 1, title: 'Introduction to HTML', href: 'learn/html/introduction-to-html' },
          { num: 2, title: 'Headings & Paragraphs', href: 'learn/html/headings-paragraphs' },
          { num: 3, title: 'Links & Images', href: 'learn/html/links-images' },
          { num: 4, title: 'Lists & Tables', href: 'learn/html/lists-tables' },
          { num: 5, title: 'Forms & Inputs', href: 'learn/html/forms-inputs' },
          { num: 6, title: 'Semantic HTML', href: 'learn/html/semantic-html' },
          { num: 7, title: 'HTML Best Practices', href: 'learn/html/html-best-practices' },
          { num: 8, title: 'Doctype & Character Encoding', href: 'learn/html/doctype-character-encoding' },
          { num: 9, title: 'HTML Attributes Deep Dive', href: 'learn/html/html-attributes-deep-dive' },
          { num: 10, title: 'Div, Span & Grouping', href: 'learn/html/div-span-grouping-elements' },
          { num: 11, title: 'Block vs Inline Elements', href: 'learn/html/block-vs-inline-elements' },
          { num: 12, title: 'HTML Comments', href: 'learn/html/html-comments' },
          { num: 13, title: 'HTML Entities & Symbols', href: 'learn/html/html-entities-symbols' },
          { num: 14, title: 'HTML Head & Meta Tags', href: 'learn/html/html-head-meta-tags' },
          { num: 15, title: 'HTML Tables Advanced', href: 'learn/html/html-tables-advanced' },
          { num: 16, title: 'HTML Forms & Validation', href: 'learn/html/html-forms-validation' },
          { num: 17, title: 'HTML Media Elements', href: 'learn/html/html-media-elements' },
          { num: 18, title: 'HTML Audio & Video', href: 'learn/html/html-audio-video' },
          { num: 19, title: 'HTML Iframes', href: 'learn/html/html-iframes' },
          { num: 20, title: 'HTML Data Attributes', href: 'learn/html/html-data-attributes' },
          { num: 21, title: 'HTML SEO & Meta Tags', href: 'learn/html/html-seo-meta-tags' },
          { num: 22, title: 'HTML Accessibility (a11y)', href: 'learn/html/html-accessibility-a11y' },
          { num: 23, title: 'HTML Canvas Basics', href: 'learn/html/html-canvas-basics' },
          { num: 24, title: 'HTML SVG Basics', href: 'learn/html/html-svg-basics' },
          { num: 25, title: 'HTML Email Templates', href: 'learn/html/html-email-templates' }
        ]
      },
      css: {
        name: 'CSS',
        color: '#2965F1',
        icon: '<path fill="#2965F1" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>',
        lessons: [
          { num: 1, title: 'Introduction to CSS', href: 'learn/css/introduction-to-css' },
          { num: 2, title: 'Selectors & Colors', href: 'learn/css/selectors-colors' },
          { num: 3, title: 'Box Model & Spacing', href: 'learn/css/box-model-spacing' },
          { num: 4, title: 'Typography & Fonts', href: 'learn/css/typography-fonts' },
          { num: 5, title: 'Backgrounds & Gradients', href: 'learn/css/backgrounds-gradients' },
          { num: 6, title: 'Display Property', href: 'learn/css/display-property' },
          { num: 7, title: 'CSS Positioning', href: 'learn/css/css-position' },
          { num: 8, title: 'Flexbox', href: 'learn/css/flexbox' },
          { num: 9, title: 'CSS Grid', href: 'learn/css/css-grid' },
          { num: 10, title: 'CSS Units', href: 'learn/css/css-units' },
          { num: 11, title: 'CSS Variables', href: 'learn/css/css-variables' },
          { num: 12, title: 'Media Queries', href: 'learn/css/media-queries' },
          { num: 13, title: 'Animations & Transitions', href: 'learn/css/animations-transitions' },
          { num: 14, title: 'Shadows & Effects', href: 'learn/css/shadows-effects' },
          { num: 15, title: 'Pseudo Classes & Elements', href: 'learn/css/pseudo-classes-pseudo-elements' }
        ]
      },
      js: {
        name: 'JavaScript',
        color: '#F7DF1E',
        icon: '<path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-.93-2.53-.93-.165 0-.33 0-.495.016-.45.03-.9.15-1.32.375-.735.42-1.2 1.065-1.26 2.115-.06 1.56.975 2.505 2.4 3.135.855.375 1.8.6 2.055 1.2.36.75.09 1.575-1.05 1.815-.825.18-1.68-.045-2.025-.54-.39-.6-.6-.855-.885-1.41l-1.815.06c.345 1.305.9 2.055 2.22 2.67 3.375 1.545 6.21-.15 6.495-2.385.06-.27.09-.51.09-.795.015-1.245-.39-1.89-1.575-2.595z"/>',
        lessons: [
          { num: 1, title: 'Introduction to JavaScript', href: 'learn/js/introduction-to-javascript' },
          { num: 2, title: 'Variables & Data Types', href: 'learn/js/variables-data-types' },
          { num: 3, title: 'Number & Math Methods', href: 'learn/js/number-math-methods' },
          { num: 4, title: 'String Methods', href: 'learn/js/string-methods' },
          { num: 5, title: 'Functions', href: 'learn/js/functions' },
          { num: 6, title: 'Arrays & Loops', href: 'learn/js/arrays-loops' },
          { num: 7, title: 'Date & Time', href: 'learn/js/date-time' },
          { num: 8, title: 'Error Handling & Debugging', href: 'learn/js/error-handling-debugging' },
          { num: 9, title: 'ES6+ Features', href: 'learn/js/es6-features' },
          { num: 10, title: 'DOM Manipulation', href: 'learn/js/dom-manipulation' },
          { num: 11, title: 'Events & Interactivity', href: 'learn/js/events-interactivity' },
          { num: 12, title: 'JSON & Fetch API', href: 'learn/js/json-fetch-api' }
        ]
      }
    };

    var course = courses[page];
    if (!course) return;

    // Populate sidebar
    var list = document.getElementById('lSideList');
    if (list) {
      var progress = getProgress();
      course.lessons.forEach(function (lesson) {
        var a = document.createElement('a');
        a.className = 'l-side-item';
        a.href = lesson.href;

        var num = document.createElement('span');
        num.className = 'num';
        num.style.background = course.color;
        num.textContent = lesson.num;
        a.appendChild(num);

        var title = document.createElement('span');
        title.className = 't';
        title.textContent = lesson.title;
        a.appendChild(title);

        var p = progress[lesson.href.replace(/\/+$/, '')] || {};
        if (p.complete) a.classList.add('completed');

        list.appendChild(a);
      });
    }

    // Populate main content
    var main = document.getElementById('lMainInner');
    if (main) {
      main.innerHTML = '<div class="l-content-header"><h2>' + course.name + ' Course</h2><p>Master ' + course.name + ' from scratch with ' + course.lessons.length + ' free interactive lessons. Practice code directly in the browser.</p></div><div class="l-body"></div>';

      var body = main.querySelector('.l-body');
      body.innerHTML = '<div class="l-ex"><div class="l-ex-top"><div class="l-ex-dots"><span></span><span></span><span></span></div><span class="l-ex-title">example.' + (page === 'js' ? 'js' : page) + '</span></div><div class="l-ex-body"><pre><code>// Welcome to ' + course.name + '!\n' + course.lessons.slice(0, 3).map(function(l) { return '// Lesson ' + l.num + ': ' + l.title; }).join('\n') + '\n// Click any lesson to begin</code></pre></div></div>';

      // Course content overview
      body.innerHTML += '<h3>What you will learn</h3><ul>' + course.lessons.map(function (l) { return '<li><strong>Lesson ' + l.num + ':</strong> ' + l.title + '</li>'; }).join('') + '</ul>';

      // Course progress
      var progress = getProgress();
      var done = 0;
      course.lessons.forEach(function (l) {
        var p = progress[l.href.replace(/\/+$/, '')] || {};
        if (p.complete) done++;
      });
      var pct = Math.round((done / course.lessons.length) * 100);

      body.innerHTML += '<div class="course-progress-bar" style="margin-top:32px"><progress value="' + done + '" max="' + course.lessons.length + '"></progress><span class="course-progress-label">' + done + '/' + course.lessons.length + ' lessons completed (' + pct + '%)</span></div>';

      // Certificate area
      body.innerHTML += '<div class="course-cert-area"><h3>Get Your Certificate</h3><p>Complete all ' + course.lessons.length + ' lessons to earn your ' + course.name + ' certificate.</p><button class="cert-btn" id="certificateBtn" data-course="' + course.name + '" data-total="' + course.lessons.length + '"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> View Certificate</button></div>';

      // Update sidebar link active states
      var currentPath = getPath();
      $$('.l-side-item').forEach(function (item) {
        if (item.getAttribute('href') === currentPath) item.classList.add('on');
      });
    }
  }

  // ─── 15. AUTO-ENHANCE LESSON PAGES ───
  function autoEnhance() {
    // Add meta bar to lesson headers that don't have one
    var header = $('.lesson-header');
    if (header && !$('.lesson-meta-bar', header)) {
      var metaBar = document.createElement('div');
      metaBar.className = 'lesson-meta-bar';

      // Try to determine difficulty from the lesson tag color
      var tag = $('.lesson-tag', header);
      var diff = 'beginner';
      if (tag) {
        var bg = tag.style.background || '';
        if (bg.indexOf('F7DF1E') !== -1 || bg.indexOf('#e5c07b') !== -1) diff = 'intermediate';
        if (bg.indexOf('c678dd') !== -1 || bg.indexOf('#e06c75') !== -1) diff = 'advanced';
      }

      metaBar.innerHTML = '<span class="diff-badge diff-' + diff + '" id="difficultyBadge" data-level="' + diff + '">' + diff.charAt(0).toUpperCase() + diff.slice(1) + '</span><span class="reading-time"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> <span id="readingTime">—</span></span><button id="bookmarkBtn" aria-label="Bookmark this lesson"></button>';

      // Insert after lesson-meta
      var meta = $('.lesson-meta', header);
      if (meta) {
        meta.parentNode.insertBefore(metaBar, meta.nextSibling);
      } else {
        header.appendChild(metaBar);
      }
    }

    // Add course progress bar
    var content = $('.lesson-content');
    if (content && !$('#courseProgress')) {
      var courseLinks = $$('.sidebar-link');
      if (courseLinks.length) {
        var progBar = document.createElement('div');
        progBar.className = 'course-progress-bar';
        progBar.innerHTML = '<progress id="courseProgress" value="0" max="100"></progress><span class="course-progress-label" id="courseProgressLabel">0/' + courseLinks.length + ' lessons</span>';
        content.parentNode.insertBefore(progBar, content);
      }
    }

    // Add TOC at the top of lesson content
    if (content && !$('.toc-wrap', content)) {
      var headings = $$('h2, h3', content);
      if (headings.length >= 3) {
        var tocWrap = document.createElement('div');
        tocWrap.className = 'toc-wrap';
        tocWrap.innerHTML = '<h3><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> On this page</h3><button id="tocToggle">☰ Table of Contents</button><div id="lessonTOC"></div></div>';
        content.insertBefore(tocWrap, content.firstChild);
      }
    }

    // Add mark complete button after lesson content
    if (content && !$('#markComplete')) {
      var progDiv = document.createElement('div');
      progDiv.className = 'lesson-progress';
      progDiv.style.cssText = 'border-top:1px solid var(--border);padding-top:28px;margin-top:0';
      progDiv.innerHTML = '<button id="markComplete" class="complete-btn"></button>';
      content.parentNode.insertBefore(progDiv, content.nextSibling);
    }

    // Add search to sidebar if not present
    var sidebarList = $('.sidebar-nav, .l-sidebar-list');
    if (sidebarList && !$('.lesson-search-wrap')) {
      var searchWrap = document.createElement('div');
      searchWrap.className = 'lesson-search-wrap';
      searchWrap.style.cssText = 'padding:10px 12px;border-bottom:1px solid var(--border)';
      searchWrap.innerHTML = '<svg class="lesson-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input type="text" class="lesson-search" id="lessonSearch" placeholder="Search lessons..."><div class="search-results" id="searchResults"></div>';
      sidebarList.parentNode.insertBefore(searchWrap, sidebarList);
    }
  }

  // ─── 17. GAMIFICATION (XP / LEVEL / STREAK / ACHIEVEMENTS) ───
  var XP_KEY = 'deoit_learn_xp';
  var STREAK_KEY = 'deoit_learn_streak';
  var ACHIEVE_KEY = 'deoit_learn_achievements';

  var XP_PER_LESSON = 15;
  var XP_PER_QUIZ = 10;
  var XP_PER_CHALLENGE = 20;
  var XP_PER_LEVEL = 100;

  var ACHIEVEMENT_DEFS = {
    first_lesson:    { name:'First Steps',       desc:'Complete your first lesson',        icon:'\u{1F331}' },
    quick_learner:   { name:'Quick Learner',      desc:'Complete 5 lessons',               icon:'\u{1F525}' },
    dedicated:       { name:'Dedicated',          desc:'Complete 10 lessons',              icon:'\u{1F4AA}' },
    half_way:        { name:'Half Way',           desc:'Complete 15 lessons',              icon:'\u{1F3C3}' },
    almost_there:    { name:'Almost There',       desc:'Complete 20 lessons',              icon:'\u{26A1}' },
    completionist:   { name:'Completionist',      desc:'Complete all 25 HTML lessons',     icon:'\u{1F3C6}' },
    quiz_master:     { name:'Quiz Master',        desc:'Pass your first quiz',             icon:'\u{1F9E0}' },
    challenge_solver:{ name:'Challenge Solver',   desc:'Solve your first code challenge',  icon:'\u{1F4BB}' },
    streak_3:        { name:'On Fire',            desc:'3-day learning streak',            icon:'\u{1F525}' },
    streak_7:        { name:'Week Warrior',       desc:'7-day learning streak',            icon:'\u{1F4C5}' },
    streak_30:       { name:'Monthly Master',     desc:'30-day learning streak',           icon:'\u{2B50}' }
  };

  function getXPData() {
    try { return JSON.parse(storage().getItem(XP_KEY)) || { xp:0, level:1 }; } catch(e) { return { xp:0, level:1 }; }
  }

  function saveXPData(d) { storage().setItem(XP_KEY, JSON.stringify(d)); }

  function getLevel(xp) { return Math.floor(xp / XP_PER_LEVEL) + 1; }

  function addXP(amount) {
    var d = getXPData();
    var oldLevel = getLevel(d.xp);
    d.xp += amount;
    var newLevel = getLevel(d.xp);
    if (newLevel > oldLevel) showLevelUp(newLevel);
    saveXPData(d);
    updateGamificationUI();
  }

  function getStreakData() {
    try { return JSON.parse(storage().getItem(STREAK_KEY)) || { count:0, lastDate:null }; } catch(e) { return { count:0, lastDate:null }; }
  }

  function saveStreakData(d) { storage().setItem(STREAK_KEY, JSON.stringify(d)); }

  function updateStreak() {
    var s = getStreakData();
    var today = new Date().toDateString();
    if (s.lastDate === today) return s.count;
    var yesterday = new Date(Date.now() - 86400000).toDateString();
    s.count = (s.lastDate === yesterday) ? s.count + 1 : 1;
    s.lastDate = today;
    saveStreakData(s);

    // Check streak achievements
    checkStreakAchievements(s.count);
    updateGamificationUI();
    return s.count;
  }

  function getAchievements() {
    try { return JSON.parse(storage().getItem(ACHIEVE_KEY)) || []; } catch(e) { return []; }
  }

  function unlockAchievement(id) {
    var list = getAchievements();
    if (list.indexOf(id) !== -1) return false;
    list.push(id);
    storage().setItem(ACHIEVE_KEY, JSON.stringify(list));
    var def = ACHIEVEMENT_DEFS[id];
    if (def) showAchievementToast(def);
    updateGamificationUI();
    return true;
  }

  function checkLessonAchievements() {
    var total = $$('.sidebar-link').length;
    var done = 0;
    var progress = getProgress();
    $$('.sidebar-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      var p = progress[href.replace(/\/+$/, '')] || {};
      if (p.complete) done++;
    });
    if (done >= 1) unlockAchievement('first_lesson');
    if (done >= 5) unlockAchievement('quick_learner');
    if (done >= 10) unlockAchievement('dedicated');
    if (done >= 15) unlockAchievement('half_way');
    if (done >= 20) unlockAchievement('almost_there');
    if (done >= 25) unlockAchievement('completionist');
  }

  function checkStreakAchievements(count) {
    if (count >= 3) unlockAchievement('streak_3');
    if (count >= 7) unlockAchievement('streak_7');
    if (count >= 30) unlockAchievement('streak_30');
  }

  function showLevelUp(level) {
    var existing = document.querySelector('.level-up-overlay');
    if (existing) existing.remove();

    var overlay = document.createElement('div');
    overlay.className = 'level-up-overlay';

    var card = document.createElement('div');
    card.className = 'level-up-card';
    card.innerHTML = '<div class="level-up-icon">\u{1F389}</div><div class="level-up-title">Level Up!</div><div class="level-up-level">Level ' + level + '</div><div class="level-up-sub">You\'re on fire! Keep learning.</div><button class="level-up-btn">Continue</button>';

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    requestAnimationFrame(function () { overlay.classList.add('visible'); });

    card.querySelector('.level-up-btn').addEventListener('click', function () {
      overlay.classList.remove('visible');
      setTimeout(function () { overlay.remove(); }, 400);
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.classList.remove('visible');
        setTimeout(function () { overlay.remove(); }, 400);
      }
    });
  }

  function showAchievementToast(def) {
    var existing = document.querySelector('.achieve-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.className = 'achieve-toast';
    toast.innerHTML = '<div class="achieve-icon">' + def.icon + '</div><div class="achieve-body"><div class="achieve-label">Achievement Unlocked!</div><div class="achieve-name">' + def.name + '</div><div class="achieve-desc">' + def.desc + '</div></div>';

    document.body.appendChild(toast);

    requestAnimationFrame(function () { toast.classList.add('visible'); });

    setTimeout(function () {
      toast.classList.remove('visible');
      setTimeout(function () { toast.remove(); }, 400);
    }, 4000);
  }

  function getTotalCompleted() {
    var progress = getProgress();
    var count = 0;
    for (var key in progress) {
      if (progress[key] && progress[key].complete) count++;
    }
    return count;
  }

  function getLevelXP(xp) {
    return xp % XP_PER_LEVEL;
  }

  function initGamification() {
    var sidebarHeader = document.querySelector('.sidebar-header');
    if (!sidebarHeader) return;
    var data = getXPData();
    var xp = data.xp;
    var level = getLevel(xp);
    sidebarHeader.innerHTML =
      '<div style="display:flex;align-items:center;gap:10px">' +
        '<div class="gamification-level-badge" style="width:36px;height:36px">' +
          '<span class="gamification-level-num">' + level + '</span>' +
        '</div>' +
        '<div style="flex:1;min-width:0">' +
          '<div data-level-label style="font-size:16px;font-weight:800;letter-spacing:-.3px;color:var(--text-primary)">Level ' + level + '</div>' +
          '<div class="gamification-xp-row" style="margin-top:4px">' +
            '<div class="gamification-xp-bar-wrap" style="flex:1;height:3px"><div class="gamification-xp-bar" style="width:' + (getLevelXP(xp) / XP_PER_LEVEL * 100) + '%"></div></div>' +
            '<span class="gamification-xp-text" style="font-size:9px">' + xp + ' XP</span>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function updateGamificationUI() {
    var data = getXPData();
    var xp = data.xp;
    var level = getLevel(xp);
    var levelXp = getLevelXP(xp);
    var hdr = document.querySelector('.sidebar-header');
    if (!hdr) return;
    var n = hdr.querySelector('.gamification-level-num');
    if (n) n.textContent = level;
    var ll = hdr.querySelector('[data-level-label]');
    if (ll) ll.textContent = 'Level ' + level;
    var xb = hdr.querySelector('.gamification-xp-bar');
    if (xb) xb.style.width = (levelXp / XP_PER_LEVEL * 100) + '%';
    var xt = hdr.querySelector('.gamification-xp-text');
    if (xt) xt.textContent = xp + ' XP';
  }

  // ─── 16. (renumbered) INITIALIZATION ───
  function init() {
    // Course overview pages must be initialized first (they add elements to DOM)
    initCourseOverview();
    // Auto-enhance pages that don't have the new features yet
    autoEnhance();

    initPlaygrounds();
    initTOC();
    initQuizzes();
    initProgress();
    initReadingTime();
    initDifficulty();
    initCopyButtons();
    initChallenges();
    initTakeaways();
    initBookmarks();
    initCourseBar();
    initCertificate();
    initSearch();
    initGamification();
    updateGamificationUI();
    updateCompletionUI();

    // Add keyboard shortcut hint
    $$('.cp-textarea, .ch-textarea').forEach(function (ta) {
      var hint = document.createElement('div');
      hint.className = 'editor-hint';
      hint.textContent = 'Ctrl+Enter to run';
      ta.parentNode.appendChild(hint);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
