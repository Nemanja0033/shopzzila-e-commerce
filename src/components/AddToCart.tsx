import Button from "@mui/material/Button";
import { ShoppingBag } from "lucide-react";
import { CartItem, ProductItem } from "../types";
import { useCart } from "../context/CartContext";

const AddToCart = ({ title, img, price, id }: ProductItem) => {
  const { dispatch } = useCart();

  const item = {
    title,
    img,
    price,
    id,
  };

  const addToCart = () => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  return (
    <div>
      <Button variant="outlined" color="error" onClick={addToCart}><ShoppingBag  color="red" width='100px' /></Button>
    </div>
  );
};

export default AddToCart;
