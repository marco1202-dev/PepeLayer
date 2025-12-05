'use client'

import { useState, useEffect } from 'react'
import NavbarMenu from '@/components/Navbar'

export default function HeroSection() {
  const imagePath = '/assets/Hero/HeroBackground.png'
  const [isTranslatorOpen, setIsTranslatorOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
      id="home"
      className="w-full bg-cover bg-center bg-no-repeat bg-gray-300 aspect-[152/215] md:aspect-video relative overflow-hidden"
      style={{
        backgroundImage: `url("${imagePath}")`,
      }}
    >
      {/* Mobile Navbar - shown only on mobile, outside scaling wrapper */}
      <nav 
        className="flex md:hidden absolute left-1/2 -translate-x-1/2 justify-center items-center"
        style={{
          top: '10px',
          width: '362px',
          height: '58px',
          padding: '10px 17px',
          gap: '56px',
          borderRadius: '16px',
          border: '3px solid #928D86',
          background: '#4C4C4C',
          boxShadow: '-1px 2px 20px 0 rgba(0, 0, 0, 0.35) inset',
          zIndex: 10,
        }}
      >
        {/* Maskot PEPELAYER Logo */}
        <div
          style={{
            width: '35px',
            height: '35px',
            flexShrink: 0,
            backgroundImage: "url('/assets/Navbar/Maskot PEPELAYER.png')",
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* PepeLayer Logo */}
        <div
          style={{
            width: '160px',
            height: '69px',
            flexShrink: 0,
            aspectRatio: '160/69',
            backgroundImage: "url('/assets/Navbar/PepeLayer.png')",
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Hamburger Menu Icon */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            width: '35px',
            height: '35px',
            flexShrink: 0,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <img
            src="/assets/Navbar/Hamburger.svg"
            alt="Menu"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </button>
      </nav>
      
      {/* Mobile Menu - slides in from right */}
      <div
        className="fixed md:hidden top-0 right-0 z-50"
        style={{
          width: isMobileMenuOpen ? '382px' : '0px',
          height: '653px',
          borderRadius: '16px',
          border: '3px solid #928D86',
          background: '#4C4C4C',
          boxShadow: '3px 1px 25px 0 rgba(0, 0, 0, 0.65) inset',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-in-out, width 0.3s ease-in-out',
          overflow: 'hidden',
        }}
      >
        {/* Close navigation Section */}
        <div
          style={{
            display: 'inline-flex',
            padding: '10px 10px 10px 4px',
            alignItems: 'center',
            gap: '114px',
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '10px',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {/* Maskot PEPELAYER Logo */}
            <div
              style={{
                width: '60px',
                height: '60px',
                backgroundImage: "url('/assets/Navbar/Maskot PEPELAYER.png')",
                backgroundPosition: '50%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
            
            {/* PepeLayer Logo */}
            <div
              style={{
                width: '128px',
                height: '69px',
                aspectRatio: '128/69',
                backgroundImage: "url('/assets/Navbar/PepeLayer.png')",
                backgroundPosition: '-18.52px 0px',
                backgroundSize: '125.812% 100%',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
          
          {/* Close button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              display: 'flex',
              width: '40px',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <img
              src="/assets/Navbar/close.svg"
              alt="Close"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </button>
        </div>
      </div>
      
      {/* Responsive wrapper container - scales all content proportionally (desktop only) */}
      <div
        className="hidden md:block"
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
        <div className="relative z-10 h-full">
          {/* Desktop Navbar - hidden on mobile */}
          <NavbarMenu />
        
        {/* En.svg image - Clickable button */}
        <button
          className="absolute hidden md:flex justify-center items-center"
          type="button"
          onClick={() => setIsTranslatorOpen(!isTranslatorOpen)}
          style={{
            left: '1750px',
            top: '54px',
            width: '50px',
            height: '50px',
            aspectRatio: '1/1',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            zIndex: 20,
            padding: 0,
          }}
        >
          <img
            src="/assets/Hero/En.svg"
            alt="Language"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </button>
        
        {/* Translator section */}
        <div
          className="absolute hidden md:flex"
          style={{
            left: '1692.5px', // Centered on En.svg: 1750px (En.svg left) + 25px (half of En.svg width 50px) - 82.5px (half of translator width 165px) = 1692.5px
            top: '124px', // Positioned directly below En.svg button (54px + 50px = 104px)
            display: 'flex',
            width: '165px',
            maxHeight: isTranslatorOpen ? '232px' : '0px',
            padding: isTranslatorOpen ? '17px 20px' : '0px 20px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '7px',
            borderRadius: '4px',
            border: '2px solid #524340',
            background: '#695455',
            zIndex: 21,
            opacity: isTranslatorOpen ? 1 : 0,
            transform: isTranslatorOpen ? 'translateY(0)' : 'translateY(-10px)',
            transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out, padding 0.3s ease-in-out',
            overflow: 'hidden',
            pointerEvents: isTranslatorOpen ? 'auto' : 'none',
          }}
        >
            {/* Indonesia language option */}
            <div
              style={{
                display: 'flex',
                width: '125px',
                height: '34px',
                padding: '0 5px 0 6px',
                alignItems: 'center',
                cursor: 'pointer',
                gap: '12px',
                flexShrink: 0,
                border: '2px solid #3F3431',
                background: '#524340',
              }}
            >
              {/* ID.svg image */}
              <img
                src="/assets/Hero/ID.svg"
                alt="Indonesia"
                style={{
                  width: '27px',
                  height: '20px',
                  flexShrink: 0,
                  aspectRatio: '27/20',
                }}
              />
              
              {/* Indonesia text */}
              <span
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Indonesia
              </span>
            </div>
            
            {/* Espanyol language option */}
            <div
              style={{
                display: 'flex',
                width: '125px',
                height: '34px',
                padding: '0 5px 0 6px',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                flexShrink: 0,
                border: '2px solid #3F3431',
                background: '#524340',
              }}
            >
              {/* ES.svg image */}
              <img
                src="/assets/Hero/ES.svg"
                alt="Espanyol"
                style={{
                  width: '27px',
                  height: '20px',
                  flexShrink: 0,
                  aspectRatio: '27/20',
                }}
              />
              
              {/* Espanyol text */}
              <span
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Espanyol
              </span>
            </div>
            
            {/* Arab language option */}
            <div
              style={{
                display: 'flex',
                width: '125px',
                height: '34px',
                padding: '0 5px 0 6px',
                cursor: 'pointer',
                alignItems: 'center',
                gap: '12px',
                flexShrink: 0,
                border: '2px solid #3F3431',
                background: '#524340',
              }}
            >
              {/* SA.svg image */}
              <img
                src="/assets/Hero/SA.svg"
                alt="Arab"
                style={{
                  width: '27px',
                  height: '20px',
                  flexShrink: 0,
                  aspectRatio: '27/20',
                }}
              />
              
              {/* Arab text */}
              <span
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Arab
              </span>
            </div>
            
            {/* Japan language option */}
            <div
              style={{
                display: 'flex',
                width: '125px',
                height: '34px',
                padding: '0 5px 0 6px',
                cursor: 'pointer',
                alignItems: 'center',
                gap: '12px',
                flexShrink: 0,
                border: '2px solid #3F3431',
                background: '#524340',
              }}
            >
              {/* JP.svg image */}
              <img
                src="/assets/Hero/JP.svg"
                alt="Japan"
                style={{
                  width: '27px',
                  height: '20px',
                  flexShrink: 0,
                  aspectRatio: '27/20',
                }}
              />
              
              {/* Japan text */}
              <span
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Japan
              </span>
            </div>
            
            {/* English language option */}
            <div
              style={{
                display: 'flex',
                width: '125px',
                height: '34px',
                padding: '0 5px 0 6px',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                flexShrink: 0,
                border: '2px solid #3F3431',
                background: '#524340',
              }}
            >
              {/* ENG.svg image */}
              <img
                src="/assets/Hero/ENG.svg"
                alt="English"
                style={{
                  width: '27px',
                  height: '20px',
                  flexShrink: 0,
                  aspectRatio: '27/20',
                }}
              />
              
              {/* English text */}
              <span
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                English
              </span>
            </div>
          </div>
        
        <div
          className="absolute hidden md:block"
          style={{
            left: '1439px',
            top: '492px',
            width: '139px',
            height: '137px',
            aspectRatio: '139/137',
            backgroundImage: "url('/assets/Hero/helmettt.png')",
            backgroundPosition: '-230.952px -181.429px',
            backgroundSize: '324.675% 328.407%',
            backgroundRepeat: 'no-repeat',
            // backgroundColor: '#d3d3d3', // lightgray fallback
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{
            left: '1394px',
            top: '824px',
            width: '157px',
            height: '196px',
            aspectRatio: '157/196',
            backgroundImage: "url('/assets/Hero/gucci.png')",
            backgroundPosition: '-381.691px -10.437px',
            backgroundSize: '451.467% 361.011%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{
            left: '1473px',
            top: '868px',
            width: '179px',
            height: '194px',
            aspectRatio: '179/194',
            backgroundImage: "url('/assets/Hero/gucci2.png')",
            backgroundPosition: '-173.89px 0px',
            backgroundSize: '346.021% 319.489%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div
          className="absolute hidden md:block"
          style={{
            left: '499px',
            top: '280px',
            width: '959px',
            height: '562px'
          }}
        >
          
          <div
            className="absolute"
            style={{
              left: '497px', // 996 - 499 = 497 (relative to parent container)
              top: '149px', // 429 - 280 = 149 (relative to parent container)
              width: '241px',
              height: '413px',
              aspectRatio: '241/413',
              backgroundImage: "url('/assets/Hero/Hero.png')",
              backgroundPosition: '0px -0.031px',
              backgroundSize: '120.881% 100.015%',
              backgroundRepeat: 'no-repeat',
              // backgroundColor: '#d3d3d3', // lightgray fallback
            }}
          />
          <div
            className="absolute"
            style={{
              left: '345px', // 844 - 499 = 345 (relative to parent container)
              top: '27px', // 307 - 280 = 27 (relative to parent container)
              width: '401px',
              height: '38px',
              aspectRatio: '401/38',
              color: '#FFF',
              WebkitTextFillColor: '#FFF',
              textAlign: 'center',
              fontFeatureSettings: "'liga' off, 'clig' off",
              textShadow: '1px 1px 5px #3F3431',
              WebkitTextStrokeWidth: '2px',
              WebkitTextStrokeColor: '#3F3431',
              fontFamily: 'var(--font-geologica), "Geologica", sans-serif',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            PEPELAYER IS A SIGNAL
          </div>
          <div
            className="absolute"
            style={{
              left: '348px', // 847 - 499 = 348 (relative to parent container)
              top: '81px', // 361 - 280 = 81 (relative to parent container)
              width: '611px',
              height: '58px',
              aspectRatio: '611/58',
              position: 'relative',
            }}
          >
            <span
              className="absolute"
              style={{
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                WebkitTextStrokeWidth: '8px',
                WebkitTextStrokeColor: '#FFEB12',
                WebkitTextFillColor: 'transparent',
                textAlign: 'center',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                pointerEvents: 'none',
              }}
            >
              Identity Becomes Infrastructure
            </span>
            <span
              className="absolute hero-text-fill z-10"
              style={{
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                color: '#6CAF58',
                WebkitTextFillColor: '#6CAF58',
                textAlign: 'center',
                fontFeatureSettings: "'liga' off, 'clig' off",
                // textShadow: '1px 1px 5px #3F3431',
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              Identity Becomes Infrastructure
            </span>
          </div>
          {/* Hero content will go here */}
        </div>
        <div
          className="absolute hidden md:block"
          style={{
            left: '520.86px',
            top: '280px',
            width: '360.821px',
            height: '411px',
          }}
        >
          <img
            src="/assets/Hero/Vector.png"
            alt="Shield"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              fill: '#524340',
              strokeWidth: '10px',
              stroke: '#695455',
              // boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.65) inset',
              filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45))',
            }}
          />
          
        </div>
        
        {/* Buy & Stake button */}
        <button
          className="absolute hidden md:flex"
          type="button"
          style={{
            left: '620.84px',
            top: '528.96px',
            display: 'flex',
            width: '170.837px',
            height: '31.686px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '6px',
            background: 'linear-gradient(180deg, #FFD900 10.16%, #F27900 50.03%)',
            boxShadow: '0 2px 2px 0 rgba(255, 255, 255, 0.40) inset, 0 5px 8px 0 rgba(0, 0, 0, 0.25)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              width: '146px',
              flexShrink: 0,
              color: '#524340',
              textShadow: '0 1px 1px rgba(63, 52, 49, 0.50)',
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '10px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Buy & Stake For 800% Rewards
          </span>
        </button>
        
        {/* BUY $PLR button */}
        <button
          className="absolute hidden md:flex"
          type="button"
          style={{
            left: '620.69px',
            top: '570.32px',
            display: 'flex',
            width: '170.837px',
            height: '31.686px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '6px',
            background: 'linear-gradient(180deg, #FFD700 10.16%, #F2A600 50.03%)',
            boxShadow: '0 2px 2px 0 rgba(255, 255, 255, 0.40) inset, 0 5px 8px 0 rgba(0, 0, 0, 0.25)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span
            style={{
              width: '90px',
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
            BUY $PLR
          </span>
        </button>
        
        {/* Balance section */}
        <div
          className="absolute hidden md:flex"
          style={{
            left: '631px',
            top: '608px',
            display: 'flex',
            width: '136px',
            alignItems: 'flex-end',
          }}
        >
          {/* Balance: text */}
          <span
            style={{
              width: '51px',
              height: '18px',
              flexShrink: 0,
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '13px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Balance: 
          </span>
          
          {/* Vector_logo.png image */}
          <div
            style={{
              width: '23.744px',
              height: '21.099px',
              flexShrink: 0,
              backgroundImage: "url('/assets/Hero/Vector_logo.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* 000000000 text */}
          <span
            style={{
              width: '5px',
              height: '18px',
              flexShrink: 0,
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '13px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            000000000
          </span>
        </div>
        
        {/* Price section */}
        <div
          className="absolute hidden md:inline-flex"
          style={{
            left: '576px',
            top: '321px',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          {/* $PEPELAYER PRICE= text */}
          <span
            style={{
              width: '159px',
              height: '18px',
              color: '#928D86',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            $PEPELAYER PRICE=
          </span>
          
          {/* $0.000 text */}
          <span
            style={{
              width: '49px',
              height: '18px',
              aspectRatio: '49/18',
              color: '#928D86',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            $0.000
          </span>
        </div>
        
        {/* Input section container */}
        <div
          className="absolute hidden md:block"
          style={{
            left: '561.01px',
            top: '339.08px',
            width: '285.517px',
            height: '32.954px',
          }}
        >
          {/* Inner section with border and background */}
          <div
            style={{
              width: '285.517px',
              height: '32.954px',
              borderRadius: '6px',
              border: '3px solid #695455',
              background: '#928D86',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* Flex container with text */}
            <div
              style={{
                display: 'flex',
                width: '236.17px',
                height: '21.943px',
                padding: '10px 30px 10px 10px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '16px',
                border: '2px solid #524340',
                background: '#695455',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              }}
            >
              {/* Until next price increase text */}
              <span
                style={{
                  color: '#3F3431',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '15px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Until next price increase
              </span>
            </div>
          </div>
        </div>
        
        {/* Vector_logo image */}
        <div
          className="absolute hidden md:block"
          style={{
            left: '797.36px',
            top: '341.61px',
            width: '30.867px',
            height: '27.85px',
            backgroundImage: "url('/assets/Hero/Vector_logo.png')",
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Next Price section */}
        <div
          className="absolute hidden md:inline-flex"
          style={{
            left: '575.75px',
            top: '380.43px',
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '3px',
            zIndex: 10,
          }}
        >
          {/* Next Price: text */}
          <span
            style={{
              width: '82px',
              height: '15px',
              color: '#928D86',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Next Price:
          </span>
        </div>
        
        {/* Price value section */}
        <div
          className="absolute hidden md:flex"
          style={{
            left: '657.75px', // Positioned after "Next Price:" text (575.75 + 82px = 657.75px)
            top: '380.43px',
            display: 'flex',
            width: '179.291px',
            height: '19.411px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '238px',
            borderRadius: '8px',
            border: '2px solid #695455',
            background: '#928D86',
            boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            zIndex: 5,
          }}
        >
          {/* $0.00 text */}
          <span
            style={{
              color: '#524340',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            $0.00
          </span>
        </div>
        
        {/* PAY WITH ETH section */}
        <div
          className="absolute hidden md:block"
          style={{
            left: '561.01px',
            top: '404.06px',
            width: '285.516px',
            height: '50.68px',
          }}
        >
          {/* PAY WITH ETH text */}
          <span
            style={{
              width: '90.465px',
              height: '10.605px',
              color: '#928D86',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            PAY WITH ETH
          </span>
        </div>
        
        {/* Input section */}
        <div
          className="absolute hidden md:flex"
          style={{
            left: '561.01px',
            top: '425.98px',
            display: 'flex',
            width: '195.489px',
            height: '33.758px',
            padding: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '139px',
            borderRadius: '8px',
            border: '2px solid #695455',
            background: '#928D86',
            boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* 0 text */}
          <span
            style={{
              color: '#524340',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            0
          </span>
          
          {/* MAX text */}
          <span
            style={{
              color: '#524340',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            MAX
          </span>
        </div>
        
        {/* ETH button container */}
        <div
          className="absolute hidden md:flex"
          style={{
            left: '761.64px',
            top: '425.98px',
            display: 'flex',
            width: '84.883px',
            height: '33.758px',
            padding: '10px 14px',
            alignItems: 'center',
            gap: '3px',
            borderRadius: '6px',
            border: '2px solid #695455',
            background: '#928D86',
            boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* ETH.png image */}
          <div
            style={{
              width: '20px',
              height: '20px',
              flexShrink: 0,
              backgroundImage: "url('/assets/Hero/ETH.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* ETH text */}
          <span
            style={{
              color: '#524340',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            ETH
          </span>
          
          {/* Down arrow container */}
          <div
            style={{
              width: '20px',
              height: '20px',
              flexShrink: 0,
              aspectRatio: '1/1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* down.svg icon */}
            <img
              src="/assets/Hero/down.svg"
              alt="Down"
              style={{
                width: '20px',
                height: '20px',
                aspectRatio: '10.00/6.17',
                fill: '#524340',
              }}
            />
          </div>
        </div>
        
        {/* YOU RECEIVE section */}
        <div
          className="absolute hidden md:block"
          style={{
            left: '561.01px',
            top: '462.57px',
            width: '285.517px',
            height: '53.776px',
          }}
        >
          {/* YOU RECEIVE text */}
          <span
            style={{
              width: '87.658px',
              height: '11.183px',
              color: '#928D86',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            YOU RECEIVE
          </span>
          
          {/* Receive amount section */}
          <div
            className="absolute"
            style={{
              left: '0px', // Relative to YOU RECEIVE section (561.01 - 561.01 = 0)
              top: '20px', // Relative to YOU RECEIVE section (482.59 - 462.57 = 20px)
              display: 'inline-flex',
              height: '33.758px',
              padding: '10px 265px 10px 5px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '168px',
              borderRadius: '6px',
              border: '2px solid #695455',
              background: '#928D86',
              boxShadow: '0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* 0 text */}
            <span
              style={{
                color: '#524340',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              0
            </span>
          </div>
        </div>
        
        <div
          className="absolute hidden md:flex items-center gap-0"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            left: '499px',
            top: '715px',
            width: '409.66px',
            height: '67px',
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: '73.839px',
              height: '67px',
              padding: '10px',
              gap: '10px',
              borderRadius: '4px',
              border: '2px solid #695455',
              background: '#928D86',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            }}
          >
            <img
              src="/assets/Hero/X.svg"
              alt="X"
              className="social-icon"
              style={{
                width: '20px',
                height: '20px',
                flexShrink: 0,
              }}
            />
          </div>
          <div
            className="flex items-center"
            style={{
              width: '73.8px',
              height: '67px',
              padding: '10px 10px 10px 27px',
              gap: '10px',
              borderRadius: '4px',
              border: '2px solid #695455',
              background: '#928D86',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            }}
          >
             <img
              src="/assets/Hero/Tg.svg"
              alt="Telegram`"
              className="social-icon"
              style={{
                width: '20px',
                height: '20px',
                flexShrink: 0,
              }}
            />
          </div>
          <div
            className="flex items-center"
            style={{
              width: '73.8px',
              height: '67px',
              padding: '10px 10px 10px 27px',
              gap: '10px',
              borderRadius: '4px',
              border: '2px solid #695455',
              background: '#928D86',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            }}
          >
             <img
              src="/assets/Hero/tw.svg"
              alt="Telegram`"
              className="social-icon"
              style={{
                width: '20px',
                height: '20px',
                flexShrink: 0,
              }}
            />
          </div>
          <div
            className="flex items-center"
            style={{
              width: '73.8px',
              height: '67px',
              padding: '10px 10px 10px 27px',
              gap: '10px',
              borderRadius: '4px',
              border: '2px solid #695455',
              background: '#928D86',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
            }}
          >
            <img
              src="/assets/Hero/insta.svg"
              alt="Telegram`"
              className="social-icon"
              style={{
                width: '20px',
                height: '20px',
                flexShrink: 0,
              }}
            />
            
          </div>
        </div>
      </div>
      </div>
      {/* End of responsive wrapper */}
    </section>
  )
}

