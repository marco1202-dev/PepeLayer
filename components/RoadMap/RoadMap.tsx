'use client'

import { useState, useEffect } from 'react'

export default function RoadMap() {
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
      id="roadmap"
      className="w-full bg-cover bg-center bg-no-repeat bg-gray-300 relative overflow-hidden"
      style={{
        aspectRatio: '1925/1083',
        backgroundImage: "url('/assets/Roadmap/RoadMap.png')",
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
      {/* Content section - positioned inside RoadMap section with top margin */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '384px',
          top: '20px', // Positioned inside with top margin (Y 4440 from page, RoadMap starts at ~4460px, so relative position with margin)
          width: '1493px',
          height: '1135px',
          // border: '1px solid blue',
        }}
        >
          {/* Header title */}
          <h2
            className="absolute hidden md:block"
            style={{
              left: '281px', // 665 - 384 = 281px (relative to content div)
              top: '0px', // 4440 - 4440 = 0px (relative to content div)
              width: '591px',
              height: '155px',
              color: '#424242',
              fontFeatureSettings: "'liga' off, 'clig' off",
              textShadow: '3px 3px 20px #928D86',
              WebkitTextStrokeWidth: '1px',
              WebkitTextStrokeColor: '#928D86',
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '128px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              margin: 0,
              zIndex: 5,
            }}
          >
            ROADMAP
          </h2>
          
          {/* Phase section - lower z-index so images appear above */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '0px', // 384 - 384 = 0px (relative to content div)
              top: '222.34px', // 4662.34 - 4440 = 222.34px (relative to content div)
              width: '1153px',
              height: '782.657px',
              // border: '1px solid blue',
              zIndex: 1,
              position: 'relative',
            }}
          >
            {/* Phase content */}
            <div
              className="hidden md:flex flex-col justify-center items-center"
              style={{
                width: '540.469px',
                height: '207.856px',
                padding: '10px',
                gap: '10px',
                borderRadius: '4px',
                border: '2px solid #56534F',
                background: '#4C4C4C',
                boxShadow: '3px 3px 4px 0 rgba(0, 0, 0, 0.25), 3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              {/* Title */}
              <h3
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  margin: 0,
                }}
              >
                Phase I — The Call of the Swamp
              </h3>
              
              {/* Bullet points */}
              <ul
                style={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}
              >
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Community expansion across global platforms
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Meme-driven campaigns spreading the imperial call
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Recruitment of early marsh leaders & ambassadors
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Launch of the initial presale round
                </li>
              </ul>
            </div>
            
            {/* Phase content 2 */}
            <div
              className="absolute hidden md:flex flex-col justify-center items-center"
              style={{
                left: '0px', // 384 - 384 = 0px (relative to phase section)
                top: '283.81px', // 4946.15 - 4662.34 = 283.81px (relative to phase section)
                width: '537.766px',
                height: '219.848px',
                padding: '10px',
                gap: '10px',
                borderRadius: '4px',
                border: '2px solid #56534F',
                background: '#4C4C4C',
                boxShadow: '3px 3px 4px 0 rgba(0, 0, 0, 0.25), 3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              {/* Title */}
              <h3
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  margin: 0
                }}
              >
                Phase III — The Leap of Dominion
              </h3>
              
              {/* Bullet points */}
              <ul
                style={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}
              >
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Completion of final presale and token distribution
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Deployment of liquidity and launch on major DEXs
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Community surpasses 50,000 members worldwide
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • First wave of marketing offensives across crypto realms
                </li>
              </ul>
            </div>
            
            {/* Phase content 3 */}
            <div
              className="absolute hidden md:flex flex-col justify-center items-center"
              style={{
                left: '0px', // 384 - 384 = 0px (relative to phase section)
                top: '550.02px', // 5212.36 - 4662.34 = 550.02px (relative to phase section)
                width: '537.766px',
                height: '232.639px',
                padding: '10px',
                gap: '10px',
                borderRadius: '4px',
                border: '2px solid #56534F',
                background: '#4C4C4C',
                boxShadow: '3px 3px 4px 0 rgba(0, 0, 0, 0.25), 3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              {/* Title */}
              <h3
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  margin: 0
                }}
              >
                Phase V — The Eternal Layer
              </h3>
              
              {/* Bullet points */}
              <ul
                style={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}
              >
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Rollout of scaling upgrades & modular Layer 2 architecture
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Fully decentralized governance through DAO sovereignty
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Integration of advanced data layers, AI modules & oracles
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Continuous evolution — turning PEPELayer into the living civilization of Web3
                </li>
              </ul>
            </div>
            
            {/* Phase content 4 */}
            <div
              className="absolute hidden md:flex flex-col justify-center items-center"
              style={{
                left: '671.4px', // 1070.4 - 384 = 686.4px (relative to phase section)
                top: '134.7px', // 4807.04 - 4662.34 = 144.7px (relative to phase section)
                width: '479.605px',
                height: '216.65px',
                padding: '10px',
                gap: '10px',
                borderRadius: '4px',
                border: '2px solid #56534F',
                background: '#4C4C4C',
                boxShadow: '3px 3px 4px 0 rgba(0, 0, 0, 0.25), 3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              {/* Title */}
              <h3
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  margin: 0
                }}
              >
                Phase II — The Forging of the Foundation
              </h3>
              
              {/* Bullet points */}
              <ul
                style={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}
              >
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Finalize smart contracts & Layer 2 protocol core
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Conduct security audits and performance testing
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Release staking and reward framework
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Establish alliances with partner builders and early ecosystems
                </li>
              </ul>
            </div>
            
            {/* Phase content 5 */}
            <div
              className="absolute hidden md:flex flex-col justify-center items-center"
              style={{
                left: '686.4px', // 1070.4 - 384 = 686.4px (relative to phase section)
                top: '430.1px', // 5092.44 - 4662.34 = 430.1px (relative to phase section)
                width: '464.803px',
                height: '207.856px',
                padding: '10px',
                gap: '10px',
                borderRadius: '4px',
                border: '2px solid #56534F',
                background: '#4C4C4C',
                boxShadow: '3px 3px 4px 0 rgba(0, 0, 0, 0.25), 3px 1px 25px 0 rgba(0, 0, 0, 0.25) inset',
              }}
            >
              {/* Title */}
              <h3
                style={{
                  color: '#FFF',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                  margin: 0
                }}
              >
                Phase IV — The Bridges of Expansion
              </h3>
              
              {/* Bullet points */}
              <ul
                style={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                }}
              >
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Launch of cross-chain integrations and bridge protocols
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Developer grants and NFT initiatives to fuel creativity
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • Strategic alliances across GameFi, DeFi, and meme ecosystems
                </li>
                <li
                  style={{
                    color: '#FFF',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                    margin: 0,
                  }}
                >
                  • On-chain DAO Council formed to guide the empire's future
                </li>
              </ul>
            </div>
          </div>
          
          {/* King1 image - higher z-index to appear above phase section */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '828px', // 1212 - 384 = 828px (relative to content div)
              top: '37px', // 4487 - 4440 = 47px (relative to content div)
              width: '355px',
              height: '350px',
              aspectRatio: '71/70',
              backgroundImage: "url('/assets/Roadmap/King2.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transform: 'rotateY(-180deg)',
              zIndex: 10,
            }}
          />
          
          {/* King2 image - higher z-index to appear above phase section */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '1006px', // 1390 - 384 = 1006px (relative to content div)
              top: '618px', // 5088 - 4440 = 648px (relative to content div)
              width: '487px',
              height: '487px',
              aspectRatio: '1/1',
              backgroundImage: "url('/assets/Roadmap/King1.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              transform: 'rotateY(-180deg)',
              zIndex: 10,
            }}
          />
          
          {/* Group Pilar image - higher z-index to appear above phase section */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '485.02px', // 874.02 - 384 = 490.02px (relative to content div)
              top: '110px', // 4580 - 4440 = 140px (relative to content div)
              width: '220.602px',
              height: '820px',
              backgroundImage: "url('/assets/Roadmap/Group Pilar.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              zIndex: 10,
            }}
          />
        </div>
      </div>
      {/* End of responsive wrapper */}
    </section>
  )
}

