// src/components/About.tsx
'use client'

import React from 'react'
import { FaBullseye, FaHandsHelping, FaClock } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6">À propos de DentalPro</h2>
        <p className="text-gray-600 mb-12">
          Depuis plus de 20 ans, DentalPro s&apos;engage à fournir du matériel innovant et fiable
          pour les professionnels de santé dentaire.
        </p>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-200 pl-8 space-y-10 mb-12">
          <div className="relative">
            <div className="absolute -left-4 top-0 bg-blue-600 text-white rounded-full p-2">
              <FaClock />
            </div>
            <time className="text-sm text-gray-500">2003</time>
            <p className="mt-2 text-gray-700">Création de l’entreprise par le Dr. Martin Dupont.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-0 bg-blue-600 text-white rounded-full p-2">
              <FaHandsHelping />
            </div>
            <time className="text-sm text-gray-500">2012</time>
            <p className="mt-2 text-gray-700">Ouverture du premier centre logistique en Île-de-France.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-4 top-0 bg-blue-600 text-white rounded-full p-2">
              <FaBullseye />
            </div>
            <time className="text-sm text-gray-500">2025</time>
            <p className="mt-2 text-gray-700">Lancement de notre e-commerce & solutions 360°.</p>
          </div>
        </div>

        {/* Mission & valeurs */}
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { icon: <FaBullseye size={28} />, title: 'Qualité', text: 'Produits labellisés CE & garanties.' },
            { icon: <FaHandsHelping size={28} />, title: 'Soutien', text: 'Assistance technique et service client 24/7.' },
            { icon: <FaClock size={28} />, title: 'Rapidité', text: 'Livraison express en 48h partout en France.' }
          ].map((v, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow">
              <div className="text-blue-600 mb-3">{v.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-1">{v.title}</h4>
              <p className="text-gray-600">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
