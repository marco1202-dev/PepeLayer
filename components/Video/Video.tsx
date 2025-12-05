export default function Video() {
  return (
    <section 
      className="w-full bg-cover bg-center bg-no-repeat bg-gray-300 relative"
      style={{
        width: '1905px',
        height: '1566px',
        aspectRatio: '970/783',
        backgroundImage: "url('/assets/video.gif')",
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Shield 1 - positioned between FAQ and Video sections */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '128px', // X -128 relative to page, Video section starts at X -10, so -128 - (-10) = -118px
          top: '-300px', // Y 7522 relative to page, Video section starts at Y 7848, so 7522 - 7848 = -326px
          width: '397px',
          height: '654px',
          transform: 'rotate(-90deg)',
          aspectRatio: '397/654',
          backgroundImage: "url('/assets/FAQ/shield.png')",
          backgroundPosition: '0px -610.085px',
          backgroundSize: '398.406% 241.984%',
          backgroundRepeat: 'no-repeat',
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
        }}
      />
      
      {/* Shield 5 - positioned between FAQ and Video sections */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '1378px', // X 1708 relative to page, Video section starts at X -10, so 1708 - (-10) = 1718px
          top: '-300px', // Y 7522 relative to page, Video section starts at Y 7848, so 7522 - 7848 = -326px
          width: '397px',
          height: '654px',
          transform: 'rotate(270deg)',
          aspectRatio: '397/654',
          backgroundImage: "url('/assets/FAQ/shield.png')",
          backgroundPosition: '0px -40.085px',
          backgroundSize: '398.406% 241.984%',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </section>
  )
}

