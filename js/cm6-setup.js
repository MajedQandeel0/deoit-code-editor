import { EditorState, Compartment } from '@codemirror/state'
import { EditorView, keymap, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, rectangularSelection, crosshairCursor, highlightActiveLine } from '@codemirror/view'
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands'
import { syntaxHighlighting, defaultHighlightStyle, bracketMatching, foldGutter, indentOnInput, foldKeymap } from '@codemirror/language'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { autocompletion, closeBrackets, completionKeymap } from '@codemirror/autocomplete'
import { lintKeymap } from '@codemirror/lint'
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search'

var langComp = new Compartment()
var wrapComp = new Compartment()
var view = null
var cursorInterval = null

var baseTheme = EditorView.theme({
  '&': {
    backgroundColor: 'var(--bg-editor)',
    color: 'var(--text)',
    height: '100%'
  },
  '.cm-scroller': {
    fontFamily: 'var(--font-mono, monospace)'
  },
  '.cm-gutters': {
    backgroundColor: 'var(--bg-gutter, #090909)',
    borderRight: '1px solid var(--border-light, #1a1a1a)'
  },
  '.cm-activeLineGutter': {
    backgroundColor: 'rgba(255,255,255,0.03)'
  },
  '.cm-activeLine': {
    backgroundColor: 'rgba(255,255,255,0.03)'
  }
}, { dark: true })

function startCursorFix(blinking) {
  if (cursorInterval) { clearInterval(cursorInterval); cursorInterval = null }
  var dur = 1200
  var isSolid = blinking === 'solid' || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  var anim
  if (isSolid) { anim = 'none' }
  else if (blinking === 'smooth') { anim = 'cm-smooth-blink ' + dur + 'ms ease-in-out infinite' }
  else if (blinking === 'phase') { anim = 'cm-phase-blink ' + dur + 'ms ease-in-out infinite' }
  else if (blinking === 'expand') { anim = 'cm-expand-blink ' + dur + 'ms ease-in-out infinite' }
  else { anim = 'cm-blink ' + dur + 'ms steps(1) infinite' }
  cursorInterval = setInterval(function() {
    document.querySelectorAll('.cm-cursor').forEach(function(el) { el.style.setProperty('animation', anim, 'important') })
  }, 200)
}

function getLang(lang) {
  if (lang === 'html') return html()
  if (lang === 'css') return css()
  return javascript()
}

function init() {
  var target = document.getElementById('editorInputArea')
  if (!target) { setTimeout(init, 50); return }

  var ta = document.getElementById('editorCode')
  var doc = ta ? ta.value : ''
  var settings = typeof window.loadSettings === 'function' ? window.loadSettings() : {}

  view = new EditorView({
    doc: doc,
    extensions: [
      baseTheme,
      lineNumbers(),
      highlightActiveLineGutter(),
      highlightSpecialChars(),
      history(),
      drawSelection(),
      EditorState.allowMultipleSelections.of(true),
      bracketMatching(),
      closeBrackets(),
      autocompletion(),
      rectangularSelection(),
      crosshairCursor(),
      highlightActiveLine(),
      highlightSelectionMatches(),
      foldGutter(),
      indentOnInput(),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      langComp.of(getLang('html')),
      wrapComp.of([]),
      keymap.of([
        ...defaultKeymap,
        ...searchKeymap,
        ...historyKeymap,
        ...foldKeymap,
        ...completionKeymap,
        ...lintKeymap,
        indentWithTab,
      ]),
      keymap.of([
        { key: 'Ctrl-Enter', run: function() { if (typeof window.runCode === 'function') window.runCode(); return true } },
        { key: 'Cmd-Enter', run: function() { if (typeof window.runCode === 'function') window.runCode(); return true } },
        { key: 'Ctrl-s', run: function() { if (typeof window.saveCurrent === 'function') window.saveCurrent(); return true } },
        { key: 'Cmd-s', run: function() { if (typeof window.saveCurrent === 'function') window.saveCurrent(); return true } }
      ]),
      EditorView.updateListener.of(function(upd) {
        if ((upd.docChanged || upd.selectionSet) && typeof window.updateStatus === 'function') {
          window.updateStatus()
        }
      })
    ],
    parent: target
  })

  if (ta) ta.style.display = 'none'

  window.__cmEditor = view
  window.__cmGetContent = function() { return view.state.doc.toString() }
  window.__cmSetContent = function(t) {
    view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: t || '' } })
  }
  window.__cmGetCursor = function() {
    var pos = view.state.selection.main.head
    var line = view.state.doc.lineAt(pos)
    return { line: line.number, col: pos - line.from + 1 }
  }
  window.__cmSetLang = function(lang) {
    view.dispatch({ effects: langComp.reconfigure(getLang(lang)) })
  }
  window.__cmApplySettings = function(s) {
    if (!view) return
    view.dispatch({ effects: [
      wrapComp.reconfigure(s && s.wordWrap ? [EditorView.lineWrapping] : [])
    ] })
    startCursorFix(s && s.cursorBlinking)
    document.documentElement.style.setProperty('--editor-font-size', (s && s.fontSize || 16) + 'px')
  }

  startCursorFix(settings.cursorBlinking)
  if (typeof window.loadSettings === 'function') {
    window.__cmApplySettings(window.loadSettings())
  }
}

init()
