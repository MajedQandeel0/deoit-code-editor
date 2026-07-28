(function() {
  var cmEditor = null;
  var pendingContent = null;

  window.__cmGetContent = function() { return cmEditor ? cmEditor.getValue() : (pendingContent || ''); };
  window.__cmGetCursor = function() {
    if (!cmEditor) return { line: 1, col: 1 };
    var pos = cmEditor.getCursor();
    return { line: pos.line + 1, col: pos.ch + 1 };
  };
  window.__cmSetContent = function(text) {
    if (!cmEditor) { pendingContent = text; return; }
    cmEditor.setValue(text || '');
  };
  window.__cmSetLang = function(lang) {
    if (!cmEditor) return;
    var mode = 'htmlmixed';
    if (lang === 'css') mode = 'css';
    else if (lang === 'js' || lang === 'jsx' || lang === 'ts') mode = 'javascript';
    cmEditor.setOption('mode', mode);
  };

  function initEditor() {
    var ta = document.getElementById('editorCode');
    if (!ta) { setTimeout(initEditor, 100); return; }
    if (typeof CodeMirror === 'undefined') { setTimeout(initEditor, 200); return; }

    cmEditor = CodeMirror.fromTextArea(ta, {
      mode: 'htmlmixed',
      theme: 'one-dark',
      indentUnit: 2,
      tabSize: 2,
      indentWithTabs: false,
      lineNumbers: true,
      lineWrapping: false,
      matchBrackets: true,
      autoCloseBrackets: true,
      styleActiveLine: true,
      foldGutter: true,
      gutters: ['CodeMirror-foldgutter', 'CodeMirror-linenumbers'],
      extraKeys: {
        'Ctrl-S': function() { if (typeof saveCurrent === 'function') saveCurrent(); if (typeof runCode === 'function') runCode(); },
        'Cmd-S': function() { if (typeof saveCurrent === 'function') saveCurrent(); if (typeof runCode === 'function') runCode(); },
        'Ctrl-Enter': function() { if (typeof runCode === 'function') runCode(); },
        'Cmd-Enter': function() { if (typeof runCode === 'function') runCode(); },
        'Ctrl-/': function(cm) { cm.toggleComment({ indent: true }); },
        'Cmd-/': function(cm) { cm.toggleComment({ indent: true }); },
        'Ctrl-G': function() { if (typeof goToLine === 'function') goToLine(); },
        'Cmd-G': function() { if (typeof goToLine === 'function') goToLine(); },
        'Ctrl-Shift-P': function() { if (typeof openCommandPalette === 'function') openCommandPalette(); },
        'Alt-Up': function(cm) { cm.swapLine(cm.getCursor().line, cm.getCursor().line - 1); },
        'Alt-Down': function(cm) { cm.swapLine(cm.getCursor().line, cm.getCursor().line + 1); },
        'Ctrl-Shift-K': function(cm) { cm.removeLine(cm.getCursor().line); }
      }
    });

    cmEditor.on('change', function() {
      if (typeof updateStatus === 'function') updateStatus();
    });

    cmEditor.on('cursorActivity', function() {
      if (typeof updateStatus === 'function') updateStatus();
    });

    // Auto-complete hint
    cmEditor.on('inputRead', function(cm, change) {
      if (change.text.length > 0) {
        var ch = change.text[0];
        if (ch && ch.length === 1 && /[\w.$]$/.test(ch)) {
          cm.showHint({ completeSingle: false });
        }
      }
    });

    window.__cmEditor = cmEditor;

    if (pendingContent !== null) {
      cmEditor.setValue(pendingContent);
      pendingContent = null;
    }

    // Sync with existing settings
    if (typeof loadSettings === 'function') {
      var s = loadSettings();
      if (s) {
        cmEditor.setOption('lineWrapping', s.wordWrap);
        cmEditor.setOption('tabSize', s.tabSize || 2);
        cmEditor.setOption('lineNumbers', s.lineNumbers !== false);
        cmEditor.setOption('indentUnit', s.tabSize || 2);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEditor);
  } else {
    setTimeout(initEditor, 50);
  }
})();
