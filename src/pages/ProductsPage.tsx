import { FilterProvider } from "../context/FilterContext"
import ProductsContent from "../components/ProductsContent"
import BackButton from "../components/ui/BackButton"
import Sidebar from "../components/shared/Sidebar"

const ProductsPage = () => {
  
  return (
    <div>
       <BackButton />
        <div className="w-full md:flex grid grid-cols-1 md:p-20 p-5 justify-center gap-5">
          <FilterProvider>
            <Sidebar />
            <ProductsContent />
          </FilterProvider>
        </div>
    </div>
  )
}

export default ProductsPage
