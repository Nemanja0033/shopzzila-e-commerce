import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import gsap from "gsap";

const FeaturedProducts = () => {
  const featuredProductsRef = useRef<HTMLDivElement | null>(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const url = 'https://dummyjson.com/products/category/home-decoration';
    axios.get(url)
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            featuredProductsRef.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1 }
          );
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 }); 

    if (featuredProductsRef.current) {
      observer.observe(featuredProductsRef.current);
    }

    return () => {
      if (featuredProductsRef.current) {
        observer.unobserve(featuredProductsRef.current);
      }
    };
  }, [featuredProductsRef]);

  return (
    <div className='w-full flex-row bg-gray-50 mt-5'>
      <div className="flex justify-start mt-5">
        <h1 className="ml-20 text-primary text-2xl">FEATURED</h1>
        <hr />
      </div>

      <div ref={featuredProductsRef} className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5">
        {products.map((product) => (
          <ProductCard key={product.id}
            id={product.id}
            title={product.title}
            image={product.thumbnail}
            price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
