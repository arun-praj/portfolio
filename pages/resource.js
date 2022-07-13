import Nav from '../components/Nav'
import Card from '../components/Card'
import { resources } from '../data/resources'
export default function Home() {
   console.log(resources)
   return (
      <div className='dark'>
         <main className=' h-full w-full font-quattro '>
            <Nav />
            <article className=' max-w-[75ch] m-auto pt-12 pb-28 px-5'>
               <div className=' h-16'></div>
               <h1 className='text-3xl text-white font-bold mt-8 mb-5'>Resources</h1>
               <p>{' Tools, resources and sites that I use for web development and more ;). Feel free to use them. '} </p>
               <div className='h-4'></div>
               <div>
                  {resources.map((resource) => {
                     return (
                        <div key={resource.id}>
                           <h2 className=' text-xl text-white  mt-8 mb-5 font-semibold'>{resource.section}</h2>
                           {resource?.cards.map((card) => {
                              return (
                                 <div key={card.id}>
                                    <Card data={card} />
                                 </div>
                              )
                           })}
                        </div>
                     )
                  })}

                  {/* <Card bgImage='' title={'Tabler Icons'} description='asdf' /> */}
               </div>
            </article>
         </main>
      </div>
   )
}
