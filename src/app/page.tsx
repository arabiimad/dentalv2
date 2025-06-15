// src/app/page.tsx
import dynamic from 'next/dynamic'
import Loader  from '@/components/Loader'

// on charge Hero « à la volée »
const Hero     = dynamic(() => import('@/components/Hero'),     { loading: () => <Loader/> })
const Services = dynamic(() => import('@/components/Services'), { loading: () => <Loader/> })
const About    = dynamic(() => import('@/components/About'),    { loading: () => <Loader/> })
const Contact  = dynamic(() => import('@/components/Contact'),  { loading: () => <Loader/> })

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  )
}
