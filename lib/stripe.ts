import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_API_KEY || '', {
  apiVersion: "2024-04-10",
  typescript: true,
})
// Auto-generated comment for change 15

// Auto-generated comment for change 14
