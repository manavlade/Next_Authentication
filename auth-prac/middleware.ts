import authConfig from "./auth.config"
import NextAuth from "next-auth"

import {
    publicRoutes,
    apiAuthPrefix,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT
} from "@/routes"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    // req.auth
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth

    const isAPIAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isLoginRoute = nextUrl.pathname === "/auth/login"
    const isRegisterRoute = nextUrl.pathname === "/auth/register"

    if (isAPIAuthRoute) {
        return null;
    }

    if (isAuthRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null
    }

    if (!isLoggedIn && !isPublicRoute && !isLoginRoute && !isRegisterRoute) {
        return Response.redirect(new URL("/auth/login", nextUrl))
    }

    return null;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}