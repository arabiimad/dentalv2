// src/components/Navbar.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from './ClientMotion'

// on wrappe Link pour l’animer
const MotionLink = motion(Link)

export default function Navbar() {
  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants as import('framer-motion').Variants}
      className="fixed w-full bg-white/70 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-gray-800 hover:text-gray-600"
            >
              DentalPro
            </Link>
          </div>

          {/* Liens de nav */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-gray-700 hover:text-gray-900"
            >
              À propos
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-gray-900"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>

          {/* Bouton Boutique animé */}
          <div>
            <MotionLink
              href="/boutique"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              Boutique
            </MotionLink>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
