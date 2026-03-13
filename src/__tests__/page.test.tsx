import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the hero heading', () => {
    render(<Home />)
    expect(screen.getByText(/Donate just/i)).toBeInTheDocument()
  })

  it('renders Get Started links pointing to /donate', () => {
    render(<Home />)
    const links = screen.getAllByText('Get Started')
    expect(links.length).toBeGreaterThanOrEqual(1)
    links.forEach(link => {
      expect(link.closest('a')).toHaveAttribute('href', '/donate')
    })
  })

  it('renders the How It Works section', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: 'How It Works' })).toBeInTheDocument()
    expect(screen.getByText('Choose Your Causes')).toBeInTheDocument()
    expect(screen.getByText('We Bundle Together')).toBeInTheDocument()
    expect(screen.getByText('Maximum Impact')).toBeInTheDocument()
    expect(screen.getByText(/Goes Further Than You Think/)).toBeInTheDocument()
  })
})
