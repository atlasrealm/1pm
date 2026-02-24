'use client'

import { useState } from 'react'
import Link from 'next/link'

type Plan = 'monthly' | 'quarterly' | 'yearly'

interface PlanDetails {
  label: string
  price: number
  perMonth: number
  fee: number
  toCharity: number
  feePercent: number
  interval: string
  highlight?: boolean
  badge?: string
}

const PLANS: Record<Plan, PlanDetails> = {
  monthly: {
    label: 'Monthly',
    price: 1,
    perMonth: 1,
    fee: 0.27,         // Stripe EU: 1.5% + €0.25
    toCharity: 0.73,
    feePercent: 27,
    interval: '/month',
  },
  quarterly: {
    label: 'Quarterly',
    price: 3,
    perMonth: 1,
    fee: 0.30,          // 1.5% of 3 + 0.25 = 0.295 ≈ 0.30
    toCharity: 2.70,
    feePercent: 10,
    interval: '/3 months',
    highlight: true,
    badge: 'Recommended',
  },
  yearly: {
    label: 'Yearly',
    price: 12,
    perMonth: 1,
    fee: 0.43,          // 1.5% of 12 + 0.25 = 0.43
    toCharity: 11.57,
    feePercent: 3.6,
    interval: '/year',
    badge: 'Best value',
  },
}

export default function DonatePage() {
  const [selected, setSelected] = useState<Plan>('quarterly')
  const [loading, setLoading] = useState(false)

  const plan = PLANS[selected]

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: selected }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error('Checkout error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <Link href="/" className="text-blue-600 font-bold text-xl">1PM</Link>
            <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-4">
              Choose Your Plan
            </h1>
            <p className="text-lg text-gray-600">
              €1 per month to your chosen cause. Pick how often you&apos;d like to be billed.
            </p>
          </div>

          {/* Plan Selector */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {(Object.entries(PLANS) as [Plan, PlanDetails][]).map(([key, p]) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`relative rounded-xl p-4 border-2 transition-all text-center ${
                  selected === key
                    ? 'border-blue-600 bg-white shadow-lg'
                    : 'border-gray-200 bg-white/60 hover:border-gray-300'
                }`}
              >
                {p.badge && (
                  <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    p.highlight ? 'bg-blue-600 text-white' : 'bg-green-600 text-white'
                  }`}>
                    {p.badge}
                  </span>
                )}
                <div className="font-semibold text-gray-900 mt-1">{p.label}</div>
                <div className="text-2xl font-bold text-gray-900 mt-1">€{p.price}</div>
                <div className="text-sm text-gray-500">{p.interval}</div>
              </button>
            ))}
          </div>

          {/* Fee Transparency Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
            <h2 className="font-semibold text-gray-900 mb-4">Where your money goes</h2>

            {/* Visual bar */}
            <div className="relative h-8 rounded-full overflow-hidden bg-gray-100 mb-4">
              <div
                className="absolute left-0 top-0 h-full bg-blue-600 rounded-l-full transition-all duration-500"
                style={{ width: `${100 - plan.feePercent}%` }}
              />
              <div
                className="absolute right-0 top-0 h-full bg-red-400 rounded-r-full transition-all duration-500"
                style={{ width: `${plan.feePercent}%` }}
              />
            </div>

            <div className="flex justify-between text-sm mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
                <span className="text-gray-700">
                  <strong>€{plan.toCharity.toFixed(2)}</strong> to charity ({(100 - plan.feePercent).toFixed(1)}%)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="text-gray-700">
                  <strong>€{plan.fee.toFixed(2)}</strong> processing fee ({plan.feePercent}%)
                </span>
              </div>
            </div>

            {selected === 'monthly' && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                💡 <strong>Tip:</strong> With quarterly billing, <strong>90%</strong> reaches your cause instead of 73%. 
                Same €1/month commitment — just billed as €3 every 3 months.
              </div>
            )}

            {selected === 'yearly' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800">
                🎉 <strong>Maximum impact!</strong> Only 3.6% goes to fees — <strong>€11.57</strong> out of every €12 goes directly to your chosen cause.
              </div>
            )}
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Redirecting to checkout...' : `Donate €${plan.price} ${plan.interval}`}
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            Secure payment via Stripe. Cancel anytime.
          </p>
        </div>
      </div>
    </main>
  )
}
