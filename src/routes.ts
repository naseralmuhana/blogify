/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/"]

/**
 * An array of routes related to access control and authentication.
 * These routes will redirect logged-in users to the default login redirect path.
 * @type {string[]}
 */
export const accessRoutes: string[] = ["/login"]

/**
 * The prefix for API routes.
 * Routes that start with this prefix '/api/..' are used for API purposes.
 * @type {string[]}
 */
export const apiPrefixRoutes: string[] = ["/api/auth", "/api/edgestore"]

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/"
