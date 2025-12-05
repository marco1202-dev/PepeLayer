import NavbarMenu from '@/components/Navbar'

export default function StakingSection() {
  return (
    <section 
      className="w-full bg-cover bg-center bg-no-repeat bg-gray-300 relative"
      style={{
        width: '1920px',
        height: '1280px',
        aspectRatio: '3/2',
        backgroundImage: "url('/assets/Staking/staking.png')",
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative z-10 h-full">
        <NavbarMenu />
      </div>
      
      {/* Group 1 */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '344px',
          top: '384px',
          width: '331px',
          height: '302px',
          backgroundImage: "url('/assets/Staking/Vector.png')",
          backgroundPosition: '50%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          // boxShadow: '3px 3px 35px 0 rgba(139, 82, 40, 0.65) inset',
        }}
      />
      
      {/* Group 2 */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '1190px',
          top: '384px',
          width: '331px',
          height: '302px',
          backgroundImage: "url('/assets/Staking/Vector.png')",
          backgroundPosition: '50%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          // border: '1px solid red',
        }}
      />
      
      {/* Group 3 */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '350px',
          top: '715px',
          width: '331px',
          height: '302px',
          backgroundImage: "url('/assets/Staking/Vector.png')",
          backgroundPosition: '50%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Grid section for Group 3 */}
      <div
        className="absolute hidden md:grid"
        style={{
          left: '378px', // 350 + 28 (same offset as Group 1: 372 - 344 = 28)
          top: '728px', // 715 + 13 (same offset as Group 1: 397 - 384 = 13)
          display: 'grid',
          width: '280px',
          height: '88px',
          padding: '10px',
          rowGap: '10px',
          columnGap: '10px',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          // border: '1px solid blue',
        }}
      >
        {/* Current Rewards text */}
        <span
          style={{
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Current Rewards
        </span>
        
        {/* 2858.44 Per ETH Block text */}
        <span
          style={{
            gridRow: '2 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          2858.44 Per ETH Block
        </span>
      </div>
      
      {/* Group 4 */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '767px',
          top: '698px',
          width: '331px',
          height: '302px',
          backgroundImage: "url('/assets/Staking/Vector.png')",
          backgroundPosition: '50%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Group 5 */}
      <div
        className="absolute hidden md:block"
        style={{
          left: '1218px',
          top: '728px',
          width: '331px',
          height: '302px',
          backgroundImage: "url('/assets/Staking/Vector.png')",
          backgroundPosition: '50%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Grid section for Group 4 */}
      <div
        className="absolute hidden md:grid"
        style={{
          left: '795px',
          top: '711px',
          display: 'grid',
          width: '189px',
          height: '88px',
          padding: '10px',
          rowGap: '10px',
          columnGap: '10px',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        }}
      >
        {/* % of Pool text */}
        <span
          style={{
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          % of Pool
        </span>
        
        {/* 0 % text */}
        <span
          style={{
            gridRow: '2 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          0 %
        </span>
      </div>
      
      {/* Second grid section for Group 4 */}
      <div
        className="absolute hidden md:grid"
        style={{
          left: '790px',
          top: '799px',
          display: 'grid',
          width: '240px',
          height: '88px',
          padding: '10px',
          rowGap: '10px',
          columnGap: '10px',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        }}
      >
        {/* Total Staked text */}
        <span
          style={{
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Total Staked
        </span>
        
        {/* 0.00000000 $PLR text */}
        <span
          style={{
            gridRow: '2 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          0.00000000 $PLR
        </span>
      </div>
      
      {/* Button for Group 4 */}
      <button
        className="absolute hidden md:flex"
        type="button"
        style={{
          left: '800px', // 767 + 33 (same offset as Group 1: 377 - 344 = 33)
          top: '910px', // 698 + 212 (same offset as Group 1: 596 - 384 = 212)
          display: 'flex',
          width: '217.193px',
          height: '59.536px',
          transform: 'rotate(-0.127deg)',
          padding: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '6px',
          border: '3px solid #695455',
          background: '#928D86',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            width: '184.786px',
            flexShrink: 0,
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
          Withdraw Stake Tokens
        </span>
      </button>
      
      {/* Grid section for Group 5 */}
      <div
        className="absolute hidden md:grid"
        style={{
          left: '1246px',
          top: '741px',
          display: 'grid',
          width: '189px',
          height: '88px',
          padding: '10px',
          rowGap: '10px',
          columnGap: '10px',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        }}
      >
        {/* Total Rewards text */}
        <span
          style={{
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Total Rewards
        </span>
        
        {/* 0 $PLR text */}
        <span
          style={{
            gridRow: '2 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          0 $PLR
        </span>
      </div>
      
      {/* Button for Group 5 */}
      <button
        className="absolute hidden md:flex"
        type="button"
        style={{
          left: '1251px',
          top: '940px',
          display: 'flex',
          width: '217.193px',
          height: '59.536px',
          transform: 'rotate(-0.127deg)',
          padding: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '6px',
          border: '3px solid #695455',
          background: '#928D86',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            width: '163px',
            flexShrink: 0,
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Claim Rewards
        </span>
      </button>
      
      {/* Grid section for Group 2 */}
      <div
        className="absolute hidden md:grid"
        style={{
          left: '1218px', // 1190 + 28 (same offset as Group 1: 372 - 344 = 28)
          top: '397px', // 384 + 13 (same offset as Group 1: 397 - 384 = 13)
          display: 'grid',
          width: '269px',
          height: '88px',
          padding: '10px',
          rowGap: '10px',
          columnGap: '10px',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          // border: '1px solid blue',
        }}
      >
        {/* Estimated Rewards text */}
        <span
          style={{
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Estimated Rewards
        </span>
        
        {/* 85% p/a text */}
        <span
          style={{
            gridRow: '2 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          85% p/a
        </span>
      </div>
      
      {/* Second text section for Group 2 */}
      <div
        className="absolute hidden md:grid"
        style={{
          left: '1238px', // Positioned next to the first grid section (1218 + 269 = 1487px)
          top: '519px', // Same level as the first grid section
          display: 'grid',
          width: '271px',
          height: '127px',
          padding: '10px',
          rowGap: '10px',
          columnGap: '10px',
          gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        }}
      >
        {/* Rewards rate is dynamic text */}
        <span
          style={{
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Rewards rate is dynamic
        </span>
        
        {/* Monthly = Rewards % / 12 text */}
        <span
          style={{
            gridRow: '2 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Monthly = Rewards % / 12
        </span>
        
        {/* Daily = Rewards % / 365 text */}
        <span
          style={{
            gridRow: '3 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Daily = Rewards % / 365
        </span>
      </div>
      
      {/* Button for Group 1 */}
      <button
        className="absolute hidden md:flex"
        type="button"
        style={{
          left: '377px',
          top: '596px',
          display: 'flex',
          width: '217.193px',
          height: '59.536px',
          transform: 'rotate(-0.127deg)',
          padding: '10px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '6px',
          border: '3px solid #695455',
          background: '#928D86',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
        }}
      >
        <span
          style={{
            width: '163px',
            flexShrink: 0,
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Buy and Stake
        </span>
      </button>
      
      {/* Grid section for Group 1 */}
      <div
        className="absolute hidden md:grid"
        style={{
          left: '372px',
          top: '397px',
          display: 'grid',
          width: '189px',
          height: '88px',
          padding: '10px',
          rowGap: '10px',
          columnGap: '10px',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        }}
      >
        {/* Staked Balance text */}
        <span
          style={{
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Staked Balance
        </span>
        
        {/* 0 $PLR text */}
        <span
          style={{
            gridRow: '2 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          0 $PLR
        </span>
      </div>
      {/* Grid section for Group 1 */}
      <div
        className="absolute hidden md:grid"
        style={{
          left: '367px',
          top: '485px',
          display: 'grid',
          width: '189px',
          height: '88px',
          padding: '10px',
          rowGap: '10px',
          columnGap: '10px',
          gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        }}
      >
        {/* Staked Balance text */}
        <span
          style={{
            gridRow: '1 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          Your Stakeable
        </span>
        
        {/* 0 $PLR text */}
        <span
          style={{
            gridRow: '2 / span 1',
            gridColumn: '1 / span 1',
            color: '#524340',
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          0 $PLR
        </span>
      </div>
    </section>
  )
}

