import axios from "axios";
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";

interface FetchResponse {
  products: Product[];
}

interface Product {
category: string;
}

const FeaturedProducts = () => {

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    let url = 'https://dummyjson.com/products/category/home-decoration';
    axios.get(url).then(response => {
        setProducts(response.data.products)
        console.log(response.data.products)
    }).catch(error => {error})

}, [])

  return (
    <div className='w-full flex-row bg-gray-50 mt-5'>
        <div className="flex justify-start mt-5">
            <h1 className=" ml-20 text-primary text-2xl ">FEATURED</h1>
            <hr />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5">
            {products.map((product) => (
              <ProductCard key={product.id} 
              id={product.id} 
              title={product.title} 
              image={product.thumbnail} 
              price={product.price} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts
