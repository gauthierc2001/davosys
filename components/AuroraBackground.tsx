'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function AuroraBackground() {
  const { scrollY } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 50])
  const y2 = useTransform(scrollY, [0, 1000], [0, -30])
  const y3 = useTransform(scrollY, [0, 1000], [0, 20])
  const y4 = useTransform(scrollY, [0, 1000], [0, -40])
  const y5 = useTransform(scrollY, [0, 1000], [0, 35])

  // Mouse-responsive transforms
  const mouseX = useTransform(scrollY, [0, 1000], [mousePosition.x * 20, mousePosition.x * 40])
  const mouseY = useTransform(scrollY, [0, 1000], [mousePosition.y * 20, mousePosition.y * 40])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced radial gradient background */}
      <motion.div 
        className="absolute inset-0 hero-bg"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(253, 118, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 40%, rgba(253, 118, 0, 0.15) 0%, transparent 60%)',
            'radial-gradient(circle at 40% 60%, rgba(253, 118, 0, 0.12) 0%, transparent 55%)',
            'radial-gradient(circle at 50% 50%, rgba(253, 118, 0, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced vignette effect */}
      <motion.div 
        className="absolute inset-0 vignette"
        animate={{
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced animated orange ribbons */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-1 bg-gradient-to-r from-transparent via-davo-accent/20 to-transparent rounded-full"
        style={{ y: y1, x: mouseX }}
        animate={{
          x: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
          scaleX: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-davo-accent/15 to-transparent rounded-full"
        style={{ y: y2, x: mouseX }}
        animate={{
          x: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2],
          scaleX: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-80 h-1 bg-gradient-to-r from-transparent via-davo-accent/12 to-transparent rounded-full"
        style={{ y: y3, x: mouseX }}
        animate={{
          x: [0, 25, 0],
          opacity: [0.1, 0.4, 0.1],
          scaleX: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* New floating particles */}
      <motion.div
        className="absolute top-1/5 right-1/5 w-2 h-2 bg-davo-accent/30 rounded-full"
        style={{ y: y4 }}
        animate={{
          y: [0, -30, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/6 w-1 h-1 bg-davo-accent/25 rounded-full"
        style={{ y: y5 }}
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          opacity: [0.1, 0.6, 0.1],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-davo-accent/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          x: [0, 8, 0],
          opacity: [0.15, 0.7, 0.15],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      {/* Interactive glow effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(253, 118, 0, 0.05) 0%, transparent 50%)`
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Enhanced grain texture */}
      <motion.div 
        className="absolute inset-0 grain"
        animate={{
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/6 left-1/8 w-4 h-4 border border-davo-accent/10 rounded-full"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-1/6 right-1/8 w-3 h-3 border border-davo-accent/15 rounded-lg"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />
    </div>
  )
}
