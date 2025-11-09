'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [selectedFlavor, setSelectedFlavor] = useState('mint')

  const flavors = [
    { id: 'mint', name: 'Original Mint', color: '#5FD4C8', description: 'Clean, refreshing, pure' },
    { id: 'lemon', name: 'Lemon Lime', color: '#C8E86E', description: 'Crisp and energizing' },
    { id: 'berry', name: 'Wild Berry', color: '#D946A6', description: 'Bold and vibrant' },
    { id: 'mango', name: 'Tropical Mango', color: '#FFBD3F', description: 'Sweet and smooth' },
    { id: 'cola', name: 'Classic Cola', color: '#8B4513', description: 'Timeless and rich' },
    { id: 'watermelon', name: 'Fresh Watermelon', color: '#FF6B6B', description: 'Light and juicy' }
  ]

  const currentFlavor = flavors.find(f => f.id === selectedFlavor) || flavors[0]

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <svg className={styles.logo} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.2"/>
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.4"/>
              <path
                d="M 100 40 Q 120 60, 100 80 Q 80 60, 100 40 Z M 100 80 L 100 160"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.twistIcon}
              />
              <text x="100" y="190" textAnchor="middle" fontSize="24" fontWeight="600" fill="currentColor" fontFamily="Poppins">
                TwistUp
              </text>
            </svg>
          </div>

          <h1 className={styles.headline}>Fresh Flavor,<br />One Twist Away</h1>
          <p className={styles.tagline}>Pure ingredients. Simple innovation. Infinite refreshment.</p>

          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn} style={{background: currentFlavor.color}}>
              Explore Flavors
            </button>
            <button className={styles.secondaryBtn}>
              Our Story
            </button>
          </div>
        </div>

        <div className={styles.bottlePreview} style={{
          background: `linear-gradient(135deg, ${currentFlavor.color}15, ${currentFlavor.color}30)`
        }}>
          <div className={styles.bottle}>
            <div className={styles.bottleCap} style={{background: currentFlavor.color}}></div>
            <div className={styles.bottleBody}>
              <div className={styles.bottleLabel}>
                <span className={styles.labelLogo}>TwistUp</span>
                <span className={styles.labelFlavor}>{currentFlavor.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className={styles.values}>
        <div className={styles.valueCard}>
          <div className={styles.valueIcon}>💧</div>
          <h3>Purity</h3>
          <p>Natural ingredients, nothing artificial</p>
        </div>
        <div className={styles.valueCard}>
          <div className={styles.valueIcon}>🔄</div>
          <h3>Innovation</h3>
          <p>Fresh flavor unlocked with every twist</p>
        </div>
        <div className={styles.valueCard}>
          <div className={styles.valueIcon}>⚡</div>
          <h3>Energy</h3>
          <p>Clean refreshment that moves you forward</p>
        </div>
      </section>

      {/* Flavor Gallery */}
      <section className={styles.flavors}>
        <h2 className={styles.sectionTitle}>Explore Our Flavors</h2>
        <p className={styles.sectionSubtitle}>Every bottle, a new sensation. Every twist, a fresh start.</p>

        <div className={styles.flavorGrid}>
          {flavors.map(flavor => (
            <div
              key={flavor.id}
              className={`${styles.flavorCard} ${selectedFlavor === flavor.id ? styles.active : ''}`}
              onClick={() => setSelectedFlavor(flavor.id)}
              style={{
                borderColor: selectedFlavor === flavor.id ? flavor.color : 'transparent',
              }}
            >
              <div className={styles.flavorCircle} style={{background: flavor.color}}></div>
              <h4>{flavor.name}</h4>
              <p>{flavor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className={styles.story}>
        <div className={styles.storyContent}>
          <h2>Refreshment, Reimagined</h2>
          <p>
            TwistUp isn't just a beverage — it's a moment of clarity in a busy day.
            Our twist-cap technology preserves freshness until the second you're ready
            to experience it. Clean design. Pure taste. Modern simplicity.
          </p>
          <p>
            Each flavor is carefully crafted to balance refreshment with subtle energy,
            giving you exactly what you need, nothing you don't.
          </p>
        </div>
        <div className={styles.brandElements}>
          <div className={styles.colorPalette}>
            <div className={styles.paletteTitle}>Core Palette</div>
            <div className={styles.colorRow}>
              <div className={styles.colorSwatch} style={{background: '#F8F9FA'}} title="Off-White"></div>
              <div className={styles.colorSwatch} style={{background: '#E4E8EB'}} title="Mist Gray"></div>
              <div className={styles.colorSwatch} style={{background: '#2D3436'}} title="Charcoal"></div>
              <div className={styles.colorSwatch} style={{background: '#5FD4C8'}} title="Mint Aqua"></div>
              <div className={styles.colorSwatch} style={{background: '#FF9F66'}} title="Tangerine"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Typography System */}
      <section className={styles.typography}>
        <h2 className={styles.sectionTitle}>Design System</h2>
        <div className={styles.typographyGrid}>
          <div className={styles.typeExample}>
            <div className={styles.typeLabel}>Primary — Poppins</div>
            <div className={styles.typeDisplay} style={{fontFamily: 'Poppins', fontSize: '48px', fontWeight: 600}}>
              TwistUp
            </div>
          </div>
          <div className={styles.typeExample}>
            <div className={styles.typeLabel}>Body — Inter</div>
            <div className={styles.typeBody} style={{fontFamily: 'Inter', fontSize: '18px'}}>
              Clean, readable, and modern. Perfect for long-form content and product descriptions.
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="3" fill="none" opacity="0.3"/>
              <path
                d="M 100 40 Q 120 60, 100 80 Q 80 60, 100 40 Z M 100 80 L 100 160"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span>TwistUp</span>
          </div>
          <p className={styles.footerTagline}>Fresh Flavor, One Twist Away</p>
          <p className={styles.footerCopy}>© 2025 TwistUp. A brand identity concept.</p>
        </div>
      </footer>
    </main>
  )
}
