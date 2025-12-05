'use client'

import { useState, useEffect } from 'react'

export default function Video() {
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
      className="w-full bg-cover bg-center bg-no-repeat bg-gray-300 relative overflow-visible"
      style={{
        aspectRatio: '970/783',
        backgroundImage: "url('/assets/video.gif')",
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Responsive wrapper container - scales all content proportionally */}
      <div
        style={{
          width: `${baseWidth}px`,
          height: '1566px', // Base height for the video section
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
      {/* Shield 1 - positioned between FAQ and Video sections */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '130px', // Increased from 128px to reduce blank space at the right end
          top: '-300px', // Y 7522 relative to page, Video section starts at Y 7848, so 7522 - 7848 = -326px
          width: '397px',
          height: '654px',
          transform: 'rotate(-90deg)',
          aspectRatio: '397/654',
          backgroundImage: "url('/assets/FAQ/shield.png')",
          backgroundPosition: '0px -605.085px',
          backgroundSize: '398.406% 241.984%',
          backgroundRepeat: 'no-repeat',
          zIndex: 10,
        }}
      />
      
      {/* Shield 2 - positioned between FAQ and Video sections */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '382px', // X 331 relative to page, Video section starts at X -10, so 331 - (-10) = 341px
          top: '-300px', // Y 7522 relative to page, Video section starts at Y 7848, so 7522 - 7848 = -326px
          width: '397px',
          height: '654px',
          transform: 'rotate(-90deg)',
          aspectRatio: '397/654',
          backgroundImage: "url('/assets/FAQ/shield.png')",
          backgroundPosition: '0px -410.085px',
          backgroundSize: '398.406% 241.984%',
          backgroundRepeat: 'no-repeat',
          zIndex: 10,
        }}
      />
      
      {/* Shield 3 - positioned between FAQ and Video sections */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '845px', // X 790 relative to page, Video section starts at X -10, so 790 - (-10) = 800px
          top: '-300px', // Y 7522 relative to page, Video section starts at Y 7848, so 7522 - 7848 = -326px
          width: '397px',
          height: '654px',
          transform: 'rotate(-90deg)',
          aspectRatio: '397/654',
          backgroundImage: "url('/assets/FAQ/shield.png')",
          backgroundPosition: '0px -410.085px',
          backgroundSize: '398.406% 241.984%',
          backgroundRepeat: 'no-repeat',
          zIndex: 10,
        }}
      />
      
      {/* Shield 4 - positioned between FAQ and Video sections */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '1299px', // X 1249 relative to page, Video section starts at X -10, so 1249 - (-10) = 1259px
          top: '-300px', // Y 7522 relative to page, Video section starts at Y 7848, so 7522 - 7848 = -326px
          width: '397px',
          height: '654px',
          transform: 'rotate(-90deg)',
          aspectRatio: '397/654',
          backgroundImage: "url('/assets/FAQ/shield.png')",
          backgroundPosition: '0px -410.085px',
          backgroundSize: '398.406% 241.984%',
          backgroundRepeat: 'no-repeat',
          zIndex: 10,
        }}
      />
      
      {/* Shield 5 - positioned between FAQ and Video sections */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '1395px', // X 1708 relative to page, Video section starts at X -10, so 1708 - (-10) = 1718px
          top: '-300px', // Y 7522 relative to page, Video section starts at Y 7848, so 7522 - 7848 = -326px
          width: '397px',
          height: '654px',
          transform: 'rotate(270deg)',
          aspectRatio: '397/654',
          backgroundImage: "url('/assets/FAQ/shield.png')",
          backgroundPosition: '0px -40.085px',
          backgroundSize: '398.406% 241.984%',
          backgroundRepeat: 'no-repeat',
          zIndex: 10,
        }}
      />
      </div>
      {/* End of responsive wrapper */}
    </section>
  )
}

