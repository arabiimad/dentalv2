// src/app/boutique/[id]/page.tsx
import { products } from '@/data/products'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface Props { params: { id: string } }

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.id === params.id)
  if (!product) return notFound()

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <Link href="/boutique">
        <a className="text-blue-600 hover:underline">&larr; Retour à la boutique</a>
      </Link>
      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-auto rounded"/>
        <div>
          <h1 className="text-3xl font-extrabold">{product.name}</h1>
          <p className="mt-4 text-2xl text-blue-600 font-semibold">
            {product.price.toFixed(2)} €
          </p>
          <p className="mt-6 text-gray-700">{product.description}</p>
          <button
            className="mt-8 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </section>
  )
}
