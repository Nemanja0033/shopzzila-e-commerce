import { useEffect, useState } from "react";

const ProductsCounter = () => {
  const [cartProducts, setCartProducts] = useState(() => JSON.parse(localStorage.getItem('cart') || '[]'));

  useEffect(() => {
    const updateCartProducts = () => {
      const products = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartProducts(products);
    };

    updateCartProducts();

    window.addEventListener('storage', updateCartProducts);

    return () => {
      window.removeEventListener('storage', updateCartProducts);
    };
  }, []);

  return (
    <>
      {cartProducts.length > 0 ? (
       <div className="w-[20px] h-[25px] roundend-xl bg-primary text-white text-center rounded-2xl"> <span>{cartProducts.length}</span></div>
      ) : null}
    </>
  );
}

export default ProductsCounter;
