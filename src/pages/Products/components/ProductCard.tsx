import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { addToCart } from "../../Cart/CartPage"
interface ProductCardProps {
    id: string,
    title: string,
    image: string,
    price: string,
}

const ProductCard: React.FC<ProductCardProps> = ({title, id, image, price}) => {
  return (
    <div className="border p-4 roundend hover:scale-110  transition-all duration-200">
      <Link to={`/product/${id}`}>
      
      <img src={image} alt={title} className="w-full h-32 object-cover mb-2" />

      <h2 className="font-bold text-gray-700">{title}</h2>
      <p>${price}</p>
      </Link>
      <Button color="error" onClick={() => addToCart({title, image, price})}>Add To Cart</Button>
    </div>
  )
}

export default ProductCard
