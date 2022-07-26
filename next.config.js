/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   rewrites: [
      {
         source: '/:path*',
         has: [
            {
               type: 'host',
               value: 'resource.arunprajapati.com',
            },
         ],
         destination: '/resource',
      },
      {
         source: '/:path*',
         has: [
            {
               type: 'host',
               value: 'movie.arunprajapati.com',
            },
         ],
         destination: '/movie',
      },
   ],
}

module.exports = nextConfig
