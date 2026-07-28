(function() {
  var cmView = null;
  var cmCompartment = null;
  var currentLang = 'html';
  var initReady = false;
  var pendingContent = null;

  // Stub functions available immediately
  window.__cmSetLang = function() {};
  window.__cmSetContent = function(t) { pendingContent = t; };
  window.__cmGetContent = function() { return pendingContent || ''; };
  window.__cmGetCursor = function() { return { line: 1, col: 1 }; };

  function getFileLang(name) {
    var e = name.split('.').pop().toLowerCase();
    if (e === 'html' || e === 'htm') return 'html';
    if (e === 'css') return 'css';
    if (e === 'js' || e === 'mjs' || e === 'cjs') return 'js';
    if (e === 'jsx') return 'jsx';
    if (e === 'ts' || e === 'tsx') return 'ts';
    return 'text';
  }

  var langModules = {
    html: { pkg: '@codemirror/lang-html', exportName: 'html', noConfig: true },
    css: { pkg: '@codemirror/lang-css', exportName: 'css', noConfig: true },
    js: { pkg: '@codemirror/lang-javascript', exportName: 'javascript', noConfig: false },
    jsx: { pkg: '@codemirror/lang-javascript', exportName: 'javascript', noConfig: false },
    ts: { pkg: '@codemirror/lang-javascript', exportName: 'javascript', noConfig: false }
  };

  var cmReadyResolve;
  window.__cmReady = new Promise(function(resolve) { cmReadyResolve = resolve; });

  async function loadCM() {
    try {
      var basicSetupMod = await import('https://esm.sh/@codemirror/basic-setup@0.20.0?bundle');
      var viewMod = await import('https://esm.sh/@codemirror/view@6.26.3?bundle');
      var stateMod = await import('https://esm.sh/@codemirror/state@6.4.1?bundle');
      var oneDarkMod = await import('https://esm.sh/@codemirror/theme-one-dark@6.1.2?bundle');

      window.__CMView = viewMod;
      window.__CMState = stateMod;
      window.__basicSetup = basicSetupMod;
      window.__oneDark = oneDarkMod;

      cmCompartment = new stateMod.Compartment();
      initReady = true;
      cmReadyResolve();
      return true;
    } catch (e) {
      console.error('CM load error:', e);
      cmReadyResolve();
      return false;
    }
  }

  var lineWrapCompartment = null;

  async function initEditor() {
    var container = document.getElementById('editorCm');
    if (!container) return;

    var loaded = await loadCM();
    if (!loaded) return;

    var State = window.__CMState;
    var View = window.__CMView;
    var basicSetup = window.__basicSetup;
    var oneDark = window.__oneDark;

    var langExt = await loadLang(currentLang);
    lineWrapCompartment = new State.Compartment();
    window.__lineWrapCompartment = lineWrapCompartment;

    var state = State.EditorState.create({
      doc: '',
      extensions: [
        basicSetup.basicSetup,
        oneDark.oneDark,
        cmCompartment.of(langExt),
        lineWrapCompartment.of(View.EditorView.lineWrapping),
        View.EditorView.updateListener.of(function(update) {
          if (update.docChanged) {
            var ta = document.getElementById('editorCode');
            if (ta) {
              ta.value = update.state.doc.toString();
              ta.dispatchEvent(new Event('input', { bubbles: true }));
            }
          }
        })
      ]
    });

    cmView = new View.EditorView({
      state: state,
      parent: container
    });

    window.__cmEditor = cmView;
    window.__cmSetLang = setLang;
    window.__cmSetContent = setContent;
    window.__cmGetContent = getContent;
    window.__cmGetCursor = getCursor;

    // Trigger initial sync if content was set before init
    if (pendingContent !== null) {
      setContent(pendingContent);
      pendingContent = null;
    }
  }

  async function loadLang(lang) {
    var info = langModules[lang];
    if (!info) {
      var State = window.__CMState;
      return State.EditorState.allowMultipleSelections.of(true);
    }

    // Direct import from esm.sh
    try {
      var url = 'https://esm.sh/' + info.pkg + '@6?bundle';
      var langMod = await import(url);
      var langFn = langMod[info.exportName];
      if (langFn) {
        if (info.noConfig) return langFn();
        return langFn({ jsx: lang === 'jsx', typescript: lang === 'ts' });
      }
    } catch (e) {
      var State = window.__CMState;
      return State.EditorState.allowMultipleSelections.of(true);
    }
    var State = window.__CMState;
    return State.EditorState.allowMultipleSelections.of(true);
  }

  async function setLang(lang) {
    currentLang = lang;
    if (!cmView || !cmCompartment || !window.__CMState) return;
    var State = window.__CMState;
    var ext = await loadLang(lang);
    cmView.dispatch({
      effects: cmCompartment.reconfigure(ext)
    });
  }

  function setContent(text) {
    if (!cmView) {
      pendingContent = text;
      return;
    }
    var State = window.__CMState;
    cmView.dispatch({
      changes: { from: 0, to: cmView.state.doc.length, insert: text || '' }
    });
  }

  function getContent() {
    if (!cmView) return '';
    return cmView.state.doc.toString();
  }

  function getCursor() {
    if (!cmView) return { line: 1, col: 1 };
    var pos = cmView.state.selection.main.head;
    var line = cmView.state.doc.lineAt(pos);
    return { line: line.number, col: pos - line.from + 1 };
  }

  // Init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEditor);
  } else {
    initEditor();
  }

  // Expose for editor.js bridge
  window.__cmInit = initEditor;
  window.__cmSetLang = setLang;
  window.__cmSetContent = setContent;
  window.__cmGetContent = getContent;
  window.__cmGetCursor = getCursor;
})();
