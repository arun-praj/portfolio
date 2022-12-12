import React, { useRef, useState, useCallback } from 'react'
import { createReactEditorJS } from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './constants'

const Editor = ({ params }: any) => {
   const ReactEditorJS = createReactEditorJS()
   const editorCore = useRef(null)
   const [initialData, setInitialData] = useState()
   // useEffect(() => {
   //    let savedData: any
   //    const func = async () => {
   //       // @ts-ignore: Object is possibly 'null'.
   //       savedData = await editorCore.current.save()
   //    }
   //    return () => {
   //       if (savedData.blocks.length < 1) {
   //          localStorage.removeItem(savedData.blocks[0]?.id)
   //       }
   //    }
   // }, [])
   // const saveToLocalStorage = useCallback(async () => {
   //    // @ts-ignore: Object is possibly 'null'.
   //    const savedData = await editorCore.current.save()
   //    if (
   //       savedData?.blocks?.length >= 0 &&
   //       savedData.blocks[0]?.id !== undefined
   //    ) {
   //       localStorage.setItem(
   //          savedData.blocks[0]?.id,
   //          JSON.stringify(savedData)
   //       )
   //    }
   // }, [])
   async function searchNote() {
      console.log(params)

      const foundNote = await fetch(
         `/api/note?note_id=${params.note_id}`,
         {
            method: 'GET',
         }
      )
      const data = await foundNote.json()

      if (data.success && data.note !== null) {
         setInitialData(data.note.content)
      }
   }
   if (params.note_id !== 'new') {
      searchNote()
   }
   const handleSave = useCallback(async () => {
      // @ts-ignore: Object is possibly 'null'.
      const savedData = await editorCore.current.save()

      const createdNote = await fetch('/api/note', {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            content: savedData,
         }),
      })
   }, [])

   const handleInitialize = useCallback((instance: any) => {
      editorCore.current = instance
   }, [])
   return (
      <section>
         <div className=' max-w-[820px]  m-auto h-[200px] mt-8 flex flex-col'>
            <button
               onClick={() => handleSave()}
               className=' self-end text-sm flex items-center  text-white py-1 px-4 rounded-md bg-red-500'>
               Save
            </button>
            <div className=' mt-4 text-white '>
               {typeof window !== undefined && (
                  <ReactEditorJS
                     onInitialize={handleInitialize}
                     tools={EDITOR_JS_TOOLS}
                     readOnly={true}
                     value={
                        typeof initialData === 'string' &&
                        //@ts-ignore
                        initialData?.length !== 0
                           ? JSON.parse(initialData)
                           : initialData
                     }
                     // defaultBlock={initialData}
                     inlineToolbar={true}
                     // onChange={() => saveToLocalStorage()}
                  />
               )}
               <div>{JSON.stringify(initialData)}</div>
            </div>
         </div>
      </section>
   )
}

export default Editor
