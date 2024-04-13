import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

// Default code latest code 
// export const { auth, handlers, signIn, signOut } = NextAuth({
//     providers: [GitHub, Google],
// })

// 6 months as used in tutorial
export const { 
    handlers: { GET, POST },
    auth,
} = NextAuth ({
    providers: [GitHub]
})