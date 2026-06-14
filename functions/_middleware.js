export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  
  // If it's a static asset, serve it directly
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/images/') ||
    url.pathname.match(/\.(js|css|png|jpg|jpeg|svg|ico|woff|woff2|ttf|json)$/)
  ) {
    return next();
  }
  
  // For all other routes, serve index.html (SPA fallback)
  return next('/index.html');
}