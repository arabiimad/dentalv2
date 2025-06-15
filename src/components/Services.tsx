// src/components/Services.tsx
'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { FaTooth, FaSyringe, FaTools, FaBoxOpen } from 'react-icons/fa'

const services = [
  {
    icon: <FaTooth size={32} />,
    title: "Équipements de cabinet",
    desc: "Fauteuils, lampes opératoires, mobiliers ergonomiques pour votre confort et celui de vos patients."
  },
  {
    icon: <FaTools size={32} />,
    title: "Instruments chirurgicaux",
    desc: "Forces, pinces, scalpel : des instruments en acier inoxydable de précision chirurgicale."
  },
  {
    icon: <FaSyringe size={32} />,
    title: "Consommables médicaux",
    desc: "Aiguilles, seringues, gants, masques et tout le nécessaire jetable, conformes aux normes CE."
  },
  {
    icon: <FaBoxOpen size={32} />,
    title: "Laboratoires de prothèse",
    desc: "Matériaux et équipements pour modélisation, usinage et finitions de prothèses dentaires."
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Nos Services</h2>
        <p className="text-gray-600 mb-12">
          De la simple fourniture aux solutions complètes, nous accompagnons vos projets.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: 'spring', stiffness: 80 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg cursor-pointer"
            >
              <div className="text-blue-600 mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
