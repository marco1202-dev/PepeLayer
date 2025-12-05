export default function Footer() {
  return (
    <footer
      className="w-full hidden md:flex relative"
      style={{
        display: 'flex',
        width: '1905px',
        height: '509px',
        padding: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        border: '4px solid #524340',
        background: '#928D86',
        boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset',
        position: 'relative',
      }}
    >
      {/* Footer Logo */}
      <div
        style={{
          width: '261px',
          height: '212px',
          flexShrink: 0,
          backgroundImage: "url('/assets/Footer/Footer_logo.png')",
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Footer Text */}
      <span
        style={{
          color: '#524340',
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        PEPELayer is not just another coin in the swamp
      </span>
      
      {/* Footer Text 2 */}
      <span
        style={{
          width: '717px',
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
        It is the Empire of Layers — the living civilization that turns culture into code.
      </span>
      
      {/* Footer Text 3 */}
      <span
        style={{
          color: '#FFF',
          textAlign: 'center',
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
          fontSize: '36px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
        }}
      >
        "Ave Pepe. Ave the Empire."
      </span>
      
      {/* Social Group Section */}
      <div
        className="hidden md:flex justify-between items-center"
        style={{
          display: 'flex',
          width: '369px',
          height: '50.25px',
          flexShrink: 0,
        //   border: '1px solid blue',
          gap: '10px',
        }}
      >
        {/* Frame 1 */}
        <div
          className="hidden md:flex"
          style={{
            display: 'flex',
            width: '51.644px',
            height: '49.368px',
            padding: '10px 10px 10px 9px',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '4px',
            border: '2px solid #695350',
            background: '#928D86',
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
          }}
        >
          <img
            src="/assets/Footer/Vector.svg"
            alt="Social icon"
            style={{
              flex: '1 0 0',
              alignSelf: 'stretch',
              fill: '#524340',
            }}
          />
        </div>
        
        {/* Frame 2 */}
        <div
          className="hidden md:flex"
          style={{
            display: 'flex',
            width: '51.644px',
            height: '49.368px',
            padding: '10px 10px 10px 9px',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '4px',
            border: '2px solid #695350',
            background: '#928D86',
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
          }}
        >
          <img
            src="/assets/Footer/Vector 1.svg"
            alt="Social icon"
            style={{
              flex: '1 0 0',
              alignSelf: 'stretch',
              fill: '#524340',
            }}
          />
        </div>
        
        {/* Frame 3 */}
        <div
          className="hidden md:flex"
          style={{
            display: 'flex',
            width: '51.644px',
            height: '49.368px',
            padding: '10px 10px 10px 9px',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '4px',
            border: '2px solid #695350',
            background: '#928D86',
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
          }}
        >
          <img
            src="/assets/Footer/Vector 2.svg"
            alt="Social icon"
            style={{
              flex: '1 0 0',
              alignSelf: 'stretch',
              fill: '#524340',
            }}
          />
        </div>
        
        {/* Frame 4 */}
        <div
          className="hidden md:flex"
          style={{
            display: 'flex',
            width: '51.644px',
            height: '49.368px',
            padding: '10px 10px 10px 9px',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '4px',
            border: '2px solid #695350',
            background: '#928D86',
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
          }}
        >
          <img
            src="/assets/Footer/Vector 3.svg"
            alt="Social icon"
            style={{
              flex: '1 0 0',
              alignSelf: 'stretch',
              fill: '#524340',
            }}
          />
        </div>
      </div>
      
      {/* Copyright Text */}
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
        © 2025 PEPELayer. All Rights Reserved.
      </span>
      
      {/* Footer Logo 2 - absolutely positioned */}
      <div
        className="absolute hidden md:block"
        style={{
          right: '-45px', // Positioned to align with right edge, extending slightly beyond footer (1905 - 1230 - 714 = -39px overflow)
          top: '-212px', // Y 9203 relative to page, Footer section starts at Y 9408, so 9203 - 9408 = -205px
          width: '714px',
          height: '714px',
          aspectRatio: '1/1',
          backgroundImage: "url('/assets/Footer/Logo.png')",
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Knife image - absolutely positioned */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '581px', // Adjusted: 750 - 68.719 = 681.281px to compensate for negative backgroundPosition
          top: '20px', // Adjusted: 16 - 211.735 = -195.735px to compensate for negative backgroundPosition
          width: '327px', // 202 * 1.61909 = ~327px to accommodate backgroundSize
          height: '327px', // 111 * 2.94836 = ~327px to accommodate backgroundSize
          transform: 'rotate(-90deg)',
          overflow: 'visible',
          zIndex: 10,
          pointerEvents: 'none',
          transformOrigin: 'center center',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: "url('/assets/Footer/Knife.png')",
            backgroundPosition: '0px 0px',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      
      {/* Knife image 2 - absolutely positioned */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '990px', // Adjusted: 1084 - 68.719 = 1015.281px to compensate for negative backgroundPosition
          top: '20px', // Adjusted similar to first knife image
          width: '327px', // 202.131 * 1.61909 = ~327px to accommodate backgroundSize
          height: '327px', // 111 * 2.94836 = ~327px to accommodate backgroundSize
          transform: 'rotate(-90deg)',
          overflow: 'visible',
          zIndex: 10,
          pointerEvents: 'none',
          transformOrigin: 'center center',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: "url('/assets/Footer/Knife.png')",
            backgroundPosition: '0px 0px',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </footer>
  )
}

