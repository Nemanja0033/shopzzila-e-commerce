import Sidebar from "../components/Sidebar"
import { FilterProvider } from "./components/FilterContext"
import ProductsContent from "./components/ProductsContent"

const ProductsPage = () => {
  return (
    <div>
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
