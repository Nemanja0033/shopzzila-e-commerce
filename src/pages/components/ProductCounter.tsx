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
        <span className="text-primary ml-2 text-center">{cartProducts.length}</span>
      ) : null}
    </>
  );
}

export default ProductsCounter;
