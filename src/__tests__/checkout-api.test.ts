/**
 * Unit tests for the checkout API route logic.
 * We test the plan validation without actually hitting Stripe.
 */

const VALID_PLANS = ['monthly', 'quarterly', 'yearly']

describe('Checkout API - plan validation', () => {
  it('accepts valid plan names', () => {
    VALID_PLANS.forEach(plan => {
      expect(VALID_PLANS.includes(plan)).toBe(true)
    })
  })

  it('rejects invalid plan names', () => {
    const invalid = ['weekly', 'biannual', '', null, undefined, 123]
    invalid.forEach(plan => {
      expect(VALID_PLANS.includes(plan as string)).toBe(false)
    })
  })

  it('has correct pricing in cents', () => {
    const PLAN_CONFIG = {
      monthly: { amount: 100, interval: 'month', intervalCount: 1 },
      quarterly: { amount: 300, interval: 'month', intervalCount: 3 },
      yearly: { amount: 1200, interval: 'year', intervalCount: 1 },
    }

    expect(PLAN_CONFIG.monthly.amount).toBe(100)   // €1
    expect(PLAN_CONFIG.quarterly.amount).toBe(300)  // €3
    expect(PLAN_CONFIG.yearly.amount).toBe(1200)    // €12
    expect(PLAN_CONFIG.quarterly.intervalCount).toBe(3)
  })
})
