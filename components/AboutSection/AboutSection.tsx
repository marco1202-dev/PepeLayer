'use client'

import { useState, useEffect } from 'react'

export default function AboutSection() {
  const [scale, setScale] = useState(1)
  const baseWidth = 1920 // Base design width in pixels
  
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
      id="about"
      className="w-full aspect-video bg-cover bg-center bg-no-repeat bg-gray-300 relative"
      style={{
        backgroundImage: "url('/assets/About/About.png')",
        overflow: 'visible', // Allow Feature Summary header to overlap
      }}
    >
      {/* Responsive wrapper container - scales all content proportionally */}
      <div
        style={{
          width: `${baseWidth}px`,
          height: '1080px', // Base height for 16:9 aspect ratio (1920x1080)
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
      <div
        className="absolute hidden md:block"
        style={{
          left: '555px',
          top: '67px', // 1287 - (HeroSection 1080 + HeroBar 140) = 67px relative to AboutSection
          width: '811px',
          height: '621px',
        //   border: '1px solid red',
        }}
      >
        <div
          className="relative"
          style={{
            width: '811px',
            height: '621px',
            aspectRatio: '811/621',
            backgroundImage: "url('/assets/About/Paper.png')",
            backgroundPosition: '0px -101px',
            backgroundSize: '100% 130.596%',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div
            className="absolute flex flex-col justify-center items-center"
            style={{
              left: '15px', // (811 - 781) / 2 = 15px to center horizontally
              top: '88px', // (621 - 497) / 2 = 62px to center vertically
              width: '781px',
              height: '497px',
              padding: '37px 10px',
              gap: '30px',
            //   border: '1px solid blue',
            }}
          >
            <h2
              style={{
                color: '#3F3431',
                WebkitTextFillColor: '#3F3431',
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '48px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              About PepeLayer
            </h2>
            <p
              style={{
                width: '601px',
                height: '207px',
                flexShrink: 0,
                color: '#524340',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              PepeLayer is an Ethereum Layer 2 focused on efficient on-chain coordination. It inherits Ethereum security while reducing execution costs and increasing throughput. The native token aligns contributors, liquidity and participation through shared incentives. Value generated in the network cycles back to those who strengthen it, ensuring that contribution drives growth and influence.
            </p>
          </div>
          {/* Buttons positioned absolutely relative to Paper container, not affecting text layout */}
          <button
            className="absolute hidden md:flex justify-center items-center"
            style={{
              left: '240.97px', // 795.97 - 555 = 240.97px relative to Paper container
              top: '429.54px', // 1716.54 - 1220 - 67 = 429.54px relative to Paper container
              width: '143px',
              height: '28px',
              padding: '10px',
              gap: '10px',
              borderRadius: '6px',
              background: 'linear-gradient(180deg, #FFD700 10.16%, #F2A600 50.03%)',
              boxShadow: '0 2px 2px 0 rgba(255, 255, 255, 0.40) inset, 0 5px 8px 0 rgba(0, 0, 0, 0.25)',
              border: 'none',
              cursor: 'pointer',
            }}
            type="button"
          >
            <span
              style={{
                width: '122px',
                height: '24px',
                flexShrink: 0,
                color: '#524340',
                fontFeatureSettings: "'liga' off, 'clig' off",
                textShadow: '0 1px 1px rgba(63, 52, 49, 0.50)',
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              WHITEPAPER
            </span>
          </button>
          <button
            className="absolute hidden md:flex justify-center items-center"
            style={{
              left: '420.97px', // 975.97 - 555 = 420.97px relative to Paper container
              top: '431.54px', // 1718.54 - 1220 - 67 = 431.54px relative to Paper container
              width: '143px',
              height: '28px',
              padding: '10px',
              gap: '10px',
              borderRadius: '6px',
              background: 'linear-gradient(180deg, #FFD700 10.16%, #F2A600 50.03%)',
              boxShadow: '0 2px 2px 0 rgba(255, 255, 255, 0.40) inset, 0 5px 8px 0 rgba(0, 0, 0, 0.25)',
              border: 'none',
              cursor: 'pointer',
            }}
            type="button"
          >
            <span
              style={{
                width: '122px',
                height: '24px',
                flexShrink: 0,
                color: '#524340',
                fontFeatureSettings: "'liga' off, 'clig' off",
                textShadow: '0 1px 1px rgba(63, 52, 49, 0.50)',
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              BUY NOW
            </span>
          </button>
        </div>
      </div>
      </div>
      {/* End of responsive wrapper */}
    </section>
  )
}

