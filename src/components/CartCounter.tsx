import { useContext } from "react";
import { CartCounterContext } from "../context/CartCounterContext";

const CartCounter = () => {

    const {amount} = useContext(CartCounterContext)

    return (
        <>
          {amount !== 0 ? (
            <div className="w-[20px] h-[25px]  bg-primary text-white text-center rounded-2xl">
              <span>{amount}</span>
            </div>
          ) : null}
        </>
      );
}

export default CartCounter