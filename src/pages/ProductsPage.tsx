import { FilterProvider } from "../context/FilterContext"
import ProductsContent from "../components/ProductsContent"
import BackButton from "../components/ui/BackButton"
import Sidebar from "../components/shared/Sidebar"

const ProductsPage = () => {
  
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
