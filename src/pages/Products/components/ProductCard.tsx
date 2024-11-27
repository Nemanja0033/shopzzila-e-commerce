import { Link } from "react-router-dom"
import AddToCart from "../../Cart/components/AddToCart"
interface ProductCardProps {
    id: string,
    title: string,
    image: string,
    price: string,
}

const ProductCard: React.FC<ProductCardProps> = ({title, id, image, price}) => {
  return (
    <div className="flex flex-col shadow-md rounded-md p-4 h-full">
      <Link to={`/product/${id}`} className="flex-grow">
        <img src={image} alt={title} className="w-full h-32 object-cover mb-2 hover:scale-110 transition" />
        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
      </Link>
      <div className="mt-4 flex justify-center">
        <AddToCart title={title} image={image} price={price} />
      </div>
    </div>
  )
}


export default ProductCard
