// src/components/Loader.tsx
'use client'

import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-neutral-100 flex items-center justify-center z-50">
      {/* Logo qui tourne */}
      <motion.div
        className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
      >
        DP
      </motion.div>
      {/* Barre de chargement en bas */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-2/3 h-2 rounded-full overflow-hidden bg-primary-light">
        <div className="loader-shimmer h-full"></div>
      </div>
    </div>
  )
}
