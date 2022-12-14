// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { create } from 'domain'
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
            // break
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
            const createdNote = await prisma.note.upsert({
               where: { id: body.note_id },
               update: {
                  content: JSON.stringify(body.content),
               },
               create: {
                  content: JSON.stringify(body.content),
               },
            })
            prisma.$disconnect()
            res.status(200).json({ success: true, note: createdNote })
         } catch (e) {
            res.status(500).json({
               success: false,
               error: `Something went horrible: ${e}`,
            })
         }
         break
   }
}
