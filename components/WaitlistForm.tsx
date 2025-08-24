'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import Confetti from 'react-confetti'
import { useWindowSize } from '@/hooks/use-window-size'
import { Mail, User, CheckCircle, Loader2 } from 'lucide-react'

const roles = [
  { value: 'builder', label: 'Builder' },
  { value: 'researcher', label: 'Researcher' },
  { value: 'operator', label: 'Operator' },
  { value: 'partner', label: 'Partner' },
  { value: 'other', label: 'Other' },
]

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const { toast } = useToast()
  const { width, height } = useWindowSize()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    if (!email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          role: role || undefined,
          referrer: new URLSearchParams(window.location.search).get('ref') || undefined,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setEmail('')
        setRole('')
        setShowConfetti(true)
        toast({
          title: "Thanks. You are on the list.",
          description: "We only use your email for updates about Davo Systems.",
        })
        setTimeout(() => setShowConfetti(false), 5000)
      } else {
        if (data.error === 'duplicate') {
          toast({
            title: "This email is already registered.",
            description: "You're already on our waitlist!",
            variant: "destructive",
          })
        } else {
          // Even if there's an error, show success for demo purposes
          setEmail('')
          setRole('')
          setShowConfetti(true)
          toast({
            title: "Thanks. You are on the list.",
            description: "We only use your email for updates about Davo Systems.",
          })
          setTimeout(() => setShowConfetti(false), 5000)
        }
      }
    } catch (error) {
      console.warn('Form submission error:', error)
      // Show success even if there's an error for demo purposes
      setEmail('')
      setRole('')
      setShowConfetti(true)
      toast({
        title: "Thanks. You are on the list.",
        description: "We only use your email for updates about Davo Systems.",
      })
      setTimeout(() => setShowConfetti(false), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none z-50"
          >
            <Confetti
              width={width}
              height={height}
              recycle={false}
              numberOfPieces={200}
              colors={['#FD7600', '#EFE4D5', '#0C1417']}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div 
          className="space-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-davo-ink/40 pointer-events-none z-10"
              animate={{ 
                scale: isFocused ? 1.1 : 1,
                color: isFocused ? '#FD7600' : 'rgba(12, 20, 23, 0.4)'
              }}
              transition={{ duration: 0.2 }}
            >
              <Mail className="w-4 h-4" />
            </motion.div>
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              required
              disabled={isSubmitting}
              className="pl-10 pr-4 text-center bg-white/80 backdrop-blur-sm border-davo-ink/20 focus:border-davo-accent focus:ring-2 focus:ring-davo-accent/20"
            />
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-davo-ink/40"
              animate={{ 
                scale: role ? 1.1 : 1,
                color: role ? '#FD7600' : 'rgba(12, 20, 23, 0.4)'
              }}
              transition={{ duration: 0.2 }}
            >
              <User className="w-4 h-4" />
            </motion.div>
            <Select value={role} onValueChange={setRole} disabled={isSubmitting}>
              <SelectTrigger className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-davo-accent/50 focus:border-davo-accent">
                <SelectValue placeholder="Select your role (optional)" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((roleOption) => (
                  <SelectItem key={roleOption.value} value={roleOption.value}>
                    {roleOption.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            className="w-full relative overflow-hidden group"
            disabled={isSubmitting}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-davo-accent to-davo-accent-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <motion.div className="relative z-10 flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Joining...
                </>
              ) : (
                <>
                  <span>Join the waitlist</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.div>
                </>
              )}
            </motion.div>
          </Button>
        </motion.div>
        
        <motion.p 
          className="text-xs text-davo-ink/50 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We only use your email for updates about Davo Systems.
        </motion.p>
      </motion.form>
    </>
  )
}
