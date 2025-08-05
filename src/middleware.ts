// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only redirect if user is at the root path
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/es', request.url));
  }

  return NextResponse.next();
}