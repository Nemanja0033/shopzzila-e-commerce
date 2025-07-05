import HeroBanner from '../components/sections/HeroBanner'
import PromoSection from '../components/sections/CreedsSection'
import Footer from '../components/shared/Footer'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Customers from '../components/sections/Customers'

const LandingPage = () => {

  return (
    <main>
      <HeroBanner />
      <FeaturedProducts />
      <PromoSection />
      <Customers />
      <Footer />
    </main>
  )
}

export default LandingPage
