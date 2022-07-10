import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
   return (
      <div>
         <Head>
            <title>@Aaaarun</title>
            <meta name='description' content='Portfolio of Arun Prajapati' />
            <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
            <meta httpEquiv='Content-Type' content='text/html; charset=ISO-8859-1'></meta>
            <link rel='icon' href='/favicon.ico' />
         </Head>
         <Component {...pageProps} />
      </div>
   )
}

export default MyApp
