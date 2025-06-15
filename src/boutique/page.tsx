'use client'

import Link from 'next/link'
import { products } from '@/data/products'

export default function BoutiquePage() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-8">Notre Boutique</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <div key={p.id} className="border rounded-lg overflow-hidden shadow-sm">
            <img src={p.image} alt={p.name} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <p className="mt-2 text-lg text-blue-600">{p.price.toFixed(2)} €</p>
              <Link href={`/boutique/${p.id}`}>
                <a className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Voir le produit
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
