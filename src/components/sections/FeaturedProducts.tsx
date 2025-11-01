import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../reusables/ProductCard";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

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
  }, []);


  return (
    <motion.div initial={{ y: 200, opacity: 0}} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1}}  viewport={{ once: true }} id='featured' className='w-full flex-row bg-transparent mt-5 mb-[100px] shadow-md'>
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

      <div className="flex justify-center mt-3">
        <Link to={'/products'}>
        <Button variant="text" color="error">All Products <ArrowRight /></Button>
        </Link>
      </div>
      <br />
    </motion.div>
  );
};

export default FeaturedProducts;
