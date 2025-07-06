import HeroBanner from '../components/sections/HeroBanner'
import PromoSection from '../components/sections/CreedsSection'
import Footer from '../components/shared/Footer'
import FeaturedProducts from '../components/sections/FeaturedProducts'

const LandingPage = () => {
  return (
    <main>
      <HeroBanner />
      <FeaturedProducts />
      <PromoSection />
      <Footer />
    </main>
  )
}

export default LandingPage
