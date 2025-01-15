import FeaturedProducts from '../components/FeaturedProducts'
import HeroBanner from '../components/HeroBanner'
import Customers from '../components/Customers'
import PromoSection from '../components/CreedsSection'
import Footer from '../components/Footer'

const LandingPage = () => {

  (function() {
    document.title = 'Shopzzila'
  })();
  
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <PromoSection />
      <Customers />
      <Footer />
    </>
  )
}

export default LandingPage
