'use client'

import { useState, useEffect } from 'react'

export default function HeroBar() {
  const [scale, setScale] = useState(1)
  const baseWidth = 1920 // Base design width in pixels
  const baseHeight = 140 // Base height for desktop

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth
      // Scale based on viewport width, maintaining aspect ratio
      const newScale = Math.min(viewportWidth / baseWidth, 1)
      setScale(newScale)
    }
    
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return (
    <section 
      className="w-full overflow-hidden flex items-center justify-center"
      style={{
        height: `${baseHeight * scale}px`,
        border: `${4 * scale}px solid #695455`,
        borderColor: '#695455',
        backgroundColor: '#928D86',
      }}
    >
      <div
        className="hero-bar-scroll"
        style={{
          width: 'fit-content',
          height: `${82 * scale}px`,
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        <div
          className="inline-flex items-center"
          style={{
            padding: `${4 * scale}px ${31.861 * scale}px 0 0`,
            gap: `${3.398 * scale}px`,
          }}
        >
          <span
            style={{
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: `${64 * scale}px`,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Not for one frog to reach the moon, but for all frogs to rise
          </span>
          <div
            style={{
              width: `${59.74 * scale}px`,
              height: `${60 * scale}px`,
              backgroundImage: "url('/assets/About/Herobarlogo.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
        {/* Duplicate for seamless loop */}
        <div
          className="inline-flex items-center"
          style={{
            padding: `${4 * scale}px ${31.861 * scale}px 0 0`,
            gap: `${3.398 * scale}px`,
          }}
        >
          <span
            style={{
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: `${64 * scale}px`,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Not for one frog to reach the moon, but for all frogs to rise
          </span>
          <div
            style={{
              width: `${59.74 * scale}px`,
              height: `${60 * scale}px`,
              backgroundImage: "url('/assets/About/Herobarlogo.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </div>
    </section>
  )
}

