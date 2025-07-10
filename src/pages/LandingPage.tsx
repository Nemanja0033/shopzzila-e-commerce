import HeroBanner from '../components/sections/HeroBanner'
import PromoSection from '../components/sections/CreedsSection'
import Footer from '../components/shared/Footer'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import CustomersSection from '../components/sections/CustomersSection'

const LandingPage = () => {
  return (
    <main className='grid'>
      <HeroBanner />
      <FeaturedProducts />
      <div className='mb-20'>
        <PromoSection />
      </div>
      <div>
        <CustomersSection />
      </div>
      <Footer />
    </main>
  )
}

export default LandingPage
