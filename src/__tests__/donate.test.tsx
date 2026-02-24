import { render, screen, fireEvent } from '@testing-library/react'
import DonatePage from '@/app/donate/page'

describe('Donate page', () => {
  it('renders plan options', () => {
    render(<DonatePage />)
    expect(screen.getByText('Monthly')).toBeInTheDocument()
    expect(screen.getByText('Quarterly')).toBeInTheDocument()
    expect(screen.getByText('Yearly')).toBeInTheDocument()
  })

  it('pre-selects quarterly as recommended', () => {
    render(<DonatePage />)
    expect(screen.getByText('Recommended')).toBeInTheDocument()
    // Default checkout button should show quarterly price
    expect(screen.getByText('Donate €3 /3 months')).toBeInTheDocument()
  })

  it('updates fee display when selecting monthly', () => {
    render(<DonatePage />)
    fireEvent.click(screen.getByText('Monthly'))
    expect(screen.getByText('Donate €1 /month')).toBeInTheDocument()
    // Should show the upsell tip
    expect(screen.getByText(/With quarterly billing/)).toBeInTheDocument()
  })

  it('updates fee display when selecting yearly', () => {
    render(<DonatePage />)
    fireEvent.click(screen.getByText('Yearly'))
    expect(screen.getByText('Donate €12 /year')).toBeInTheDocument()
    expect(screen.getByText(/Maximum impact/)).toBeInTheDocument()
  })

  it('shows where your money goes breakdown', () => {
    render(<DonatePage />)
    expect(screen.getByText('Where your money goes')).toBeInTheDocument()
    expect(screen.getByText(/to charity/)).toBeInTheDocument()
    expect(screen.getByText(/processing fee/)).toBeInTheDocument()
  })
})
