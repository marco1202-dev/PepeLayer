'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function FeatureSummary() {
  const router = useRouter()
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
      id="highlight"
      className="w-full aspect-[152/215] md:aspect-video bg-cover bg-center bg-no-repeat bg-gray-300 relative"
      style={{
        backgroundImage: "url('/assets/Summary/Feature Summary.png')",
        overflow: 'visible', // Allow header to extend above section
      }}
    >
      {/* Mobile Header Section - Positioned between About and Feature Summary sections */}
      <div
        className="md:hidden absolute left-1/2 -translate-x-1/2"
        style={{
          top: '-27px',
          width: '92vw',
          maxWidth: '362px',
          zIndex: 10,
        }}
      >
        <div
          className="flex flex-col justify-center items-center"
          style={{
            width: '100%',
            padding: 'clamp(8px, 2.6vw, 10px)',
            gap: '-14px',
            borderRadius: '4px',
            border: '4px solid #6E5A53',
            background: '#524340',
          }}
        >
          <h2
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              overflow: 'hidden',
              color: '#928D86',
              textAlign: 'center',
              fontFeatureSettings: "'liga' off, 'clig' off",
              textOverflow: 'ellipsis',
              textShadow: '3px 1px 10px rgba(0, 0, 0, 0.25)',
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: 'clamp(20px, 8.3vw, 32px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'clamp(25px, 10.4vw, 40px)',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            FEATURE SUMMARY
          </h2>
          <p
            style={{
              width: '90.4vw',
              maxWidth: '350px',
              height: 'clamp(30px, 10.9vw, 42px)',
              overflow: 'hidden',
              color: '#928D86',
              textAlign: 'center',
              fontFeatureSettings: "'liga' off, 'clig' off",
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: 'clamp(12px, 3.9vw, 15px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'clamp(25px, 10.4vw, 40px)',
              textTransform: 'uppercase',
              margin: 0,
              marginTop: "-15px"
            }}
          >
            Where Meme Energy Meets Layer 2 Power
          </p>
        </div>
      </div>
      
      {/* Mobile Feature Summary Content */}
      <div
        className="md:hidden absolute left-1/2 -translate-x-1/2"
        style={{
          top: 'clamp(320px, 13vw, 100px)',
          width: '92vw',
          maxWidth: '362px',
          minHeight: 'clamp(400px, 130vw, 500px)',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Mobile Content Container - Menu and Text side by side */}
        <div
          className="mt-3 flex justify-between items-start"
          style={{
            width: '100%',
            gap: 'clamp(8px, 2.6vw, 10px)',
            marginBottom: 'clamp(8px, 2.6vw, 10px)',
          }}
        >
          {/* Mobile Menu Section - Left Side */}
          <div
            className="flex flex-col relative"
            style={{
              width: '41.5vw',
              maxWidth: '160px',
              gap: 'clamp(4px, 1.3vw, 8px)',
            }}
          >
            {/* Menu item 1 - Low Fees */}
            <div
              className="flex justify-center items-center"
              style={{
                width: 'clamp(70px, 23vw, 89px)',
                height: 'clamp(22px, 7.3vw, 28px)',
                padding: 'clamp(2px, 0.8vw, 3px)',
                gap: 'clamp(1px, 0.5vw, 2px)',
                borderRadius: '1px',
                border: '1px solid #56534F',
                background: '#4C4C4C',
                boxShadow: '3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              <img
                src="/assets/Summary/Money.svg"
                alt="Money"
                style={{
                  width: 'clamp(7px, 2.3vw, 9px)',
                  height: 'clamp(7px, 2.3vw, 9px)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: '#928D86',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: 'clamp(9px, 2.8vw, 11px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Low Fees
              </span>
              <img
                src="/assets/Summary/Chevrons right.svg"
                alt="Chevron right"
                style={{
                  width: 'clamp(13px, 4.4vw, 17px)',
                  height: 'clamp(13px, 4.4vw, 17px)',
                  strokeWidth: '1px',
                  stroke: '#928D86',
                }}
              />
            </div>
            
            {/* Menu item 2 - Blazing Speed */}
            <div
              className="flex justify-center items-center"
              style={{
                width: 'clamp(95px, 30.6vw, 118px)',
                height: 'clamp(22px, 7.3vw, 28px)',
                padding: 'clamp(2px, 0.8vw, 3px)',
                gap: 'clamp(1px, 0.5vw, 2px)',
                borderRadius: '1px',
                border: '1px solid #56534F',
                background: '#4C4C4C',
                boxShadow: '3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              <img
                src="/assets/Summary/Rocket.svg"
                alt="Rocket"
                style={{
                  width: 'clamp(7px, 2.3vw, 9px)',
                  height: 'clamp(7px, 2.3vw, 9px)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: '#928D86',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: 'clamp(9px, 2.8vw, 11px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Blazing Speed
              </span>
              <img
                src="/assets/Summary/Chevrons right.svg"
                alt="Chevron right"
                style={{
                  width: 'clamp(13px, 4.4vw, 17px)',
                  height: 'clamp(13px, 4.4vw, 17px)',
                  strokeWidth: '1px',
                  stroke: '#928D86',
                }}
              />
            </div>
            
            {/* Menu item 3 - Ethereum Security */}
            <div
              className="flex justify-center items-center"
              style={{
                width: 'clamp(110px, 35vw, 135px)',
                height: 'clamp(22px, 7.3vw, 28px)',
                padding: 'clamp(2px, 0.8vw, 3px)',
                gap: 'clamp(1px, 0.5vw, 2px)',
                borderRadius: '1px',
                border: '1px solid #56534F',
                background: '#4C4C4C',
                boxShadow: '3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              <img
                src="/assets/Summary/Secure.svg"
                alt="Secure"
                style={{
                  width: 'clamp(7px, 2.3vw, 9px)',
                  height: 'clamp(7px, 2.3vw, 9px)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: '#928D86',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: 'clamp(9px, 2.8vw, 11px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Ethereum Security
              </span>
              <img
                src="/assets/Summary/Chevrons right.svg"
                alt="Chevron right"
                style={{
                  width: 'clamp(13px, 4.4vw, 17px)',
                  height: 'clamp(13px, 4.4vw, 17px)',
                  strokeWidth: '1px',
                  stroke: '#928D86',
                }}
              />
            </div>
            
            {/* Menu item 4 - Community Governance */}
            <div
              className="flex justify-center items-center"
              style={{
                width: 'clamp(130px, 41.5vw, 160px)',
                height: 'clamp(22px, 7.3vw, 28px)',
                padding: 'clamp(2px, 0.8vw, 3px)',
                gap: 'clamp(1px, 0.5vw, 2px)',
                borderRadius: '1px',
                border: '1px solid #56534F',
                background: '#4C4C4C',
                boxShadow: '3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              <img
                src="/assets/Summary/Community.svg"
                alt="Community"
                style={{
                  width: 'clamp(7px, 2.3vw, 9px)',
                  height: 'clamp(7px, 2.3vw, 9px)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: '#928D86',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: 'clamp(9px, 2.8vw, 11px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Community Governance
              </span>
              <img
                src="/assets/Summary/Chevrons right.svg"
                alt="Chevron right"
                style={{
                  width: 'clamp(13px, 4.4vw, 17px)',
                  height: 'clamp(13px, 4.4vw, 17px)',
                  strokeWidth: '1px',
                  stroke: '#928D86',
                }}
              />
            </div>
          </div>
          
          {/* Mobile Text Section - Right Side */}
          <div
            style={{
              width: 'clamp(150px, 49.7vw, 192px)',
              height: 'clamp(60px, 19.2vw, 74px)',
            }}
          >
            <p
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: 'clamp(10px, 3.1vw, 12px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: 0,
              }}
            >
              {/* Stroke layer */}
              <span
                style={{
                  position: 'absolute',
                  WebkitTextStrokeWidth: 'clamp(1px, 0.5vw, 2px)',
                  WebkitTextStrokeColor: '#524340',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                PEPELayer bridges meme culture and blockchain architecture making cross-chain movement as effortless as frogs leaping lily pads.
              </span>
              {/* Fill layer */}
              <span
                style={{
                  position: 'relative',
                  zIndex: 1,
                  color: '#F0B90B',
                  WebkitTextFillColor: '#F0B90B',
                  textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                PEPELayer bridges meme culture and blockchain architecture making cross-chain movement as effortless as frogs leaping lily pads.
              </span>
            </p>
          </div>
        </div>
        
        {/* Mobile King Image - Positioned directly below menu items with minimal gap */}
        <div
          className="absolute"
          style={{
            left: 'clamp(15px, 7.8vw, 30px)',
            top: 'clamp(100px, 33.7vw, 130px)',
            width: 'clamp(100px, 34.2vw, 132px)',
            height: 'clamp(100px, 34.2vw, 132px)',
            aspectRatio: '1/1',
            backgroundImage: "url('/assets/Summary/King.png')",
            backgroundPosition: '50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Mobile Button Section - Positioned bottom-right */}
        <div
          className="absolute flex flex-col"
          style={{
            right: '0px',
            bottom: 'clamp(200px, 85.5vw, 330px)',
            width: 'clamp(130px, 42vw, 162px)',
            gap: 'clamp(4px, 1.3vw, 8px)',
          }}
        >
          {/* First button - Join The Presale */}
          <button
            className="flex justify-center items-center"
            style={{
              width: '100%',
              height: 'clamp(26px, 8.3vw, 32px)',
              padding: 'clamp(2px, 0.8vw, 3px)',
              gap: 'clamp(2px, 0.8vw, 3px)',
              borderRadius: '2px',
              border: '3px solid #695455',
              background: '#928D86',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
            }}
            type="button"
          >
            <span
              style={{
                color: '#524340',
                textAlign: 'center',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: 'clamp(9px, 2.8vw, 11px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              Join The Presale
            </span>
          </button>
          
          {/* Second button - View White Paper */}
          <button
            className="flex justify-center items-center"
            style={{
              width: '100%',
              height: 'clamp(26px, 8.3vw, 32px)',
              padding: 'clamp(2px, 0.8vw, 3px)',
              gap: 'clamp(2px, 0.8vw, 3px)',
              borderRadius: '2px',
              border: '3px solid #695455',
              background: '#928D86',
              boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
              cursor: 'pointer',
            }}
            type="button"
            onClick={() => router.push('/whitepaper')}
          >
            <span
              style={{
                color: '#524340',
                textAlign: 'center',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: 'clamp(9px, 2.8vw, 11px)',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              View White Paper
            </span>
          </button>
        </div>
      </div>
      
      {/* Responsive wrapper container - scales all content proportionally */}
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
        {/* Content section */}
        <div
          className="absolute hidden md:block"
          style={{
            left: '382px',
            top: '-42px', // Moved down by 20px (from -62px to -42px)
            width: '1156px',
            height: '1094px',
            zIndex: 10, // Ensure content appears above About section
            // border: '1px solid blue',
          }}
        >
          <div
            className="flex flex-col justify-center items-center hidden md:flex"
            style={{
              width: '1155.511px',
              height: '280.898px',
              padding: '10px',
              gap: '55px',
              borderRadius: '4px',
              border: '8px solid #6E5A53',
              background: '#524340',
            }}
          >
            <h2
              style={{
                display: 'block',
                color: '#928D86',
                textAlign: 'center',
                fontFeatureSettings: "'liga' off, 'clig' off",
                textShadow: '3px 1px 10px rgba(0, 0, 0, 0.25)',
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '96px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '40px',
                textTransform: 'uppercase',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
            >
              Feature Summary
            </h2>
            <p
              style={{
                width: '707px',
                height: '55px',
                flexShrink: 0,
                overflow: 'hidden',
                color: '#928D86',
                textAlign: 'center',
                fontFeatureSettings: "'liga' off, 'clig' off",
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: 0,
              }}
            >
              Where Meme Energy Meets Layer 2 Power
            </p>
          </div>
          {/* Menu section */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '0px', // Relative to Content section
              top: '409px', // 367 - (-42) = 409px relative to Content section
              width: '464px',
              height: '248px',
            //   border: '1px solid blue',
            }}
          >
            {/* Menu items container */}
            <div className="flex flex-col gap-4">
              {/* Menu item 1 */}
              <div
                className="flex justify-center items-center hidden md:flex"
                style={{
                  width: '258.063px',
                  height: '51.812px',
                  padding: '10px',
                  gap: '5px',
                  borderRadius: '4px',
                  border: '4px solid #56534F',
                  background: '#4C4C4C',
                  boxShadow: '3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
                }}
              >
                {/* SVG icon */}
                <img
                  src="/assets/Summary/Money.svg"
                  alt="Money"
                  style={{
                    width: '25px',
                    height: '25px',
                    flexShrink: 0,
                  }}
                />
                {/* Text */}
                <span
                  style={{
                    color: '#928D86',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  Low Fees
                </span>
                {/* Chevron right icon */}
                <img
                  src="/assets/Summary/Chevrons right.svg"
                  alt="Chevron right"
                  style={{
                    width: '50px',
                    height: '50px',
                    strokeWidth: '1px',
                    stroke: '#928D86',
                  }}
                />
              </div>
              {/* Menu item 2 */}
              <div
                className="flex justify-center items-center hidden md:flex"
                style={{
                  width: '342.659px',
                  height: '51.812px',
                  padding: '10px',
                  gap: '5px',
                  borderRadius: '4px',
                  border: '4px solid #56534F',
                  background: '#4C4C4C',
                  boxShadow: '3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
                }}
              >
                 {/* SVG icon */}
                 <img
                  src="/assets/Summary/Rocket.svg"
                  alt="Rocket"
                  style={{
                    width: '25px',
                    height: '25px',
                    flexShrink: 0,
                  }}
                />
                {/* Text */}
                <span
                  style={{
                    color: '#928D86',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  Blazing Speed
                </span>
                {/* Chevron right icon */}
                <img
                  src="/assets/Summary/Chevrons right.svg"
                  alt="Chevron right"
                  style={{
                    width: '50px',
                    height: '50px',
                    strokeWidth: '1px',
                    stroke: '#928D86',
                  }}
                />
              </div>
              {/* Menu item 3 */}
              <div
                className="flex justify-center items-center hidden md:flex"
                style={{
                  width: '392.221px',
                  height: '51.812px',
                  padding: '10px',
                  gap: '5px',
                  borderRadius: '4px',
                  border: '4px solid #56534F',
                  background: '#4C4C4C',
                  boxShadow: '3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
                }}
              >
                 {/* SVG icon */}
                 <img
                  src="/assets/Summary/Secure.svg"
                  alt="Secure"
                  style={{
                    width: '25px',
                    height: '25px',
                    flexShrink: 0,
                  }}
                />
                {/* Text */}
                <span
                  style={{
                    color: '#928D86',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  Ethereum Security
                </span>
                {/* Chevron right icon */}
                <img
                  src="/assets/Summary/Chevrons right.svg"
                  alt="Chevron right"
                  style={{
                    width: '50px',
                    height: '50px',
                    strokeWidth: '1px',
                    stroke: '#928D86',
                  }}
                />
              </div>
              {/* Menu item 4 */}
              <div
                className="flex justify-center items-center hidden md:flex"
                style={{
                  width: '464px',
                  height: '51.812px',
                  padding: '10px',
                  gap: '5px',
                  borderRadius: '4px',
                  border: '4px solid #56534F',
                  background: '#4C4C4C',
                  boxShadow: '3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
                }}
              >
                 {/* SVG icon */}
                 <img
                  src="/assets/Summary/Community.svg"
                  alt="Community"
                  style={{
                    width: '25px',
                    height: '25px',
                    flexShrink: 0,
                  }}
                />
                {/* Text */}
                <span
                  style={{
                    color: '#928D86',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  Community Governance
                </span>
                {/* Chevron right icon */}
                <img
                  src="/assets/Summary/Chevrons right.svg"
                  alt="Chevron right"
                  style={{
                    width: '50px',
                    height: '50px',
                    strokeWidth: '1px',
                    stroke: '#928D86',
                  }}
                />
              </div>
            </div>
          </div>
          {/* Text section */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '522px', // 904 - 382 = 522px relative to Content section
              top: '409px', // 367 - (-42) = 409px relative to Content section
              width: '558px',
              height: '216px',
            }}
          >
            <p
              style={{
                width: '558px',
                height: '216px',
                position: 'relative',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: 0,
              }}
            >
              {/* Stroke layer */}
              <span
                style={{
                  position: 'absolute',
                  WebkitTextStrokeWidth: '6px',
                  WebkitTextStrokeColor: '#524340',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                PepeLayer merges cultural identity with scalable blockchain infrastructure, enabling seamless cross-chain mobility and coordinated on-chain activity.
              </span>
              {/* Fill layer */}
              <span
                style={{
                  position: 'relative',
                  zIndex: 1,
                  color: '#F0B90B',
                  WebkitTextFillColor: '#F0B90B',
                  textShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                PepeLayer merges cultural identity with scalable blockchain infrastructure, enabling seamless cross-chain mobility and coordinated on-chain activity.
              </span>
            </p>
          </div>
          {/* King image */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '402px', // 784 - 382 = 402px relative to Content section
              top: '740px', // 2978 - 2300 + 62 = 740px relative to Content section (accounting for top: -62px)
              width: '354px',
              height: '354px',
              aspectRatio: '1/1',
              backgroundImage: "url('/assets/Summary/King.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          {/* Button section */}
          <div
            className="absolute hidden md:flex justify-between items-center"
            style={{
              left: '0px', // 382 - 382 = 0px relative to Content section
              top: '780px', // 3018 - 2238 = 780px relative to Content section
              width: '1156px',
              height: '94px',
            //   border: '1px solid red',
            }}
          >
            {/* First button */}
            <button
              className="flex justify-center items-center hidden md:flex"
              style={{
                width: '470px',
                height: '94px',
                padding: '10px',
                gap: '10px',
                borderRadius: '6px',
                border: '8px solid #695455',
                background: '#928D86',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => router.push('/whitepaper')}
            >
              <span
                style={{
                  width: '393px',
                  flexShrink: 0,
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                View White Paper
              </span>
            </button>
            {/* Second button - placeholder */}
            <button
              className="flex justify-center items-center hidden md:flex"
              style={{
                width: '470px',
                height: '94px',
                padding: '10px',
                gap: '10px',
                borderRadius: '6px',
                border: '8px solid #695455',
                background: '#928D86',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
            >
              <span
                style={{
                  width: '391px',
                  flexShrink: 0,
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '32px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Join The Presale
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* End of responsive wrapper */}
    </section>
  )
}

