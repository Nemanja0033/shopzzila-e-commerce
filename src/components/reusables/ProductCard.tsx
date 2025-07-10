import { Link } from "react-router-dom"
import { ProductCardProps } from "../../types"

const ProductCard: React.FC<ProductCardProps> = ({title, id, image, price}) => {
  return (
    <div className="grid place-items-center shadow-md  rounded-md p-4 h-full">
      <Link to={`/product/${id}`} className="flex-grow">
      <div className="h-42">
        <img src={image} alt={title} className="w-full h-full object-cover mb-6 hover:scale-105 transition-all" />
      </div>
        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
      </Link>
    </div>
  )
}

export default ProductCard
