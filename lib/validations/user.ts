import * as z from "zod"

export const userNameSchema = z.object({
  name: z.string().min(3).max(32),
})
// Auto-generated comment for change 18

// Auto-generated comment for change 17
