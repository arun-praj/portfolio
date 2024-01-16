import '../styles/globals.css'
import '../styles/editor.css'
import '../styles/lock.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
   return (
      <div>
         <Head>
            <script async src="https://umami.arunprajapati.com.np/script.js" data-website-id="3f46c5d9-4384-43b4-a402-ab4fd895c81b"></script>
            <title>@Aaaarun</title>
            <meta
               name='description'
               content='Author: Arun Prajapati, Portfolio of Arun Prajapati, Length:2 pages'
            />
            <meta
               httpEquiv='Content-Type'
               content='text/html; charset=utf-8'
            />
            <meta
               httpEquiv='Content-Type'
               content='text/html; charset=ISO-8859-1'></meta>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Component {...pageProps} />
      </div>
   )
}

export default MyApp
