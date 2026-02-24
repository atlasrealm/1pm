import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
})

const PLAN_CONFIG = {
  monthly: {
    amount: 100, // cents
    interval: 'month' as const,
    intervalCount: 1,
  },
  quarterly: {
    amount: 300,
    interval: 'month' as const,
    intervalCount: 3,
  },
  yearly: {
    amount: 1200,
    interval: 'year' as const,
    intervalCount: 1,
  },
}

export async function POST(req: NextRequest) {
  try {
    const { plan } = await req.json()

    if (!plan || !(plan in PLAN_CONFIG)) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }

    const config = PLAN_CONFIG[plan as keyof typeof PLAN_CONFIG]

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card', 'ideal'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: config.amount,
            recurring: {
              interval: config.interval,
              interval_count: config.intervalCount,
            },
            product_data: {
              name: '1PM Donation',
              description: `€${config.amount / 100} ${plan} donation`,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/donate`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
