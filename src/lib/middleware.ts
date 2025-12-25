import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define which routes require authentication
const protectedRoutes = ['/admin'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the route requires authentication
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route) && pathname !== '/admin/login'
  );
  
  if (isProtectedRoute) {
    // In a real application, you would check for a valid session or token
    // For this example, we'll check for a cookie or localStorage equivalent
    const isAdminAuthenticated = request.cookies.get('isAdminAuthenticated');
    
    if (!isAdminAuthenticated) {
      // Redirect to login page
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ['/admin/:path*'],
};