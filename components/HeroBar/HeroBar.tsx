export default function HeroBar() {
  return (
    <section 
      className="w-full h-[47.412px] md:h-[140px] border-[4px] overflow-hidden flex items-center justify-center"
      style={{
        borderColor: '#695455',
        backgroundColor: '#928D86',
      }}
    >
      <div
        className="hero-bar-scroll"
        style={{
          width: 'fit-content',
          height: '82px',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        <div
          className="inline-flex items-center"
          style={{
            padding: '4px 31.861px 0 0',
            gap: '3.398px',
          }}
        >
          <span
            style={{
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '64px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Not for one frog to reach the moon, but for all frogs to rise
          </span>
          <div
            style={{
              width: '59.74px',
              height: '60px',
              backgroundImage: "url('/assets/About/Herobarlogo.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
        {/* Duplicate for seamless loop */}
        <div
          className="inline-flex items-center"
          style={{
            padding: '4px 31.861px 0 0',
            gap: '3.398px',
          }}
        >
          <span
            style={{
              color: '#FFF',
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
              fontSize: '64px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Not for one frog to reach the moon, but for all frogs to rise
          </span>
          <div
            style={{
              width: '59.74px',
              height: '60px',
              backgroundImage: "url('/assets/About/Herobarlogo.png')",
              backgroundPosition: '50%',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </div>
      </div>
    </section>
  )
}

