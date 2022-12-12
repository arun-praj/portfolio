import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

const DynamicHeader = dynamic(() => import('./editor'), {
   ssr: false,
})

export default function Index() {
   const router = useRouter()
   return (
      <div className='flex h-screen text-sm overflow-x-hidden '>
         <div className='px-16 bg-[rgb(29,30,31)] w-full overflow-y-scroll  scrollbar'>
            <DynamicHeader params={router.query} />
         </div>
      </div>
   )
}
