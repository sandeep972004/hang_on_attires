import React, { useRef } from 'react'

const PRODUCTS = [
  { id: 1, name: 'Red Summer Dress', price: '49.99', image: 'https://images.unsplash.com/photo-1520975924741-6ef3d5c6a3a8?auto=format&fit=crop&w=1200&q=60' },
  { id: 2, name: 'Blue Casual Dress', price: '39.99', image: 'https://images.unsplash.com/photo-1520975911010-0d5f6f2f4b4b?auto=format&fit=crop&w=1200&q=60' },
  { id: 3, name: 'Floral Maxi', price: '59.99', image: 'https://images.unsplash.com/photo-1503342452485-86f7f03e7b76?auto=format&fit=crop&w=1200&q=60' },
  { id: 4, name: 'Green Wrap Dress', price: '45.00', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=60' },
  { id: 5, name: 'Yellow Sundress', price: '34.50', image: 'https://images.unsplash.com/photo-1495121605193-b116b5b09a6d?auto=format&fit=crop&w=1200&q=60' },
  { id: 6, name: 'Elegant Black Dress', price: '79.99', image: 'https://images.unsplash.com/photo-1541529086526-c9b7f2b4b0e5?auto=format&fit=crop&w=1200&q=60' }
]

export default function Home() {
  const dressesRef = useRef(null)

  const scrollToDresses = () => {
    if (dressesRef.current) dressesRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content container">
            <h2 className="hero-title">Welcome to HangOn Attires</h2>
            <p className="hero-sub">Discover stylish outfits curated with love and crafted for your elegance.</p>
            <button className="btn primary" onClick={scrollToDresses}>Shop Now</button>
          </div>
        </div>
      </section>

      <section className="home container" ref={dressesRef} id="dresses">
        <h2 className="section-title">Featured Dresses</h2>
        <div className="grid">
          {PRODUCTS.map((p) => (
            <article className="card" key={p.id}>
              <div className="card-media">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="card-body">
                <h3>{p.name}</h3>
                <p className="price">${p.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
