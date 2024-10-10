import Button from "@mui/material/Button"
import { Link } from "react-router-dom"


interface ProductCardProps {
    id: string,
    title: string,
    image: string,
    price: number,
}

const ProductCard: React.FC<ProductCardProps> = ({title, id, image, price}) => {
  return (
    <div className="border p-4 roundend ">
      <Link to={`/product/${id}`}>
      
      <img src={image} alt={title} className="w-full h-32 object-cover mb-2" />

      <h2 className="font-bold text-gray-700">{title}</h2>
      <p>${price}</p>
      </Link>
    </div>
  )
}

export default ProductCard
