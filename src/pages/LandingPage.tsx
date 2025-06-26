import FeaturedProducts from '../components/FeaturedProducts'
import HeroBanner from '../components/HeroBanner'
import Customers from '../components/Customers'
import PromoSection from '../components/CreedsSection'
import Footer from '../components/Footer'

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
