let Header = ''
let Link = ''
let InlineCode = ''
let Codebox = ''
let Code = ''
let List = ''
let Table = ''
if (typeof window !== 'undefined') {
   Header = require('@editorjs/header')
   Link = require('@editorjs/link')
   InlineCode = require('@editorjs/inline-code')
   Code = require('@calumk/editorjs-codeflask')
   Codebox = require('@bomdi/codebox')
   List = require('@editorjs/list')
   Table = require('editorjs-table')
}

export const EDITOR_JS_TOOLS = {
   header: Header,
   list: List,
   // codebox: Codebox,
   code: {
      class: Code,
      shortcut: 'CTRL+ALT+C',
   },
   table: {
      class: Table,
      inlineToolbar: true,
   },
   inLineCode: {
      class: InlineCode,
   },
   link: Link,
}
