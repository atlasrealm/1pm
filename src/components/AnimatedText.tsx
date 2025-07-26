'use client'

import { useState, useEffect } from 'react'

interface AnimatedTextProps {
  phrases: string[]
  className?: string
}

export default function AnimatedText({ phrases, className = '' }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length)
        setIsVisible(true)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <span className={`transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      {phrases[currentIndex]}
    </span>
  )
}