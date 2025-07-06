import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAnim } from "../../hooks/useAnim";
import ProductCard from "../reusables/ProductCard";

const FeaturedProducts = () => {
  const featuredProductsRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [product2, setProducts2] = useState<any[]>([]);
  const [product3, setProducts3] = useState<any[]>([]);

  const fetchProducts = async (url: string, setter: React.Dispatch<React.SetStateAction<any[]>>) => {
    try {
      const response = await axios.get(url);
      setter(response.data.products);
    } catch (error) {
      console.error(`Error fetching products from ${url}:`, error);
    }
  };

  useEffect(() => {
    fetchProducts('https://dummyjson.com/products/category/home-decoration', setProducts);
    fetchProducts('https://dummyjson.com/products/category/beauty', setProducts2);
    fetchProducts('https://dummyjson.com/products/category/smartphones?limit=5', setProducts3);
  }, []);

  useAnim(featuredProductsRef);

  return (
    <div id='featured' ref={featuredProductsRef} className='w-full flex-row bg-transparent mt-5 mb-[100px] shadow-md'>
      <div className="flex md:justify-start justify-center">
        <h3 className="md:ml-11 ml-0 mt-3 text-primary font-semibold">F E A T U R E D</h3>
      </div>


      <div className="flex md:justify-start justify-center mt-3">
        <h1 className="md:ml-11 font-semibold md:text-3xl text-xl"> Discount on all interior decoration</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5 ml-10 mr-10">
        {products.map((product) => (
          <ProductCard key={product.id}
            id={product.id}
            title={product.title}
            image={product.thumbnail}
            price={product.price} />
        ))}
      </div>

      <div className="flex md:justify-start justify-center mt-20 md:mt-12">
        <h1 className="md:ml-11 font-semibold md:text-3xl text-xl">Women's corner</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5 ml-10 mr-10">
        {product2.map((product2) => (
          <ProductCard key={product2.id}
            id={product2.id}
            title={product2.title}
            image={product2.thumbnail}
            price={product2.price} />
        ))}
      </div>

      
      <div className="flex md:justify-start justify-center  mt-20 md:mt-12">
        <h1 className="md:ml-11 font-semibold md:text-3xl text-xl">Free Shiping On Smartphones</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5 ml-10 mr-10">
        {product3.map((product3) => (
          <ProductCard key={product3.id}
            id={product3.id}
            title={product3.title}
            image={product3.thumbnail}
            price={product3.price} />
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <Link to={'/products'}>
        <Button variant="text" color="error">All Products <ArrowRight /></Button>
        </Link>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default FeaturedProducts;
