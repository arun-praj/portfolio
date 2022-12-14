import React, { useEffect, useState } from 'react'

const Index = () => {
   const [initialData, setInitialData] = useState()

   async function searchNote() {
      const foundNote = await fetch(`/api/note?note_id=typescript`, {
         method: 'GET',
      })
      const data = await foundNote.json()
      console.log(data)
      if (data.success) {
         setInitialData(data?.note?.content)
      }
   }
   useEffect(() => {
      searchNote()
   }, [])
   console.log(initialData)

   return <div>{JSON.stringify(initialData)}asdf</div>
}

export default Index
