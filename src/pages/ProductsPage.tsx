import Sidebar from "../components/Sidebar"
import { FilterProvider } from "../context/FilterContext"
import ProductsContent from "../components/ProductsContent"
import BackButton from "../components/BackButton"

const ProductsPage = () => {

  (function() {
    document.title = 'Shopzzila | Products'
  })();
  
  return (
    <div>
       <BackButton />
        <div className="w-full md:flex grid-cols-1 justify-center">
          <FilterProvider>
            <Sidebar />
            <ProductsContent />
          </FilterProvider>
        </div>
    </div>
  )
}

export default ProductsPage
