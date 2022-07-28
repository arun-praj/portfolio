import { NextResponse } from 'next/server'
export function middleware(request) {
   let wildcard = request.headers.get('host').split('.')[0]
   // console.log(request.nextUrl.clone())
   if (wildcard === 'movie') {
      let url = request.nextUrl.clone()
      return NextResponse.rewrite(url + '_sites/movie' + url.pathname)
   } else if (wildcard === 'resource') {
      let url = request.nextUrl.clone()
      return NextResponse.rewrite(url + '_sites/resource' + url.pathname)
   }
   return NextResponse.rewrite(request.nextUrl.clone())
}
