import { auth } from '@/auth';

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== '/auth/login') {
    const newUrl = new URL('/auth/login', req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ['/app/:path*'],
};
