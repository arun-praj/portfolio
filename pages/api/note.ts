// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'
type Data = {
   success?: boolean
   error?: string
   note?: any
}
// import { PrismaClient } from '@prisma/client'

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   const { query, method, body } = req

   switch (method) {
      case 'GET':
         try {
            const foundNote = await prisma.note.findFirst({
               //@ts-ignore
               where: { id: query.note_id },
            })
            res.status(200).json({ note: foundNote, success: true })
         } catch (e) {
            res.status(404).json({ success: false })
         }
         break
      case 'POST':
         try {
            const createdNote = await prisma.note.create({
               data: {
                  content: JSON.stringify(body.content),
               },
            })

            prisma.$disconnect()
            res.status(200).json({ success: true, note: createdNote })
         } catch (e) {
            res.status(500).json({
               error: `Something went horrible: ${e}`,
            })
         }
   }
}
