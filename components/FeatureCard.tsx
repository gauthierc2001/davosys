'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay: number
}

export function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      className="glass-matte rounded-3xl p-8 shadow-xl relative overflow-hidden group h-full min-h-[280px] flex flex-col"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-davo-accent/5 via-transparent to-davo-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-3xl border border-davo-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center space-x-4 mb-4">
          <motion.div 
            className="p-3 rounded-2xl bg-davo-accent/10 relative overflow-hidden"
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
          >
            {/* Icon background animation */}
            <motion.div
              className="absolute inset-0 bg-davo-accent/20 rounded-2xl"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="relative z-10"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
            >
              <Icon className="w-6 h-6 text-davo-accent" />
            </motion.div>
          </motion.div>
          <motion.h3 
            className="text-xl font-semibold text-davo-ink group-hover:text-davo-accent transition-colors duration-300"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {title}
          </motion.h3>
        </div>
        <motion.p 
          className="text-davo-ink/80 leading-relaxed group-hover:text-davo-ink/90 transition-colors duration-300 flex-1"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Floating particles effect */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-davo-accent/30 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5
        }}
      />
      <motion.div
        className="absolute bottom-6 left-6 w-1 h-1 bg-davo-accent/20 rounded-full"
        animate={{
          y: [0, 8, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.3
        }}
      />
    </motion.div>
  )
}
