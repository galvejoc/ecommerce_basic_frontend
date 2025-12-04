import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET || '');

export async function middleware(request: NextRequest) {
  console.log('Middleware is running');
  const token = request.cookies.get('jwt')?.value;
  if (request.nextUrl.pathname.includes('/tasks')) {
    if (!token) {
      // console.log('no token');
      return NextResponse.redirect(new URL('/login', request.url));
    }
    try {
      const { payload } = await jwtVerify(
        token,
        SECRET)
      // console.log('Token is valid:', payload);
      return NextResponse.next();
    } catch (error) {
      // console.log('Error verifying JWT:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
}

export const config = {
  matcher: ['/tasks/:path*'],
};