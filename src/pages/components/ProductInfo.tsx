import Button from "@mui/material/Button";
import axios from "axios";
import { ArrowLeft, ShoppingBag, Star, StarHalf } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    rating: number,
    images: string[];   
}

const ProductInfo = () => {

    const { id } = useParams<{ id: string}>();

    const navigate = useNavigate();
    
    const [product, setProducts] = useState<Product | null>(null);

    useEffect(() => {
        axios.get<Product>(`https://dummyjson.com/products/${id}`)
        .then(response => {setProducts(response.data)})
        .catch(error => {
            console.log('Error while fetching data', error)
        })
    }, [id])

    if(!product){
        return(
           <div className="flex items-center justify-center mt-[200px]">
             <h1 className="text-center text-5xl">Loading . . .</h1>
           </div>
        )
    }

  return (
    <div className="w-full mt-10 md:flex flex-row justify-center">
        <div className="md:w-1/2 w-full">
         <img src={product?.images[0]} alt={product?.title} className="border-2 h-screen scale-75" />
        </div>
        <div className="md:w-1/3 w-full md:mt-[200px] flex-row">
        <div className="flex justify-center">
            <span className="text-gray-700 font-semibold text-5xl">{product?.title}</span>
        </div>
        <div className="mt-5 flex justify-center">
            <span className="text-gray-700 flex text-xl">Rating: {product?.rating}</span>
        </div>

        <div className="mt-5 flex justify-center">
            <p className="text-gray-400">{product?.description}</p>
        </div>

        <div className="mt-3">
            <hr />
        </div>

        <div className="flex justify-between mt-5">
            <div>
                <span className="text-gray-700 text-2xl">{product?.price}$</span>
            </div>
            <div>
                <Button variant="outlined" color="error">ADD TO CART <ShoppingBag /></Button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProductInfo
