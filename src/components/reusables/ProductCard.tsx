import { Link } from "react-router-dom"
import { ProductCardProps } from "../../types"

const ProductCard: React.FC<ProductCardProps> = ({title, id, image, price}) => {
  return (
    <div className="flex flex-col shadow-md rounded-md p-4 h-full">
      <Link to={`/product/${id}`} className="flex-grow">
        <img src={image} alt={title} className="w-full h-42 object-cover mb-6 hover:scale-110 transition" />
        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
      </Link>
    </div>
  )
}

export default ProductCard
