import HeroSection from '@/components/HeroSection'
import HeroBar from '@/components/HeroBar'
import AboutSection from '@/components/AboutSection'
import FeatureSummary from '@/components/FeatureSummary'
import Tokenomics from '@/components/Tokenomics'
import RoadMap from '@/components/RoadMap'
import HowToBuy from '@/components/HowToBuy'
import FAQ from '@/components/FAQ'
import Video from '@/components/Video'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ overflowX: 'hidden' }}>
      <HeroSection />
      <HeroBar />
      <AboutSection />
      <FeatureSummary />
      <Tokenomics />
      <RoadMap />
      <HowToBuy />
      <FAQ />
      <Video />
      <Footer />
    </main>
  )
}
