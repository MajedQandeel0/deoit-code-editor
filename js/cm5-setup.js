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
    var container = document.getElementById('editorCm');
    if (!ta || !container) return;
    if (typeof CodeMirror === 'undefined') { setTimeout(initEditor, 200); return; }

    cmEditor = CodeMirror(container, {
      value: ta.value || '',
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
        'Ctrl-S': function() { saveCurrent(); runCode(); },
        'Cmd-S': function() { saveCurrent(); runCode(); },
        'Ctrl-Enter': function() { runCode(); },
        'Cmd-Enter': function() { runCode(); },
        'Ctrl-/': function(cm) { cm.toggleComment({ indent: true }); },
        'Cmd-/': function(cm) { cm.toggleComment({ indent: true }); },
        'Ctrl-D': function(cm) { cm.findNext(); },
        'Cmd-D': function(cm) { cm.findNext(); },
        'Ctrl-G': function(cm) {
          var line = prompt('Go to line:');
          if (line) { var n = parseInt(line); if (n > 0) cm.setCursor(n - 1); }
        },
        'Ctrl-Shift-P': function() { if (typeof openCommandPalette === 'function') openCommandPalette(); },
        'Alt-Up': function(cm) { cm.swapLine(cm.getCursor().line, cm.getCursor().line - 1); },
        'Alt-Down': function(cm) { cm.swapLine(cm.getCursor().line, cm.getCursor().line + 1); },
        'Ctrl-Shift-K': function(cm) { cm.removeLine(cm.getCursor().line); },
        'Tab': function(cm) { cm.replaceSelection('  '); }
      },
      hintOptions: {
        hint: function(editor) {
          var mode = editor.getOption('mode');
          if (mode === 'css') return CodeMirror.hint.css(editor);
          if (mode === 'javascript') return CodeMirror.hint.javascript(editor);
          return CodeMirror.hint.html(editor);
        }
      }
    });

    cmEditor.on('change', function() {
      var ta = document.getElementById('editorCode');
      if (ta) ta.value = cmEditor.getValue();
    });

    cmEditor.on('cursorActivity', function() {
      updateStatus();
    });

    // Auto-complete on typing
    cmEditor.on('inputRead', function(cm, change) {
      if (change.text.length > 0) {
        var ch = change.text[0];
        if (ch && ch.length === 1 && /[\w.$]$/.test(ch)) {
          cm.showHint({ completeSingle: false });
        }
      }
    });

    window.__cmEditor = cmEditor;

    // Apply pending content
    if (pendingContent !== null) {
      cmEditor.setValue(pendingContent);
      pendingContent = null;
    }

    // Sync settings
    if (typeof loadSettings === 'function') {
      var s = loadSettings();
      if (s) {
        cmEditor.setOption('lineWrapping', s.wordWrap);
        cmEditor.setOption('tabSize', s.tabSize);
        cmEditor.setOption('lineNumbers', s.lineNumbers);
        cmEditor.setOption('indentUnit', s.tabSize || 2);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEditor);
  } else {
    setTimeout(initEditor, 100);
  }
})();
