 // components/Sparkles.jsx
'use client'

import { useEffect, useState } from 'react'

export default function Sparkles() {
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    const stars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: Math.random() * 2,
      size: Math.random() * 2 + 1,
    }))
    setSparkles(stars)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            animationDelay: `${sparkle.animationDelay}s`,
          }}
        >
          <svg
            width={sparkle.size * 10}
            height={sparkle.size * 10}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill="#FCD34D"
              opacity="0.8"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}
