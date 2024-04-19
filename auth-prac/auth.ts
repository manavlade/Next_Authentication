import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "./lib/db"
import authConfig from "./auth.config"



// Default code latest code 
export const { 
    handlers: {GET, POST} ,
     auth
     } = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
})

















// 6 months as used in tutorial
// export const { 
//     handlers: { GET, POST },
//     auth,
// } = NextAuth ({
//     providers: [GitHub]
// })