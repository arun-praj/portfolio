import React, { useRef, useState, useCallback, useEffect } from 'react'

// "@editorjs/checklist": "^1.3.0",
// "@editorjs/code": "^2.7.0",
// "@editorjs/delimiter": "^1.2.0",
// "@editorjs/editorjs": "^2.25.0",
// "@editorjs/embed": "^2.5.3",
// "@editorjs/header": "^2.7.0",
// "@editorjs/image": "^2.6.2",
// "@editorjs/list": "^1.8.0",
// "@editorjs/marker": "^1.2.2",
// "@editorjs/quote": "^2.4.0",
// "@editorjs/raw": "^2.3.1",
// "@editorjs/simple-image": "^1.4.1",
// "@editorjs/table": "^2.1.0",
// "@editorjs/warning": "^1.2.0",
import { createReactEditorJS } from 'react-editor-js'
// import EditorJS from "@editorjs/editorjs";
import { EDITOR_JS_TOOLS } from './NoSSRConstants'

const Editor = ({ query }) => {
   const ReactEditorJS = createReactEditorJS()

   const editorCore = useRef(null)
   const [initialData, setInitialData] = useState({
      time: 1635603431943,
      blocks: [
         {
            id: 'sheNwCUP5A',
            type: 'header',
            data: {
               text: 'Editor.js',
               level: 2,
            },
         },

         {
            id: 'fvZGuFXHmK',
            type: 'header',
            data: {
               text: 'Key features',
               level: 3,
            },
         },
      ],
   })
   const [saveState, setSaveState] = useState('Save')

   async function searchNote() {
      const foundNote = await fetch(
         `/api/note?note_id=${query?.note_id}`,
         {
            method: 'GET',
         }
      )
      const data = await foundNote.json()
      if (data.success) {
         console.log(data)
         setInitialData(data?.note?.content)
      }
   }

   useEffect(() => {
      if (query?.note_id?.length > 0) {
         searchNote()
      }
   }, [])

   const handleSave = useCallback(async () => {
      setSaveState('Saving')
      const savedData = await editorCore.current.save()
      const createdNote = await fetch('/api/note', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            content: savedData,
            note_id: query?.note_id,
         }),
      })
      const data = await createdNote.json()
      if (data.success) {
         setSaveState('Saved')
         console.log('Saved Successfull')
      } else {
         setSaveState('Failed')
         console.log('Fail to save')
      }
   })

   const handleInitialize = useCallback((instance) => {
      editorCore.current = instance
   }, [])

   return (
      <section>
         <div className=' max-w-[820px]  m-auto h-[200px] mt-8 flex flex-col'>
            <button
               onClick={() => handleSave()}
               className=' self-end text-sm flex items-center  text-white py-1 px-4 rounded-md bg-red-500'>
               {saveState}
            </button>
            <div className=' mt-4 '>
               {typeof window !== 'undefined' &&
                  typeof initialData == 'string' && (
                     <ReactEditorJS
                        // holder='editorjs'
                        onInitialize={handleInitialize}
                        tools={EDITOR_JS_TOOLS}
                        readOnly={false}
                        data={
                           typeof initialData === 'string'
                              ? JSON.parse(initialData)
                              : initialData
                        }
                        defaultValue={initialData}
                        inlineToolbar={true}
                        // onChange={() => saveToLocalStorage()}
                     />
                  )}
            </div>
            <div className='text-white'>{JSON.stringify(initialData)}</div>
         </div>
      </section>
   )
}

export default Editor
