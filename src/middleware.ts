import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export default function middleware(request: NextRequest) {

    const {pathname, searchParams} = request.nextUrl
    const authToken = request.cookies.get('authToken')?.value

    if (!authToken && pathname.startsWith('/page/admin')) {
        return Response.redirect(new URL('/page/user/authentication', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
