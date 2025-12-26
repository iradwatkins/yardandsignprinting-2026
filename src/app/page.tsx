export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #166534 0%, #14532d 50%, #052e16 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>
          <span style={{ color: '#86efac' }}>Yard &</span> Sign Printing
        </h1>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#products" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Products</a>
          <a href="#pricing" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Pricing</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '5rem 2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700, lineHeight: 1.1 }}>
          Custom Yard Signs<br />
          <span style={{ color: '#86efac' }}>Starting at $8.99</span>
        </h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Durable corrugated plastic yard signs for real estate, political campaigns,
          events, and business promotions. H-stakes included.
        </p>
        <a href="#products" style={{
          background: '#86efac',
          color: '#052e16',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.1rem'
        }}>
          Shop Yard Signs
        </a>
      </section>

      {/* Use Cases */}
      <section style={{
        padding: '3rem 2rem',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: '🏠', label: 'Real Estate' },
            { icon: '🗳️', label: 'Political' },
            { icon: '🎉', label: 'Events' },
            { icon: '🏪', label: 'Business' },
            { icon: '⚽', label: 'Sports' },
            { icon: '🚧', label: 'Construction' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2rem' }}>{item.icon}</span>
              <div style={{ marginTop: '0.5rem', opacity: 0.9, fontSize: '0.9rem' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{
        padding: '4rem 2rem'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Popular Sizes</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { size: '12x18"', price: '$8.99', note: 'Small, visible from 25ft' },
            { size: '18x24"', price: '$12.99', note: 'Most popular size' },
            { size: '24x36"', price: '$24.99', note: 'High visibility' },
            { size: '24x48"', price: '$34.99', note: 'Maximum impact' },
          ].map((product, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '1.5rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{product.size}</h4>
              <p style={{ opacity: 0.6, margin: '0.25rem 0', fontSize: '0.85rem' }}>{product.note}</p>
              <div style={{ fontSize: '1.75rem', fontWeight: 700, color: '#86efac', marginTop: '0.75rem' }}>{product.price}</div>
              <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>H-stake included</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Why Choose Us?</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Double-Sided', desc: 'Visible from both directions' },
            { title: 'Weather Resistant', desc: '4mm corrugated plastic' },
            { title: 'H-Stakes Included', desc: 'Wire stakes with every order' },
            { title: 'Fast Turnaround', desc: '2-3 day production' },
          ].map((feature, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <h4 style={{ color: '#86efac', marginBottom: '0.5rem' }}>{feature.title}</h4>
              <p style={{ opacity: 0.7, margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Order Today</h3>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          Bulk pricing available for 25+ signs.
        </p>
        <a href="mailto:orders@yardandsignprinting.com" style={{
          color: '#86efac',
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>
          orders@yardandsignprinting.com
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        opacity: 0.6
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Yard & Sign Printing. All rights reserved.</p>
      </footer>
    </main>
  )
}
