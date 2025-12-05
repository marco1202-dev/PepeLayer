'use client'

import { useCallback } from 'react'
import { useRouter, usePathname } from 'next/navigation'

interface MenuItemProps {
  text: string
  width?: string
  height?: string
  scrollToId?: string
  href?: string
  animationType?: 'instant' | 'smooth' | 'spring' | 'dissolve'
}

function MenuItem({ text, width, height, scrollToId, href, animationType = 'smooth' }: MenuItemProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  const handleClick = useCallback(() => {
    if (href) {
      router.push(href)
      return
    }
    
    if (!scrollToId) return

    // If we're on the home page, scroll to the section
    if (pathname === '/') {
      const element = document.getElementById(scrollToId)
      if (element) {
        if (animationType === 'instant') {
          element.scrollIntoView({ behavior: 'instant' })
        } else if (animationType === 'smooth') {
          element.scrollIntoView({ behavior: 'smooth' })
        } else {
          // For spring and dissolve, use smooth behavior
          // The actual spring animation would require a library like framer-motion
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      // If we're on another page, navigate to home page with hash
      router.push(`/#${scrollToId}`)
      // Use a more reliable method to scroll after navigation
      const scrollToSection = () => {
        const element = document.getElementById(scrollToId)
        if (element) {
          const behavior = animationType === 'instant' ? 'instant' : 'smooth'
          element.scrollIntoView({ behavior: behavior as ScrollBehavior })
        } else {
          // If element not found yet, try again after a short delay
          setTimeout(scrollToSection, 50)
        }
      }
      // Wait for navigation to complete
      setTimeout(scrollToSection, 200)
    }
  }, [scrollToId, href, animationType, router, pathname])

  const buttonStyle: React.CSSProperties = {
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    background: 'transparent',
    border: 'none',
    padding: 0,
    cursor: (scrollToId || href) ? 'pointer' : 'default',
    transition: 'opacity 0.3s ease',
    position: 'relative',
  }

  if (width) buttonStyle.width = width
  if (height) buttonStyle.height = height

  const strokeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    WebkitTextStrokeWidth: '4px',
    WebkitTextStrokeColor: '#3F3431',
    WebkitTextFillColor: 'transparent',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    pointerEvents: 'none',
  }

  const fillStyle: React.CSSProperties = {
    position: 'relative',
    zIndex: 1,
    color: '#FFFFFF',
    WebkitTextFillColor: '#FFFFFF',
    fontFeatureSettings: "'liga' off, 'clig' off",
    fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  }

  return (
    <button
      onClick={handleClick}
      style={buttonStyle}
      type="button"
      className="navbar-menu-item"
    >
      <span className="navbar-menu-stroke" style={strokeStyle}>{text}</span>
      <span style={fillStyle}>{text}</span>
    </button>
  )
}

export default function NavbarMenuItems() {
  return (
    <div 
      className="flex justify-center items-center gap-[25px]"
      style={{
        padding: '10px 10px 8px 10px',
        border: '1px solid #000',
      }}
    >
      <MenuItem 
        text="HOME" 
        width="54px" 
        height="24px" 
        scrollToId="home" 
        animationType="instant" 
      />
      <MenuItem 
        text="About" 
        scrollToId="about" 
        animationType="spring" 
      />
      <MenuItem 
        text="HIGHTLIGHT" 
        scrollToId="highlight" 
        animationType="spring" 
      />
      <MenuItem 
        text="TOKENOMICS" 
        scrollToId="tokenomics" 
        animationType="spring" 
      />
      <MenuItem 
        text="ROADMAP" 
        scrollToId="roadmap" 
        animationType="spring" 
      />
      <MenuItem 
        text="HOW TO BUY?" 
        scrollToId="how-to-buy" 
        animationType="spring" 
      />
      <MenuItem 
        text="STAKING" 
        href="/staking" 
        animationType="dissolve" 
      />
      <MenuItem 
        text="FAQ" 
        scrollToId="faq" 
        animationType="spring" 
      />
    </div>
  )
}
