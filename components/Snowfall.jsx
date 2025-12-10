 // components/Snowfall.jsx
'use client'

import { useEffect, useState } from 'react'

export default function Snowfall() {
  const [snowflakes, setSnowflakes] = useState([])

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 7,
      opacity: Math.random() * 0.6 + 0.4,
      size: Math.random() * 3 + 2,
    }))
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snow"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: flake.opacity,
          }}
        >
          <div
            className="bg-white rounded-full"
            style={{
              width: `${flake.size}px`,
              height: `${flake.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
