import Button from "@mui/material/Button";
import { Trash } from "lucide-react";
import { useRef  } from "react";
import BackButton from "../components/ui/BackButton";
import { useAnim } from "../hooks/useAnim";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types";

const CartPage = () => {
  const { state, dispatch } = useCart();
  console.log(state.items)
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  // const totalSum = state.items.reduce((acc: number, product: CartItem) => acc + product.price, 0);

  useAnim(sidebarRef);

  return (
    <div className="flex-row">
      <BackButton />
      <h1 className="text-center text-2xl font-semibold mt-12">C A R T</h1>
      <div className="grid place-items-center">
        {state.items.length > 0 ? (
          <div className="w-full md:w-1/5 flex flex-wrap justify-center">
            {state.items.map((item: CartItem, index: number | null | undefined) => (
              <div className="shadow-md rounded-md m-2" key={index}>
                <Button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id})} color="error"><Trash /></Button>
                <h2 className="font-semibold text-xl text-center mt-3">{item.title}</h2>
                <div className="flex justify-center w-full items-center gap-3">
                  <button onClick={() => dispatch({ type: "INCREMENT", payload: item.id})} className="bg-gray-50 rounded-full p-3 hover:bg-gray-100 transition-all w-12">+</button>
                  <span className="text-xl">{item.amount}</span>
                  <button onClick={() => dispatch({ type: "DECREMENT", payload: item.id})} className="bg-gray-50 rounded-full p-3 hover:bg-gray-100 transition-all w-12">-</button>
                </div>
                <img src={item.img} alt={item.title} />
                <p className="font-bold ml-4 text-center text-xl">${item.price}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="font-semibold text-4xl mt-20 text-center">No Products Yet!</p>
        )}
      </div>
    
      {/* <div className="flex justify-center"> */}
        {/* {state.items.length > 0 ?  */}
          {/* // <div ref={sidebarRef} className="w-full flex justify-center items-end shadow-md"> */}
            {/* <div className='mt-3'> */}
              {/* <h1 className="font-semibold text-center text-4xl md:text-2xl">Order Summary</h1> */}
              {/* <br /> */}
              {/* <h3 className="text-start font-semibold text-2xl md:text-md mt-5 md:mt-0">Total ({state.items.length}) Items</h3> */}
              {/* <br /> */}
              {/* <div className="mt-5 md:mt-0 ml-5 md:ml-0 mb-3 flex justify-center"> */}
               {/* <Link  to={`/purchase/all`}> */}
                {/* <Button variant="contained" color="error" size="large">Checkout ${totalSum.toFixed(2)}</Button> */}
               {/* </Link> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> : ''} */}
      {/* </div> */}
    </div>
  );
};

export default CartPage;