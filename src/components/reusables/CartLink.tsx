import { ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartLink = () => {
    const { state } = useCart();
    const totalItemsInCart = state.items.reduce((total, item) => total + item.amount, 0);
  return (
    <Link to={'/cart'} className='flex gap-3 cursor-pointer'>
        <ShoppingBag className="hover:text-primary" />
        <span className="relative right-5 bottom-1 text-xs bg-red-500 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center">{totalItemsInCart}</span>
    </Link>
  )
}

export default CartLink