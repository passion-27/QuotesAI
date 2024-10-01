import { getServerSession } from "next-auth/next"

import { authOptions } from "@/lib/auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)

  return session?.user
}
// Auto-generated comment for change 14

// Auto-generated comment for change 13
