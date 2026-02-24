import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center bg-white rounded-xl p-10 shadow-sm">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank you!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your recurring donation is set up. You&apos;re now helping make small contributions 
          add up to something meaningful.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
