import { EditorState, Compartment } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { basicSetup } from '@codemirror/basic-setup'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

var langComp = new Compartment()
var wrapComp = new Compartment()
var view = null

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

  view = new EditorView({
    doc: doc,
    extensions: [
      basicSetup,
      oneDark,
      langComp.of(getLang('html')),
      wrapComp.of([]),
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
    view.dispatch({ effects: wrapComp.reconfigure(s && s.wordWrap ? [EditorView.lineWrapping] : []) })
    document.documentElement.style.setProperty('--editor-font-size', (s && s.fontSize || 16) + 'px')
  }

  if (typeof window.loadSettings === 'function') {
    window.__cmApplySettings(window.loadSettings())
  }
}

init()
