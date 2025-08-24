'use client'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { AuroraBackground } from '@/components/AuroraBackground'
import { WaitlistForm } from '@/components/WaitlistForm'
import { FeatureCard } from '@/components/FeatureCard'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { 
  Shield, 
  Gavel, 
  Lock, 
  FileText, 
  Github, 
  Mail,
  ExternalLink,
  ChevronDown,
  Copyright,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'

const features = [
  {
    icon: Shield,
    title: 'Portable identity',
    description: 'Robots register a verifiable on-chain identity with capability metadata so access is simple and consistent across deployments.',
  },
  {
    icon: Gavel,
    title: 'Efficient markets',
    description: 'Tasks are listed with clear terms then allocated with sealed bids for fair pricing and predictable execution at scale.',
  },
  {
    icon: Lock,
    title: 'Instant settlement',
    description: 'Escrow and settlement run on Base with transparent receipts and a clear path for verifiable completion.',
  },
]

const faqs = [
  {
    question: 'What is Davo Systems',
    answer: 'Davo is the on-chain coordination layer for robotics built for trustless settlement and global scale on Base.',
  },
  {
    question: 'Why Base',
    answer: 'Base provides low fees fast finality and a strong developer ecosystem which is ideal for many small transactions.',
  },
  {
    question: 'How do fees work',
    answer: 'All platform fees are paid in $DAVO. A fixed share of fees is used to buy back $DAVO then burn it. The remainder funds operations and infrastructure.',
  },
  {
    question: 'Is there a token sale',
    answer: 'No date to announce. If we run one we will publish terms addresses and risks well in advance.',
  },
  {
    question: 'What goes on-chain',
    answer: 'Identities tasks escrow states and minimal references to external data. Full telemetry stays off-chain with verifiable links.',
  },
  {
    question: 'How can I test or integrate',
    answer: 'A reference agent for ROS2 and a simple HTTP agent are planned. Join the waitlist for setup guides and testnet details.',
  },
]

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollY } = useScroll()
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95])
  const navbarBlur = useTransform(scrollY, [0, 100], [8, 20])
  const { toast } = useToast()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToForm = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhitepaperClick = () => {
    toast({
      title: "Coming soon",
      description: "The whitepaper will be available soon. Stay tuned for updates!",
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <main className="min-h-screen relative overflow-x-hidden overflow-y-auto">
      <AuroraBackground />
      
      {/* Enhanced Navbar */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 border-b border-davo-ink/10"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${navbarOpacity})`,
          backdropFilter: `blur(${navbarBlur}px)`
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img 
                src="/davologo.jpg" 
                alt="Davo Logo" 
                className="w-8 h-8 rounded-lg object-cover"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <span className="ml-2 text-xl font-bold text-davo-ink">Davo</span>
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <motion.a 
                href="#docs" 
                className="text-davo-ink/70 hover:text-davo-ink transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span>Docs</span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-davo-accent group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
              <motion.a 
                href="https://x.com/Davosystems" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-davo-ink/70 hover:text-davo-ink transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button onClick={scrollToForm} size="sm">
                  Join waitlist
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center justify-between gap-8 mb-8"
            variants={heroItemVariants}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-davo-ink leading-tight"
              variants={heroItemVariants}
            >
              The on-chain coordination layer for robotics
            </motion.h1>
            
            <motion.img 
              src="/Untitled design (8).png" 
              alt="Davo Logo" 
              className="w-48 h-48 sm:w-64 sm:h-64 object-contain flex-shrink-0"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.p
            className="text-xl sm:text-2xl text-davo-ink/80 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={heroItemVariants}
          >
            Built for trustless settlement and global scale
          </motion.p>
          
          <motion.div
            className="flex flex-col gap-6 justify-center items-center"
            variants={heroItemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="group" onClick={handleWhitepaperClick}>
                <FileText className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                Read the paper
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-davo-ink mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Davo Systems
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-davo-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.2}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced How it works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-davo-ink mb-4">
              How it works
            </h2>
            <motion.div
              className="w-24 h-1 bg-davo-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
          </motion.div>
          
          <motion.div
            className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex-1">
              <div className="space-y-6">
                {[
                  { step: 'Post', title: 'Post', desc: 'Create a task with requirements budget location and timing.' },
                  { step: 'Bid', title: 'Bid', desc: 'Eligible agents commit bids then reveal for a fair allocation.' },
                  { step: 'Assign', title: 'Assign', desc: 'A deterministic score selects a winner using price reputation and ETA.' },
                  { step: 'Execute', title: 'Execute', desc: 'The agent completes the task and submits result artifacts.' },
                  { step: 'Settle', title: 'Settle', desc: 'Escrow releases and reputation updates on completion.' },
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    className="flex items-center space-x-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-8 h-8 rounded-full bg-davo-accent text-white flex items-center justify-center text-sm font-bold"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {item.step.charAt(0)}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-davo-ink group-hover:text-davo-accent transition-colors duration-200">{item.title}</h3>
                      <p className="text-davo-ink/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Waitlist CTA */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-davo-ink mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Join the waitlist
          </motion.h2>
          <motion.p 
            className="text-xl text-davo-ink/70 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Get product updates early access and testnet invites. No spam and you can unsubscribe any time.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <WaitlistForm />
          </motion.div>
        </div>
      </section>

      {/* Enhanced FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-davo-ink mb-4">
              FAQ
            </h2>
            <motion.div
              className="w-24 h-1 bg-davo-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <AccordionItem value={`item-${index}`} className="border border-davo-ink/10 rounded-xl px-6 hover:border-davo-accent/30 transition-colors duration-200">
                    <AccordionTrigger className="text-left hover:text-davo-accent transition-colors duration-200">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-davo-ink/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <motion.footer 
        className="py-12 px-4 sm:px-6 lg:px-8 border-t border-davo-ink/10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img 
                src="/davologo.jpg" 
                alt="Davo Logo" 
                className="w-6 h-6 rounded object-cover"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-davo-ink font-semibold">Davo Systems</span>
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <motion.a 
                href="https://x.com/Davosystems" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-davo-ink/60 hover:text-davo-ink transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#docs" 
                className="text-davo-ink/60 hover:text-davo-ink transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Docs
              </motion.a>
              <motion.a 
                href="https://github.com/davo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-davo-ink/60 hover:text-davo-ink transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="mailto:hello@davo.xyz" 
                className="text-davo-ink/60 hover:text-davo-ink transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
          
          <motion.div 
            className="mt-8 pt-8 border-t border-davo-ink/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-davo-ink/50 text-sm flex items-center justify-center gap-1">
              <Copyright className="w-3 h-3" />
              DavoSystems 2025
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  )
}
