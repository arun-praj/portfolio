import { NextResponse } from 'next/server'
export function middleware(request) {
   let wildcard = request.headers.get('host').split('.')[0]
   const { pathname } = request.nextUrl
   if (
      pathname.startsWith('/api') || //  exclude all API routes
      pathname.startsWith('/static') || // exclude static files
      pathname.includes('.') // exclude all files in the public folder
   ) {
      //required at root level
      return NextResponse.next()
   }
   if (wildcard === 'movie') {
      let url = request.nextUrl.clone()
      // url.pathname =
      return NextResponse.rewrite(url + '_sites/movie')
   } else if (wildcard === 'bookmark') {
      let url = request.nextUrl.clone()
      return NextResponse.rewrite(url + '_sites/bookmark' + url.pathname)
   }
   // return NextResponse.rewrite(request.nextUrl.clone())
   return NextResponse.next()
}
