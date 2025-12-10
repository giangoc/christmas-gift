// components/Confetti.jsx
'use client'

import { useEffect } from 'react'

export default function Confetti({ active, onComplete }) {
  useEffect(() => {
    if (!active || typeof window === 'undefined') return

    // Dynamically import canvas-confetti
    import('canvas-confetti').then((confetti) => {
      const duration = 3000
      const animationEnd = Date.now() + duration
      const defaults = { 
        startVelocity: 30, 
        spread: 360, 
        ticks: 60, 
        zIndex: 9999,
        origin: { y: 0.5 }
      }

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          clearInterval(interval)
          if (onComplete) onComplete()
          return
        }

        const particleCount = 50 * (timeLeft / duration)

        // Left side confetti
        confetti.default({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#DC2626', '#059669', '#FCD34D', '#FFFFFF', '#F59E0B'],
        })
        
        // Right side confetti
        confetti.default({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#DC2626', '#059669', '#FCD34D', '#FFFFFF', '#F59E0B'],
        })
      }, 250)

      return () => clearInterval(interval)
    })
  }, [active, onComplete])

  return null
}