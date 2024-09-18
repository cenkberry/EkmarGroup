import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'tr', 'ru'],
  defaultLocale: 'en'
});
 
export const config = {
  matcher: ['/', '/(tr|en|ru)/:path*']
};