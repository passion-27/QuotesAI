import { authOptions } from "@/lib/auth"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
// Auto-generated comment for change 3

// Auto-generated comment for change 3
