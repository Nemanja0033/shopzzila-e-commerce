import HeroBanner from '../components/sections/HeroBanner'
import PromoSection from '../components/sections/CreedsSection'
import Footer from '../components/shared/Footer'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import CustomersSection from '../components/sections/CustomersSection'
import { useTheme } from '../context/ThemeContext'

const LandingPage = () => {
  const { theme } = useTheme()
  
  return (
    <main className='grid'>
      <HeroBanner />
      <FeaturedProducts />
      <div className='mb-20'>
        <PromoSection />
      </div>
      <div className={`${theme === 'light' ? 'bg-gray-50' : 'bg-transparent'}`}>
        <CustomersSection />
      </div>
      <div className={`${theme === 'light' ? 'bg-gray-50' : 'bg-transparent'}`}>
        <Footer />
      </div>
    </main>
  )
}

export default LandingPage
