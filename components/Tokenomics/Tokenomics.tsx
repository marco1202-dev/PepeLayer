'use client'

import { useState, useEffect } from 'react'

export default function Tokenomics() {
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
      id="tokenomics"
      className="w-full bg-cover bg-center bg-no-repeat bg-gray-300 relative overflow-hidden"
      style={{
        aspectRatio: '1919/1080',
        backgroundImage: "url('/assets/Token/TOKENOMICS.png')",
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
      {/* Content section - spans across FeatureSummary and Tokenomics sections */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '662px',
          top: '-34px', // 3318 - 3380 = -62px (Y 3318 from page, Tokenomics starts at ~3380px)
          width: '605px',
          height: '1077px',
          // border: '1px solid red'
        }}
      >
        {/* Header title section */}
        <div
          className="flex flex-col justify-center items-center hidden md:flex"
          style={{
            width: '605px',
            height: '289px',
            padding: '10px',
            gap: '59px',
            // border: '1px solid blue',
          }}
        >
          <h2
            style={{
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '96px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '40px',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            TOKENOMICS
          </h2>
          <p
            style={{
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              margin: 0,
            }}
          >
            The Economy Of The Empire
          </p>
        </div>
        {/* Donut chart section */}
        <div
          className="absolute hidden md:block"
          style={{
            left: '141px', // 803 - 662 = 141px (relative to content div)
            top: '533px', // 3851 - 3318 = 533px (relative to content div)
            width: '310px',
            height: '300px',
          }}
        >
          <img
            src="/assets/Token/Donut chart.png"
            alt="Donut chart"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        {/* Group Tokenomic section */}
        <div
          className="absolute hidden md:block"
          style={{
            left: '91px', // 753 - 662 = 91px (relative to content div)
            top: '833px', // 4151 - 3318 = 833px (relative to content div)
            width: '407px',
            height: '244px',
          }}
        >
          <img
            src="/assets/Token/Group Tokenomics.png"
            alt="Group Tokenomics"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      </div>
      {/* End of responsive wrapper */}
    </section>
  )
}

