// src/components/Contact.tsx
'use client'

import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 grid gap-12 lg:grid-cols-2">
        {/* Formulaire */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Contactez-nous</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
            />
            <textarea
              placeholder="Votre message"
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Envoyer le message
            </button>
          </form>
        </div>

        {/* Coordonnées & carte */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800">Nos coordonnées</h3>
          <div className="flex items-center gap-3 text-gray-600">
            <FaMapMarkerAlt className="text-blue-600" />
            <span>12 Rue de la Santé, 75013 Paris, France</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <FaPhoneAlt className="text-blue-600" />
            <a href="tel:+33123456789" className="hover:underline">+33 1 23 45 67 89</a>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:contact@dentalpro.fr" className="hover:underline">contact@dentalpro.fr</a>
          </div>

          {/* Placeholder pour carte */}
          <div className="mt-6 w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            Carte Google Maps ici
          </div>
        </div>
      </div>
    </section>
  )
}
