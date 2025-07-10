import Button from "@mui/material/Button";
import { ShoppingBag } from "lucide-react";
import { ProductItem } from "../types";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

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
    toast.success(`${title} added to cart!`);
  };

  return (
    <div>
      <Button variant="outlined" color="error" onClick={addToCart}><ShoppingBag  color="red" width='100px' /></Button>
    </div>
  );
};

export default AddToCart;
