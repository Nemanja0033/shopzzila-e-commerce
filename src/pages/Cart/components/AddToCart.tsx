import Button from "@mui/material/Button";
import { useContext } from "react";
import { CartCounterContext } from "../../../context/CartCounterContext";

type Products = {
  title: string;
  image: string;
  price: string;
};

const AddToCart = ({ title, image, price }: Products) => {
  const { add } = useContext(CartCounterContext);

  const addToCart = () => {
    add();
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push({ title, image, price });
    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div>
      <Button color="error" onClick={addToCart}>Add To Cart</Button>
    </div>
  );
};

export default AddToCart;
