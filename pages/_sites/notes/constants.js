import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import Image from '@editorjs/image'
import Raw from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'

export const EDITOR_JS_TOOLS = {
   paragraph: {
      config: {
         placeholder: 'Title',
      },
   },
   embed: Embed,
   marker: Marker,
   header: {
      class: Header,
      inlineToolbar: ['marker', 'link'],
      config: {
         placeholder: 'Title',
      },

      shortcut: 'CMD+SHIFT+H',
      focus: true,
   },
   code: Code,
   linkTool: LinkTool,
   table: Table,
   list: List,
   quote: Quote,
   checklist: CheckList,
   image: Image,
   warning: Warning,
   raw: Raw,
   delimiter: Delimiter,
   inlineCode: InlineCode,
   simpleImage: SimpleImage,
}
