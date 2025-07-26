'use client'

import { useState } from 'react'
import AnimatedText from '@/components/AnimatedText'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-blue-600">1PM</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden flex flex-col space-y-1 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`block w-5 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-48 pb-4' : 'max-h-0'}`}>
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors py-2">How It Works</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors py-2">About</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-fit">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-xl p-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Donate just $1 per month and help{' '}
            <AnimatedText 
              phrases={[
                'save lives',
                'fight hunger',
                'protect animals',
                'educate children',
                'clean our planet',
                'support veterans'
              ]}
              className="text-blue-600"
            />
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Most charities can't accept $1 monthly donations due to processing fees. 
            We bundle your small monthly contributions into meaningful donations that actually reach the causes you care about.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Donating
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Choose Your Causes</h3>
                <p className="text-gray-600">
                  Select the charities and causes you want to support with your monthly $1 donations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">We Bundle & Save</h3>
                <p className="text-gray-600">
                  Your monthly contributions are collected and bundled together to eliminate processing fees.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Maximum Impact</h3>
                <p className="text-gray-600">
                  100% of your donations reach your chosen charities as meaningful, fee-free contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              The $1 Donation Problem
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-600">Without 1PM</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>$1 donation → $0.30 processing fee → $0.70 to charity</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Most charities reject small donations</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Your generosity gets eaten by fees</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">With 1PM</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>$12 annual donation → $0.30 fee → $11.70 to charity</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Charities love meaningful donations</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>97.5% of your money reaches your cause</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make Your Donations Count?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of people turning small monthly contributions into real impact.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 1PM. Making small donations matter.
          </p>
        </div>
      </footer>
      </main>
    </>
  )
}