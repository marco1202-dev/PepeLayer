'use client'

import { useState, useEffect } from 'react'

export default function FAQ() {
  const [openAnswers, setOpenAnswers] = useState<boolean[]>([false, false, false, false])
  const [scale, setScale] = useState(1)
  const baseWidth = 1920 // Base design width in pixels

  const toggleAnswer = (index: number) => {
    setOpenAnswers(prev => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

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
      id="faq"
      className="w-full aspect-[152/215] md:aspect-video bg-cover bg-center bg-no-repeat bg-gray-300 relative overflow-visible"
      style={{
        backgroundImage: "url('/assets/FAQ/FAQ.png')",
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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
      {/* Content section - spans across HowToBuy and FAQ sections */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '370px', // 370 - 0 = 370px (relative to FAQ section)
          top: '-94px', // 6519 - 6613 = -94px (Y 6519 from page, FAQ starts at 6613px)
          width: '1173px',
          height: '991px',
        //   border: '1px solid blue',
        }}
      >
        {/* Header title section */}
        <div
          className="hidden md:flex flex-col justify-center items-center"
          style={{
            width: '1173px',
            height: '539px',
            padding: '10px',
            gap: '-7px',
            // border: '1px solid red',
          }}
        >
          {/* Header title image */}
          <div
            className="hidden md:block flex-shrink-0"
            style={{
              width: '1153px',
              height: '380px',
              aspectRatio: '1153/380',
              backgroundImage: "url('/assets/FAQ/PepeLayer.png')",
              backgroundPosition: '-140.719px -63.631px',
              backgroundSize: '123.217% 160.391%',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* FAQ text */}
          <h2
            className="hidden md:block"
            style={{
              color: '#FFF',
              textAlign: 'center',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '128px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              margin: 0,
            }}
          >
            FAQ
          </h2>
        </div>
        
        {/* Question menu section */}
        <div
          className="absolute hidden md:flex flex-col"
          style={{
            left: '346px', // 716 - 370 = 346px (relative to content section)
            top: '573px', // 7092 - 6519 = 573px (relative to content section)
            width: '469px',
            height: '418px',
            alignItems: 'flex-start',
            gap: '20px',
            // border: '1px solid red',
          }}
        >
          {/* Button area 1 */}
          <div
            className="hidden md:flex flex-col flex-shrink-0"
            style={{
              width: '469px',
              minHeight: '64px',
              alignItems: 'flex-start',
              gap: '8px',
            //   border: '1px solid green',
            }}
          >
            {/* Button */}
            <button
              className="hidden md:flex justify-center items-center"
              style={{
                padding: '10px',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '8px',
                border: '2px solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => toggleAnswer(0)}
            >
              {/* Button text */}
              <span
                style={{
                  width: '422px',
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '36px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Q: What is PEPELayer?
              </span>
              {/* Icon area */}
              <div
                style={{
                  width: '15px',
                  height: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAnswer(0)
                }}
              >
                <img
                  src="/assets/FAQ/Arrow down-right.svg"
                  alt="Arrow down-right"
                  style={{
                    width: '15px',
                    height: '15px',
                    strokeWidth: '2px',
                    stroke: '#524340',
                  }}
                />
              </div>
            </button>
            
            {/* Answer area - hidden by default with animation */}
            <div
              className="hidden md:flex justify-center items-center"
              style={{
                padding: openAnswers[0] ? '10px' : '0px 10px',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '8px',
                border: '2px solid #695455',
                background: '#928D86',
                maxHeight: openAnswers[0] ? '1000px' : '0px',
                opacity: openAnswers[0] ? 1 : 0,
                overflow: openAnswers[0] ? 'visible' : 'hidden',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out',
                boxShadow: openAnswers[0] 
                  ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 8px 0 rgba(0, 0, 0, 0.30)'
                  : 'none',
                cursor: openAnswers[0] ? 'pointer' : 'default',
              }}
              onClick={openAnswers[0] ? () => toggleAnswer(0) : undefined}
            >
              {/* Answer text */}
              {openAnswers[0] && (
                <span
                  style={{
                    width: '387px',
                    color: '#524340',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  A: An Ethereum Layer 2 built for speed, scalability, and community governance — the infrastructure of the new meme civilization.
                </span>
              )}
              {/* Icon area */}
              {openAnswers[0] && (
                <div
                  style={{
                    width: '15px',
                    height: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleAnswer(0)
                  }}
                >
                  <img
                    src="/assets/FAQ/Arrow up-right.svg"
                    alt="Arrow up-right"
                    style={{
                      width: '15px',
                      height: '15px',
                      strokeWidth: '2px',
                      stroke: '#524340',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Button area 2 */}
          <div
            className="hidden md:flex flex-col flex-shrink-0"
            style={{
              width: '469px',
              minHeight: '78px',
              alignItems: 'flex-start',
              gap: '8px',
            //   border: '1px solid green',
            }}
          >
            {/* Button */}
            <button
              className="hidden md:flex justify-center items-center"
              style={{
                padding: '10px',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '8px',
                border: '2px solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => toggleAnswer(1)}
            >
              {/* Button text */}
              <span
                style={{
                  width: '400px',
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '24px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Q: How does it differ from other meme projects?
              </span>
              {/* Icon area */}
              <div
                style={{
                  width: '15px',
                  height: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAnswer(1)
                }}
              >
                <img
                  src="/assets/FAQ/Arrow down-right.svg"
                  alt="Arrow down-right"
                  style={{
                    width: '15px',
                    height: '15px',
                    strokeWidth: '2px',
                    stroke: '#524340',
                  }}
                />
              </div>
            </button>
            
            {/* Answer area */}
            <div
              className="hidden md:flex justify-center items-center"
              style={{
                padding: openAnswers[1] ? '10px' : '0px 10px',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '8px',
                border: '2px solid #695455',
                background: '#928D86',
                maxHeight: openAnswers[1] ? '1000px' : '0px',
                opacity: openAnswers[1] ? 1 : 0,
                overflow: openAnswers[1] ? 'visible' : 'hidden',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out',
                boxShadow: openAnswers[1] 
                  ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 8px 0 rgba(0, 0, 0, 0.30)'
                  : 'none',
                cursor: openAnswers[1] ? 'pointer' : 'default',
              }}
              onClick={openAnswers[1] ? () => toggleAnswer(1) : undefined}
            >
              {openAnswers[1] && (
                <span
                  style={{
                    width: '343px',
                    color: '#524340',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                 A: PEPELayer combines real Layer 2 tech with cultural energy — turning memes into mechanisms, and hype into utility.
                </span>
              )}
              {openAnswers[1] && (
                <div
                  style={{
                    width: '15px',
                    height: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleAnswer(1)
                  }}
                >
                  <img
                    src="/assets/FAQ/Arrow up-right.svg"
                    alt="Arrow up-right"
                    style={{
                      width: '15px',
                      height: '15px',
                      strokeWidth: '2px',
                      stroke: '#524340',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Button area 3 */}
          <div
            className="hidden md:flex flex-col flex-shrink-0"
            style={{
              width: '469px',
              minHeight: '108px',
              alignItems: 'flex-start',
              gap: '8px',
            //   border: '1px solid green',
            }}
          >
            {/* Button */}
            <button
              className="hidden md:flex justify-center items-center"
              style={{
                padding: '10px',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '8px',
                border: '2px solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => toggleAnswer(2)}
            >
              {/* Button text */}
              <span
                style={{
                  width: '400px',
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '36px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
               Q: How to join the presale?
              </span>
              {/* Icon area */}
              <div
                style={{
                  width: '15px',
                  height: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAnswer(2)
                }}
              >
                <img
                  src="/assets/FAQ/Arrow down-right.svg"
                  alt="Arrow down-right"
                  style={{
                    width: '15px',
                    height: '15px',
                    strokeWidth: '2px',
                    stroke: '#524340',
                  }}
                />
              </div>
            </button>
            
            {/* Answer area */}
            <div
              className="hidden md:flex justify-center items-center"
              style={{
                padding: openAnswers[2] ? '10px' : '0px 10px',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '8px',
                border: '2px solid #695455',
                background: '#928D86',
                maxHeight: openAnswers[2] ? '1000px' : '0px',
                opacity: openAnswers[2] ? 1 : 0,
                overflow: openAnswers[2] ? 'visible' : 'hidden',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out',
                boxShadow: openAnswers[2] 
                  ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 8px 0 rgba(0, 0, 0, 0.30)'
                  : 'none',
                cursor: openAnswers[2] ? 'pointer' : 'default',
              }}
              onClick={openAnswers[2] ? () => toggleAnswer(2) : undefined}
            >
              {openAnswers[2] && (
                <span
                  style={{
                    width: '343px',
                    color: '#524340',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                 A: 1) Download MetaMask or Trust Wallet
                    <br />
                    2) Fund with ETH/USDT
                    <br />
                    3) Connect to pepelayer.com
                    <br />
                    4) Purchase $PLR and stake for rewards
                </span>
              )}
              {openAnswers[2] && (
                <div
                  style={{
                    width: '15px',
                    height: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleAnswer(2)
                  }}
                >
                  <img
                    src="/assets/FAQ/Arrow up-right.svg"
                    alt="Arrow up-right"
                    style={{
                      width: '15px',
                      height: '15px',
                      strokeWidth: '2px',
                      stroke: '#524340',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Button area 4 */}
          <div
            className="hidden md:flex flex-col flex-shrink-0"
            style={{
              width: '469px',
              minHeight: '108px',
              alignItems: 'flex-start',
              gap: '8px',
            //   border: '1px solid green',
            }}
          >
            {/* Button */}
            <button
              className="hidden md:flex justify-center items-center"
              style={{
                padding: '10px',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '8px',
                border: '2px solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => toggleAnswer(3)}
            >
              {/* Button text */}
              <span
                style={{
                  width: '349px',
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '36px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Q: When are tokens claimable? 
              </span>
              {/* Icon area */}
              <div
                style={{
                  width: '15px',
                  height: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAnswer(3)
                }}
              >
                <img
                  src="/assets/FAQ/Arrow down-right.svg"
                  alt="Arrow down-right"
                  style={{
                    width: '15px',
                    height: '15px',
                    strokeWidth: '2px',
                    stroke: '#524340',
                  }}
                />
              </div>
            </button>
            
            {/* Answer area */}
            <div
              className="hidden md:flex justify-center items-center"
              style={{
                padding: openAnswers[3] ? '10px' : '0px 10px',
                gap: '10px',
                alignSelf: 'stretch',
                borderRadius: '8px',
                border: '2px solid #695455',
                background: '#928D86',
                maxHeight: openAnswers[3] ? '1000px' : '0px',
                opacity: openAnswers[3] ? 1 : 0,
                overflow: openAnswers[3] ? 'visible' : 'hidden',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out',
                boxShadow: openAnswers[3] 
                  ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 8px 0 rgba(0, 0, 0, 0.30)'
                  : 'none',
                cursor: openAnswers[3] ? 'pointer' : 'default',
              }}
              onClick={openAnswers[3] ? () => toggleAnswer(3) : undefined}
            >
              {openAnswers[3] && (
                <span
                  style={{
                    width: '387px',
                    color: '#524340',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  A: After the presale ends, claim directly from the official website.
                </span>
              )}
              {openAnswers[3] && (
                <div
                  style={{
                    width: '15px',
                    height: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleAnswer(3)
                  }}
                >
                  <img
                    src="/assets/FAQ/Arrow up-right.svg"
                    alt="Arrow up-right"
                    style={{
                      width: '15px',
                      height: '15px',
                      strokeWidth: '2px',
                      stroke: '#524340',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Pepe left image */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '0px', // X 0 (relative to FAQ section)
          top: '375px', // 6988 - 6613 = 375px (relative to FAQ section)
          width: '675px',
          height: '675px',
          aspectRatio: '1/1',
          backgroundImage: "url('/assets/FAQ/pepe left.png')",
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Pepe right image */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '1230px', // X 1245 (relative to FAQ section)
          top: '375px', // 6988 - 6613 = 375px (relative to FAQ section)
          width: '675px',
          height: '675px',
          aspectRatio: '1/1',
          backgroundImage: "url('/assets/FAQ/pepe right.png')",
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      </div>
      {/* End of responsive wrapper */}
      
      {/* Mobile FAQ Content */}
      <div
        className="md:hidden absolute left-1/2 -translate-x-1/2"
        style={{
          top: 'clamp(20px, 5vw, 40px)',
          width: '92vw',
          maxWidth: '469px',
          position: 'relative',
          zIndex: 5,
          paddingBottom: 'clamp(40px, 10vw, 60px)',
        }}
      >
        {/* Mobile Header title section */}
        <div
          className="flex flex-col justify-center items-center"
          style={{
            width: '100%',
            padding: 'clamp(8px, 2.1vw, 10px)',
            gap: 'clamp(-7px, -1.8vw, -7px)',
            marginBottom: 'clamp(20px, 5.2vw, 30px)',
          }}
        >
          {/* Mobile Header title image - PEPELayer logo */}
          <div
            className="flex-shrink-0"
            style={{
              width: 'clamp(280px, 73vw, 1153px)',
              height: 'clamp(92px, 24vw, 380px)',
              aspectRatio: '1153/380',
              backgroundImage: "url('/assets/FAQ/PepeLayer.png')",
              backgroundPosition: 'clamp(-34px, -8.7vw, -140.719px) clamp(-15px, -3.9vw, -63.631px)',
              backgroundSize: 'clamp(123.217%, 123.217%, 123.217%) clamp(160.391%, 160.391%, 160.391%)',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          {/* Mobile FAQ text */}
          <h2
            style={{
              width: '100%',
              color: '#FFF',
              textAlign: 'center',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: 'clamp(40px, 13.3vw, 128px)',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
              margin: 0,
            }}
          >
            FAQ
          </h2>
        </div>
        
        {/* Mobile Question menu section */}
        <div
          className="flex flex-col"
          style={{
            width: '100%',
            alignItems: 'flex-start',
            gap: 'clamp(6px, 2vw, 12px)',
          }}
        >
          {/* Mobile Button area 1 */}
          <div
            className="flex flex-col flex-shrink-0"
            style={{
              width: '100%',
              // minHeight: 'clamp(60px, 13.6vw, 64px)',
              alignItems: 'flex-start',
              gap: 'clamp(4px, 1.7vw, 8px)',
            }}
          >
            <button
              className="flex justify-center items-center"
              style={{
                padding: 'clamp(6px, 2.1vw, 10px)',
                gap: 'clamp(6px, 2.1vw, 10px)',
                alignSelf: 'stretch',
                borderRadius: 'clamp(4px, 1.7vw, 8px)',
                border: 'clamp(1px, 0.4vw, 2px) solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => toggleAnswer(0)}
            >
              <span
                style={{
                  flex: 1,
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: 'clamp(14px, 3.8vw, 36px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Q: What is PEPELayer?
              </span>
              <div
                style={{
                  width: 'clamp(10px, 3.1vw, 15px)',
                  height: 'clamp(10px, 3.1vw, 15px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAnswer(0)
                }}
              >
                <img
                  src="/assets/FAQ/Arrow down-right.svg"
                  alt="Arrow down-right"
                  style={{
                    width: '100%',
                    height: '100%',
                    strokeWidth: '2px',
                    stroke: '#524340',
                  }}
                />
              </div>
            </button>
            
            <div
              className="flex justify-center items-center"
              style={{
                padding: openAnswers[0] ? 'clamp(6px, 2.1vw, 10px)' : '0px clamp(6px, 2.1vw, 10px)',
                gap: 'clamp(6px, 2.1vw, 10px)',
                alignSelf: 'stretch',
                borderRadius: 'clamp(4px, 1.7vw, 8px)',
                border: 'clamp(1px, 0.4vw, 2px) solid #695455',
                background: '#928D86',
                maxHeight: openAnswers[0] ? '1000px' : '0px',
                opacity: openAnswers[0] ? 1 : 0,
                overflow: openAnswers[0] ? 'visible' : 'hidden',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out',
                boxShadow: openAnswers[0] 
                  ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 8px 0 rgba(0, 0, 0, 0.30)'
                  : 'none',
                cursor: openAnswers[0] ? 'pointer' : 'default',
              }}
              onClick={openAnswers[0] ? () => toggleAnswer(0) : undefined}
            >
              {openAnswers[0] && (
                <span
                  style={{
                    flex: 1,
                    color: '#524340',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: 'clamp(10px, 4.2vw, 20px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  A: An Ethereum Layer 2 built for speed, scalability, and community governance — the infrastructure of the new meme civilization.
                </span>
              )}
              {openAnswers[0] && (
                <div
                  style={{
                    width: 'clamp(10px, 3.1vw, 15px)',
                    height: 'clamp(10px, 3.1vw, 15px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleAnswer(0)
                  }}
                >
                  <img
                    src="/assets/FAQ/Arrow up-right.svg"
                    alt="Arrow up-right"
                    style={{
                      width: '100%',
                      height: '100%',
                      strokeWidth: '2px',
                      stroke: '#524340',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Button area 2 */}
          <div
            className="flex flex-col flex-shrink-0"
            style={{
              width: '100%',
              minHeight: 'clamp(50px, 16.3vw, 78px)',
              alignItems: 'flex-start',
              gap: 'clamp(4px, 1.7vw, 8px)',
            }}
          >
            <button
              className="flex justify-center items-center"
              style={{
                padding: 'clamp(6px, 2.1vw, 10px)',
                gap: 'clamp(6px, 2.1vw, 10px)',
                alignSelf: 'stretch',
                borderRadius: 'clamp(4px, 1.7vw, 8px)',
                border: 'clamp(1px, 0.4vw, 2px) solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => toggleAnswer(1)}
            >
              <span
                style={{
                  flex: 1,
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: 'clamp(10px, 5vw, 24px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Q: How does it differ from other meme projects?
              </span>
              <div
                style={{
                  width: 'clamp(10px, 3.1vw, 15px)',
                  height: 'clamp(10px, 3.1vw, 15px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAnswer(1)
                }}
              >
                <img
                  src="/assets/FAQ/Arrow down-right.svg"
                  alt="Arrow down-right"
                  style={{
                    width: '100%',
                    height: '100%',
                    strokeWidth: '2px',
                    stroke: '#524340',
                  }}
                />
              </div>
            </button>
            
            <div
              className="flex justify-center items-center"
              style={{
                padding: openAnswers[1] ? 'clamp(6px, 2.1vw, 10px)' : '0px clamp(6px, 2.1vw, 10px)',
                gap: 'clamp(6px, 2.1vw, 10px)',
                alignSelf: 'stretch',
                borderRadius: 'clamp(4px, 1.7vw, 8px)',
                border: 'clamp(1px, 0.4vw, 2px) solid #695455',
                background: '#928D86',
                maxHeight: openAnswers[1] ? '1000px' : '0px',
                opacity: openAnswers[1] ? 1 : 0,
                overflow: openAnswers[1] ? 'visible' : 'hidden',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out',
                boxShadow: openAnswers[1] 
                  ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 8px 0 rgba(0, 0, 0, 0.30)'
                  : 'none',
                cursor: openAnswers[1] ? 'pointer' : 'default',
              }}
              onClick={openAnswers[1] ? () => toggleAnswer(1) : undefined}
            >
              {openAnswers[1] && (
                <span
                  style={{
                    flex: 1,
                    color: '#524340',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: 'clamp(10px, 4.2vw, 20px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                 A: PEPELayer combines real Layer 2 tech with cultural energy — turning memes into mechanisms, and hype into utility.
                </span>
              )}
              {openAnswers[1] && (
                <div
                  style={{
                    width: 'clamp(10px, 3.1vw, 15px)',
                    height: 'clamp(10px, 3.1vw, 15px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleAnswer(1)
                  }}
                >
                  <img
                    src="/assets/FAQ/Arrow up-right.svg"
                    alt="Arrow up-right"
                    style={{
                      width: '100%',
                      height: '100%',
                      strokeWidth: '2px',
                      stroke: '#524340',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Button area 3 */}
          <div
            className="flex flex-col flex-shrink-0"
            style={{
              width: '100%',
              minHeight: 'clamp(50px, 13.6vw, 64px)',
              alignItems: 'flex-start',
              gap: 'clamp(4px, 1.7vw, 8px)',
            }}
          >
            <button
              className="flex justify-center items-center"
              style={{
                padding: 'clamp(6px, 2.1vw, 10px)',
                gap: 'clamp(6px, 2.1vw, 10px)',
                alignSelf: 'stretch',
                borderRadius: 'clamp(4px, 1.7vw, 8px)',
                border: 'clamp(1px, 0.4vw, 2px) solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => toggleAnswer(2)}
            >
              <span
                style={{
                  flex: 1,
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: 'clamp(14px, 3.8vw, 36px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
               Q: How to join the presale?
              </span>
              <div
                style={{
                  width: 'clamp(10px, 3.1vw, 15px)',
                  height: 'clamp(10px, 3.1vw, 15px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAnswer(2)
                }}
              >
                <img
                  src="/assets/FAQ/Arrow down-right.svg"
                  alt="Arrow down-right"
                  style={{
                    width: '100%',
                    height: '100%',
                    strokeWidth: '2px',
                    stroke: '#524340',
                  }}
                />
              </div>
            </button>
            
            <div
              className="flex justify-center items-center"
              style={{
                padding: openAnswers[2] ? 'clamp(6px, 2.1vw, 10px)' : '0px clamp(6px, 2.1vw, 10px)',
                gap: 'clamp(6px, 2.1vw, 10px)',
                alignSelf: 'stretch',
                borderRadius: 'clamp(4px, 1.7vw, 8px)',
                border: 'clamp(1px, 0.4vw, 2px) solid #695455',
                background: '#928D86',
                maxHeight: openAnswers[2] ? '1000px' : '0px',
                opacity: openAnswers[2] ? 1 : 0,
                overflow: openAnswers[2] ? 'visible' : 'hidden',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out',
                boxShadow: openAnswers[2] 
                  ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 8px 0 rgba(0, 0, 0, 0.30)'
                  : 'none',
                cursor: openAnswers[2] ? 'pointer' : 'default',
              }}
              onClick={openAnswers[2] ? () => toggleAnswer(2) : undefined}
            >
              {openAnswers[2] && (
                <span
                  style={{
                    flex: 1,
                    color: '#524340',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: 'clamp(10px, 4.2vw, 20px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                 A: 1) Download MetaMask or Trust Wallet
                    <br />
                    2) Fund with ETH/USDT
                    <br />
                    3) Connect to pepelayer.com
                    <br />
                    4) Purchase $PLR and stake for rewards
                </span>
              )}
              {openAnswers[2] && (
                <div
                  style={{
                    width: 'clamp(10px, 3.1vw, 15px)',
                    height: 'clamp(10px, 3.1vw, 15px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleAnswer(2)
                  }}
                >
                  <img
                    src="/assets/FAQ/Arrow up-right.svg"
                    alt="Arrow up-right"
                    style={{
                      width: '100%',
                      height: '100%',
                      strokeWidth: '2px',
                      stroke: '#524340',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Button area 4 */}
          <div
            className="flex flex-col flex-shrink-0"
            style={{
              width: '100%',
              minHeight: 'clamp(50px, 13.6vw, 64px)',
              alignItems: 'flex-start',
              gap: 'clamp(4px, 1.7vw, 8px)',
              marginTop: 'clamp(-4px, -1vw, -2px)',
            }}
          >
            <button
              className="flex justify-center items-center"
              style={{
                padding: 'clamp(6px, 2.1vw, 10px)',
                gap: 'clamp(6px, 2.1vw, 10px)',
                alignSelf: 'stretch',
                borderRadius: 'clamp(4px, 1.7vw, 8px)',
                border: 'clamp(1px, 0.4vw, 2px) solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
              }}
              type="button"
              onClick={() => toggleAnswer(3)}
            >
              <span
                style={{
                  flex: 1,
                  color: '#524340',
                  textAlign: 'center',
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: 'clamp(14px, 3.8vw, 36px)',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Q: When are tokens claimable? 
              </span>
              <div
                style={{
                  width: 'clamp(10px, 3.1vw, 15px)',
                  height: 'clamp(10px, 3.1vw, 15px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleAnswer(3)
                }}
              >
                <img
                  src="/assets/FAQ/Arrow down-right.svg"
                  alt="Arrow down-right"
                  style={{
                    width: '100%',
                    height: '100%',
                    strokeWidth: '2px',
                    stroke: '#524340',
                  }}
                />
              </div>
            </button>
            
            <div
              className="flex justify-center items-center"
              style={{
                padding: openAnswers[3] ? 'clamp(6px, 2.1vw, 10px)' : '0px clamp(6px, 2.1vw, 10px)',
                gap: 'clamp(6px, 2.1vw, 10px)',
                alignSelf: 'stretch',
                borderRadius: 'clamp(4px, 1.7vw, 8px)',
                border: 'clamp(1px, 0.4vw, 2px) solid #695455',
                background: '#928D86',
                maxHeight: openAnswers[3] ? '1000px' : '0px',
                opacity: openAnswers[3] ? 1 : 0,
                overflow: openAnswers[3] ? 'visible' : 'hidden',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease-in-out',
                boxShadow: openAnswers[3] 
                  ? 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.25), inset 0 -2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 8px 0 rgba(0, 0, 0, 0.30)'
                  : 'none',
                cursor: openAnswers[3] ? 'pointer' : 'default',
              }}
              onClick={openAnswers[3] ? () => toggleAnswer(3) : undefined}
            >
              {openAnswers[3] && (
                <span
                  style={{
                    flex: 1,
                    color: '#524340',
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                    fontSize: 'clamp(10px, 4.2vw, 20px)',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  A: After the presale ends, claim directly from the official website.
                </span>
              )}
              {openAnswers[3] && (
                <div
                  style={{
                    width: 'clamp(10px, 3.1vw, 15px)',
                    height: 'clamp(10px, 3.1vw, 15px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleAnswer(3)
                  }}
                >
                  <img
                    src="/assets/FAQ/Arrow up-right.svg"
                    alt="Arrow up-right"
                    style={{
                      width: '100%',
                      height: '100%',
                      strokeWidth: '2px',
                      stroke: '#524340',
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

