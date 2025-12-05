'use client'

import { useState, useEffect } from 'react'
import NavbarMenu from '@/components/Navbar'
import { useRouter } from 'next/navigation'

export default function WhitePaper() {
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
      className="w-full relative overflow-hidden"
      style={{
        height: `${5084 * scale}px`,
        background: '#2C4D74',
      }}
    >
      {/* Responsive wrapper container - scales all content proportionally */}
      <div
        style={{
          width: `${baseWidth}px`,
          height: '5084px', // Base height: footer image ends at 4124px + 960px = 5084px
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
      <div className="relative z-10 h-full">
        {/* <NavbarMenu /> */}
      </div>
      
      {/* Arrow left-circle - Back button */}
      <button
        className="absolute hidden md:flex justify-center items-center"
        type="button"
        onClick={() => router.push('/')}
        style={{
          left: '119px',
          top: '56px',
          width: '60px',
          height: '60px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          zIndex: 20,
          padding: 0,
        }}
      >
        <img
          src="/assets/White/Arrow left-circle.svg"
          alt="Back"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </button>
      
      {/* Header title section */}
      <div
        className="absolute hidden md:flex"
        style={{
          left: '711px', // 537 * (1905/1440) = 711px (scaled from 1440px to 1905px)
          top: '21px',
          display: 'flex',
          width: '484px', // 366 * (1905/1440) = 484px (scaled from 1440px to 1905px)
          height: '209px',
          padding: '10px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
          // border: '1px solid red',
        }}
      >
        {/* White Paper text */}
        <span
          style={{
            color: '#FFF',
            textAlign: 'center',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '64px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          White Paper
        </span>
        
        {/* Pepe image */}
        <div
          style={{
            width: '254px',
            height: '86px',
            flexShrink: 0,
            aspectRatio: '127/43',
            backgroundImage: "url('/assets/White/Pepe.png')",
            backgroundPosition: '-37.956px -19.846px',
            backgroundSize: '129.887% 164.103%',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      
      {/* Content section */}
      <div
        className="absolute hidden md:grid"
        style={{
          left: '351.5px', // Centered: (1905 - 1202) / 2 = 351.5px
          top: '230px', // Positioned below header title section (21px + 209px + some spacing)
          display: 'grid',
          width: '1202px', // Keep as specified
          height: '4042.158px', // Keep as specified
          padding: '50px 20px', // 50px * 1.3229 = 66px, 20px * 1.3229 = 26px (scaled from 1440px to 1905px)
          rowGap: '10px', // 10px * 1.3229 = 13px (scaled)
          columnGap: '10px', // 10px * 1.3229 = 13px (scaled)
          gridTemplateRows: 'repeat(39, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          borderRadius: '16px', // 16px * 1.3229 = 21px (scaled)
          border: '8px solid #695455', // 8px * 1.3229 = 11px (scaled)
          background: '#524340',
          zIndex: 10, // Ensure content section appears above footer image
        }}
      >
        {/* Prologue text - Row 1 */}
        <div
          style={{
            height: '349px',
            alignSelf: 'MIN',
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
            // border: '1px solid red',
          }}
        >
          Prologue — The Birth of Layer Civilization
          <br /><br />
          From the depths of the primordial swamp, where greed and illusion once reigned, a single frog rose above the ruins. He saw that true ascension was not to leap, but to build. Forging order from chaos, he created the first chain-powered warhorse and the Scepter of Layer — symbols of strength and law. With these, he united the lost tribes, founded the Empire of Layerium, and declared a creed that would echo through eternity:
          <br /><br />
          "Not for one frog to reach the moon, but for all frogs to rise."
          <br /><br />
          Thus, PepeLayer became more than a name — it became the will of civilization itself.
          <br /><br />
          A legend of creation, order, and endless ascent.
        </div>
        
        {/* What is PEPELayer? heading - Row 4 */}
        
        <div
          style={{
            marginTop: "60px",
            gridRow: '4 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          What is PEPELayer?
        </div>
        
        {/* PEPELayer description - Row 5 */}
        <div
          style={{
            marginTop: "60px",
            height: '122px',
            alignSelf: 'MIN',
            gridRow: '5 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          PEPELayer is more than a network — it is the foundation of a new digital empire. <br></br> Born from chaos, it carries the creative spark that forged the Empire of Layerium.
          <br />
          Technically, it is a next-generation Ethereum Layer 2 built for speed, scalability, and permanence, leveraging rollup-based architecture (Optimistic and ZK-hybrid) to ensure high throughput and Ethereum-level security. <br /> Philosophically, it embodies PepeLayer's creed — building order where others chase illusion.
          <br />
          ⚡ Blazing Speed — Transactions settle nearly instantly through optimized rollups.
          <br /><br />
          💸 Low Fees — Gas reduced to droplets, making DeFi accessible to all.
          <br /><br />
          🔒 Ethereum Security — Fully inherits Ethereum consensus and data availability.
          <br /><br />
          👥 Community Governance — Holders form the Senate of Layerium, shaping upgrades and policy.
          <br /><br />
          PEPELayer turns myth into mechanism — transforming belief into a living civilization of code.
        </div>
        
        {/* Token Overview heading - Row 10 */}
        <div
          style={{
            marginTop: "60px",
            gridRow: '10 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Token Overview
        </div>
        
        {/* Token details - Row 11 */}
        <div
          style={{
            marginTop: "60px",
            height: '122px',
            alignSelf: 'start',
            gridRow: '11 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          ● Name: PEPELayer
          <br />
          ● Ticker: $PLR
          <br />
          ● Decimals: 18
          <br />
          ● Total Supply: 10,000,000,000
          <br />
          ● Chain: Ethereum (ERC-20)
          <br />
          ● Utility of $PLR:
          <br />
          Payment for network and bridge fees
          <br />
          Staking rewards for loyal holders DAO governance rights within Layerium Senate Fuel for dApps, NFTs, and ecosystem integrations           $PLR — the coin of the Layerium Empire, circulating through every chain of its realm.
        </div>

        {/* Tokenomics heading - Row 14 */}
        <div
          style={{
            marginTop: "40px",
            gridRow: '14 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Tokenomics — The Economy of the <span style={{ color: '#DC143C' }}>Empire</span>
        </div>
        
        
        {/* Tokenomics - Row 15 */}
        <div
          style={{
            marginTop: "50px",
            height: '486px',
            gridRow: '15 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Total Supply: 10,000,000,000 $PLR In the Empire of Layerium, $PLR is the pulse of civilization — each portion forged with intent, sustaining expansion and governance.
          <br /><br />
          ⚔️ Presale — 30%
          <br />
          The Founding Tributes — early believers who ignite the Empire's rise.
          <br /><br />
          🛡️ Staking & Rewards — 25%
          <br />
          The Legion's Honor — rewarding devotion and long-term participation.
          <br /><br />
          🏗️ Ecosystem Development — 15%
          <br />
          The Architects' Fund — empowering builders, dApps, and alliances.
          <br /><br />
          💧 Liquidity & Listings — 10%
          <br />
          The Market's Flow — enabling smooth DEX & CEX expansion.
          <br /><br />
          🔥 Marketing — 8%
          <br />
          The Call to the World — spreading the Empire's vision across chains.
          <br /><br />
          🐸 Community Incentives — 3.5%
          <br />
          The Voice of the People — rewarding participation and referrals.
          <br /><br />
          👑 Team — 2.5%
          <br />
          The Eternal Oath — locked for 24 months, proving long-term unity.
          <br /><br />
          🏛️ Reserve — 6%
          <br />
          The Treasury of Continuity — ensuring sustainability and opportunity.
          <br /><br />
          Every token carries a fragment of destiny — economy, army, and law beating within a single chain.
        </div>
        
        {/* Roadmap heading - Row 22 */}
        <div
          style={{
            marginTop: "10px",
            gridRow: '23 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          🗺️: Roadmap — The Chronicle of Layerium
        </div>
        
        {/* Roadmap content - Row 23 */}
        <div
          style={{
            marginTop: "30px",
            height: '528px',
            alignSelf: 'start',
            gridRow: '24 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          I. The Dream in the Swamp — Age of Illusion <br></br> Frogs dreamed of unreachable moons. Amid chaos, one saw beyond — the first spark of order.
          <br /><br />
          II. The Awakening — The Founding Flam <br></br> He found strength not in flight, but foundation. Thus, the first Layer was born — for all to rise.
          <br /><br />
          III. The First Leap — Dawn of the Builder <br></br> He rose from the swamp; his leap carried the tribes. The age of construction began.
          <br /><br />
          IV. Building the Bridges — Age of Expansion <br></br> He forged links between worlds and chains, extending the Empire's reach.
          <br /><br />
          V. The Rise of the Empire — Order of Layerium <br></br> Temples rose, legions formed, and the frogs spoke with one voice — code became law.
          <br /><br />
          VI. The Eternal Form — Age of Ascension <br></br>No longer a meme, but a living chain.
          <br />
          PEPELayer became not a token, but a civilization.
          <br /><br />
          "From mud to mechanism, from ribbit to empire — <br></br>this is not evolution; it is ascension."
        </div>
        
        {/* FAQ heading - Row 29 */}
        <div
          style={{
            marginTop: "60px",
            height: '71px',
            alignSelf: 'start',
            gridRow: '29 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          ❓ FAQ
        </div>
        
        {/* FAQ content - Row 30 */}
        <div
          style={{
            marginTop: "40px",
            gridRow: '30 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Q: What is PEPELayer? 
          <br></br>A: An Ethereum Layer 2 blockchain built for scalability, low fees, and community empowerment.
          <br /><br />
          Q: How does it differ from meme projects?
          <br></br> A: While inspired by the frog that symbolizes internet culture, PEPELayer is built with real Layer 2 technology, ensuring practical utility beyond hype.
          <br /><br />
          Q: How can I participate in the presale?
          <br />
          1. Download MetaMask or Trust Wallet
          <br /><br></br>
          2. Fund with ETH or USDT
          <br />3.<br></br>
          4. Connect to pepelayer.com
          <br /><br></br>
          5. Purchase $PLR and stake for rewards
          <br /><br />
          Q: When are tokens claimable? 
          <br></br>After presale concludes, claim directly via the official website.
        </div>
        
        {/* Vision heading - Row 35 */}
        <div
          style={{
            gridRow: '35 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Vision — The Empire's Purpose
        </div>
        
        {/* Vision content - Row 36 */}
        <div
          style={{
            height: '72px',
            gridRow: '36 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          PEPELayer is more than a narrative — it is the infrastructure of a new digital civilization. It transforms the raw energy of meme culture into real technological progress, bridging the gap between entertainment and engineering, culture and code. From the swamp of chaos emerges not another fleeting token, but a sustainable Layer 2 organism — fast, secure, scalable, and alive.
          <br /><br />
          PEPELayer is the foundation upon which the next era of Ethereum will be built — <br></br> not a rocket's launch, but a civilization's rise.
        </div>
        
        {/* Disclaimer heading - Row 38 */}
        <div
          style={{
            gridRow: '38 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '48px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          ⚠️ Disclaimer
        </div>
        
        {/* Disclaimer text - Row 39 */}
        <div
          style={{
            height: '36px',
            gridRow: '39 / span 1',
            gridColumn: '1 / span 1',
            justifySelf: 'stretch',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          $PLR is not an investment instrument, but a community-driven utility token within the PEPELayer ecosystem. It serves to power the network, reward its participants, and sustain its governance. Participation may be restricted by local laws or jurisdictions. Always conduct your own research and comply with regulations applicable to you. Cryptocurrency markets are volatile — participate only with funds you can afford to risk. All contracts will be audited before deployment to ensure transparency and trust.
        </div>
      </div>
      
      {/* White image */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '0px',
          top: '4124px', // Y 4124 relative to page, WhitePaper section starts at Y 0, so 4124 - 0 = 4124px
          width: '1920px',
          height: '960px',
          aspectRatio: '3/2',
          backgroundImage: "url('/assets/White/White.png')",
          backgroundPosition: '50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 1, // Lower z-index so content section appears above
        }}
      />
      </div>
      {/* End of responsive wrapper */}
    </section>
  )
}

