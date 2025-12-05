'use client'

import { useState } from 'react'

export default function NavbarActions() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)

  const handleConnectWallet = async () => {
    // Check if MetaMask or other wallet is available
    if (typeof window !== 'undefined' && (window as any).ethereum) {
      try {
        // Request account access
        const accounts = await (window as any).ethereum.request({
          method: 'eth_requestAccounts',
        })
        
        if (accounts && accounts.length > 0) {
          setWalletAddress(accounts[0])
        }
      } catch (error) {
        console.error('Error connecting wallet:', error)
      }
    } else {
      // Fallback: simulate wallet connection for development
      // In production, you would show an error or prompt to install MetaMask
      setWalletAddress('0x42a9b8c3d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1')
    }
  }

  const truncateAddress = (address: string) => {
    if (address.length <= 10) return address
    return `0x${address.slice(2, 6)}...`
  }

  const displayText = walletAddress 
    ? `Connect ${truncateAddress(walletAddress)}`
    : 'Connect Wallet'

  return (
    <div 
      className="flex justify-center items-center gap-[10px] flex-1 rounded-md border-[3px]"
      style={{
        height: '64.22px',
        padding: '10px',
        borderColor: '#695455',
        backgroundColor: '#928D86',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
      }}
    >
      <button
        onClick={handleConnectWallet}
        className="flex justify-center items-center"
        style={{
          width: '163px',
          color: '#524340',
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: 'var(--font-irish-grover), "Irish Grover", cursive',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: 'normal',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        {displayText}
      </button>
    </div>
  )
}

