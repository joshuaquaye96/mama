import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './assets/MB logo (1).png'
import VCB from './assets/VCB.jpg'

export default function App(){
  const [faqOpen, setFaqOpen] = useState(null)
  const faqs = [
    { q: 'When will I get my Mama Ba Bear?', a: 'Pre-orders ship starting December 2025.' },
    { q: 'Do you ship internationally?', a: 'Yes! We ship worldwide. Delivery costs are calculated at checkout.' },
    { q: 'What if the product delays?', a: 'We’ll keep you updated monthly. If there’s a delay beyond 90 days, you can request a full refund.' },
    { q: 'How do I pay?', a: 'We accept Mobile Money (MTN, Vodafone, AirtelTigo), Debit/Credit Cards, and PayPal.' }
  ]

  return (
    <div className="min-h-screen font-body text-[#353535]">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center gap-6 p-4">
          <img src={Logo} alt="Mama Ba Bear" className="w-28" />
          <div>
            <h1 className="text-xl font-heading text-deepblue">Mama Ba Bear</h1>
            <p className="text-sm text-gray-600">Comfort woven with care</p>
          </div>
          <div className="ml-auto flex gap-3">
            <a href="#" className="text-sm text-deepblue">Instagram</a>
            <a href="#" className="text-sm text-deepblue">Facebook</a>
          </div>
        </div>
      </header>

      <main>
        <section className="text-center py-16 bg-gradient-to-b from-teal to-skyblue text-white relative overflow-hidden">
          <motion.h2 className="text-3xl font-heading mb-4">✨ Meet Mama Ba Bear, The First Ghanaian Multilingual Teddy Bear.</motion.h2>
          <p className="max-w-2xl mx-auto">Bringing love, culture, and lullabies to your child’s bedtime. Sings in Twi, Ewe, Ga, and English — connecting children everywhere with their roots.</p>
          <img src={VCB} alt="hero" className="mx-auto mt-8 w-64 rounded-lg shadow-lg"/>
        </section>

        <section className="max-w-6xl mx-auto py-12 px-6">
          <h3 className="text-2xl font-heading text-deepblue text-center mb-6">About Us</h3>
          <p className="text-center max-w-3xl mx-auto">Mama Ba Bear is the first multilingual singing teddy bear from Ghana, lovingly created by Zigny to nurture comfort, connection, and culture in every child’s heart. She sings soothing lullabies in Twi, Ewe, Ga, and English — carrying the warmth of a mother’s voice and the heartbeat of our culture.</p>
        </section>

        <section className="bg-white py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center px-6">
            <div>
              <h4 className="text-xl font-heading text-deepblue mb-3">Mission</h4>
              <p>To promote cultural inclusivity, nurture early childhood learning, and offer emotional comfort through our multilingual teddy bear.</p>
            </div>
            <div>
              <h4 className="text-xl font-heading text-deepblue mb-3">Vision</h4>
              <p>To become a beloved symbol of love, learning, and cultural pride — connecting families everywhere through language, heritage, and the comforting voice of home.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-brightyellow text-center">
          <h4 className="text-2xl font-heading text-deepblue mb-4">📦 How Pre-Order Works</h4>
          <ol className="max-w-3xl mx-auto text-left list-decimal list-inside space-y-2">
            <li>Reserve your Mama Ba Bear today with a secure 10% deposit and get a discount.</li>
            <li>Reserve your Mama Ba Bear without a deposit and pay the full amount.</li>
          </ol>
          <p className="mt-4 font-semibold">Refund Policy: If production delays beyond 90 days, you’ll receive a full refund – no stress.</p>
          <div className="mt-6">
            <button className="px-6 py-3 rounded-full bg-deepblue text-white">Pre-Order Now</button>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-12 px-6">
          <h4 className="text-2xl font-heading text-deepblue text-center mb-6">FAQs</h4>
          {faqs.map((f, i)=>(
            <div key={i} className="mb-4 border-b pb-4">
              <button className="w-full text-left font-semibold flex justify-between" onClick={()=>setFaqOpen(faqOpen===i?null:i)}>
                {f.q} <span>{faqOpen===i?'-':'+'}</span>
              </button>
              {faqOpen===i && <p className="mt-2">{f.a}</p>}
            </div>
          ))}
        </section>
      </main>

      <footer className="bg-deepblue text-white py-6 text-center">
        <p className="font-heading">Follow Us</p>
        <p className="mt-2">Email: info@mamababear.com | Contact: +233 55 000 0000</p>
        <p className="mt-2 text-sm">© 2025 Mama Ba Bear. Proudly African. Made with love.</p>
      </footer>
    </div>
  )
}