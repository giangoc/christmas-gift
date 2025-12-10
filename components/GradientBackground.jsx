 // components/GradientBackground.jsx
'use client'

import { useEffect, useRef } from 'react'

export default function GradientBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let time = 0

    const animate = () => {
      time += 0.01

      const gradient = ctx.createLinearGradient(
        0, 0,
        canvas.width, canvas.height
      )

      const red = Math.sin(time) * 50 + 150
      const green = Math.cos(time * 0.5) * 50 + 100

      gradient.addColorStop(0, `rgb(${red}, 50, 50)`)
      gradient.addColorStop(0.5, `rgb(50, ${green}, 50)`)
      gradient.addColorStop(1, `rgb(${red}, 50, 50)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-50"
    />
  )
}
