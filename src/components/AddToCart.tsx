import Button from "@mui/material/Button";
import { ShoppingBag } from "lucide-react";
import { Products } from "../types";

const AddToCart = ({ title, image, price }: Products) => {
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push({ title, image, price });
    localStorage.setItem("cart", JSON.stringify(existingCart));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div>
      <Button variant="outlined" color="error" onClick={addToCart}><ShoppingBag  color="red" width='100px' /></Button>
    </div>
  );
};

export default AddToCart;
