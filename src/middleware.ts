import { auth } from "@/auth"
import {
  apiPrefixRoutes,
  accessRoutes,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "@/routes"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiPrefixRoutes = apiPrefixRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  )
  const isAccessRoutes = accessRoutes.includes(nextUrl.pathname)
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)

  if (isApiPrefixRoutes) return

  if (isAccessRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return
  }

  if (!isLoggedIn && !isPublicRoutes) {
    let callbackUrl = nextUrl.pathname
    if (nextUrl.search) callbackUrl += nextUrl.search
    const encodedCallbackUrl = encodeURIComponent(callbackUrl)

    return Response.redirect(
      new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl),
    )
  }
  return
})

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}
