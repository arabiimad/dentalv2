// src/components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren:   0.2,
    },
  },
} as const

const itemVariants = {
  hidden:  { y: 20, opacity: 0 },
  visible: {
    y:       0,
    opacity: 1,
    transition: {
      type:      'spring',
      stiffness: 80,
      damping:   15,
    } as const,
  },
} as const

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden">
      {/* décor animé en arrière-plan */}
      <div className="absolute inset-0 animated-bg blur-3xl opacity-30" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 px-4 max-w-2xl text-center"
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold mb-4 text-gradient">
          Bienvenue chez DentalPro
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-neutral-800 mb-8">
          Votre partenaire de confiance pour le matériel dentaire & consommables médicaux.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link href="#services" scroll={false}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
            >
              Découvrez nos services
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
