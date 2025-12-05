export default function HowToBuy() {
  return (
    <section 
      id="how-to-buy"
      className="w-full bg-cover bg-center bg-no-repeat bg-gray-300 relative"
      style={{
        width: '1905px',
        height: '1086px',
        aspectRatio: '965/543',
        backgroundImage: "url('/assets/HowTo/HowToBuy.png')",
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // marginLeft: '-5px', // X -5 positioning
      }}
    >
      {/* Content section */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '623px', // 618 - (-5) = 623px (relative to HowToBuy section)
          top: '55px', // 5579 - 5524 = 55px (relative to HowToBuy section)
          width: '684px',
          height: '976px',
        //   border: '1px solid blue',
          position: 'relative',
        }}
      >
        {/* Header title */}
        <h2
          className="hidden md:block"
          style={{
            width: '684px',
            height: '175px',
            color: '#FFF',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '128px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            margin: 0,
          }}
        >
          How To Buy
        </h2>
        
        {/* Menu section */}
        <div
          className="absolute hidden md:flex flex-col"
          style={{
            left: '33px', // 651 - 618 = 33px (relative to content section)
            top: '175px', // 5754 - 5579 = 175px (relative to content section)
            width: '618px',
            height: '801px',
            padding: '42px 24px',
            gap: '25px',
            alignItems: 'flex-start',
            borderRadius: '8px',
            border: '8px solid #695455',
            background: '#524340',
            // boxShadow: '0 0 0 1px blue', // Debug border
          }}
        >
          {/* Menu item 1 */}
          <div
            className="hidden md:flex flex-col justify-center items-center flex-shrink-0"
            style={{
              width: '566px',
              height: '162px',
              padding: '10px',
              gap: '10px',
              border: '5px solid #695455',
              background: '#524340',
            }}
          >
            {/* Title */}
            <h3
              style={{
                color: '#928D86',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: 0,
              }}
            >
              1. Create a Wallet
            </h3>
            
            {/* Button */}
            <button
              className="hidden md:flex justify-center items-center"
              style={{
                width: '435px',
                padding: '10px',
                gap: '10px',
                borderRadius: '8px',
                border: '4px solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 20px 0 rgba(0, 0, 0, 0.60)',
                cursor: 'pointer',
              }}
              type="button"
            >
              <span
                style={{
                  color: '#524340',
                  textAlign: 'center',
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Download MetaMask or Trust Wallet your portal to the Empire.
              </span>
            </button>
          </div>
          
          {/* Menu item 2 */}
          <div
            className="hidden md:flex flex-col justify-center items-center flex-shrink-0"
            style={{
              width: '566px',
              height: '162px',
              padding: '10px',
              gap: '10px',
              border: '5px solid #695455',
              background: '#524340',
            }}
          >
            {/* Title */}
            <h3
              style={{
                color: '#928D86',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: 0,
              }}
            >
              2. Fund Your Wallet
            </h3>
            
            {/* Button */}
            <button
              className="hidden md:flex justify-center items-center"
              style={{
                width: '431px',
                padding: '10px',
                gap: '10px',
                borderRadius: '8px',
                border: '4px solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 20px 0 rgba(0, 0, 0, 0.60)',
                cursor: 'pointer',
              }}
              type="button"
            >
              <span
                style={{
                  width: '279px',
                  flexShrink: 0,
                  color: '#524340',
                  textAlign: 'center',
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Deposit ETH or USDT; ensure enough for gas fees.
              </span>
            </button>
          </div>
          
          {/* Menu item 3 */}
          <div
            className="hidden md:flex flex-col justify-center items-center flex-shrink-0"
            style={{
              width: '566px',
              height: '162px',
              padding: '10px',
              gap: '10px',
              border: '5px solid #695455',
              background: '#524340',
            }}
          >
            {/* Title */}
            <h3
              style={{
                color: '#928D86',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: 0,
              }}
            >
              3. Join the Presale
            </h3>
            
            {/* Button */}
            <button
              className="hidden md:flex justify-center items-center"
              style={{
                padding: '10px',
                gap: '10px',
                borderRadius: '8px',
                border: '4px solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 20px 0 rgba(0, 0, 0, 0.60)',
                cursor: 'pointer',
              }}
              type="button"
            >
              <span
                style={{
                  width: '475px',
                  color: '#524340',
                  textAlign: 'center',
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Visit pepelayer.com, connect your wallet, and purchase $PLR
              </span>
            </button>
          </div>
          
          {/* Menu item 4 */}
          <div
            className="hidden md:flex flex-col justify-center items-center flex-shrink-0"
            style={{
              width: '566px',
              height: '162px',
              padding: '10px',
              gap: '10px',
              border: '5px solid #695455',
              background: '#524340',
            }}
          >
            {/* Title */}
            <h3
              style={{
                color: '#928D86',
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
                margin: 0,
              }}
            >
              4. Claim After Presale
            </h3>
            
            {/* Button */}
            <button
              className="hidden md:flex justify-center items-center"
              style={{
                padding: '10px',
                gap: '10px',
                borderRadius: '8px',
                border: '4px solid #695455',
                background: '#928D86',
                boxShadow: '0 -2px 2px 0 rgba(169, 152, 138, 0.10) inset, 0 3px 3px 0 rgba(0, 0, 0, 0.30) inset, 0 4px 20px 0 rgba(0, 0, 0, 0.60)',
                cursor: 'pointer',
              }}
              type="button"
            >
              <span
                style={{
                  width: '396px',
                  color: '#524340',
                  textAlign: 'center',
                  fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
              >
                Return to claim your tokens — and join the Swamp Revolution.
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

