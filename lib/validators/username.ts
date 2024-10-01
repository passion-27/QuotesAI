import { z } from 'zod'

export const UsernameValidator = z.object({
  name: z
    .string()
    .min(3)
    .max(32)
    .regex(/^[a-zA-Z0-9_]+$/),
})
// Auto-generated comment for change 19

// Auto-generated comment for change 18
