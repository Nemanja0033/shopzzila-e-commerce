import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
}

const ProductInfo = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProducts] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get<Product>(`https://dummyjson.com/products/${id}`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error while fetching data', error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return (
            <div className="flex items-center justify-center mt-[200px]">
                <h1 className="text-center text-5xl">Loading . . .</h1>
            </div>
        );
    }

    return (
        <>
            <div className="w-full md:flex flex-row justify-center">
                <div className="md:w-1/2 w-full">
                    <img 
                        src={product.images[0]} 
                        alt={product.title} 
                        className="border-2 h-screen scale-75" 
                    />
                </div>
                
                <div className="md:w-1/3 w-full md:mt-[200px] flex-col">
                    <div className="flex justify-center">
                        <span className="text-gray-700 font-semibold text-5xl text-center">{product.title}</span>
                    </div>
                    
                    <div className="mt-5 flex justify-center">
                        <span className="text-gray-700 text-xl">Rating: {product.rating}</span>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <p className="text-gray-400 text-center">{product.description}</p>
                    </div>

                    <div className="mt-3">
                        <hr />
                    </div>

                    <div className="flex  justify-center gap-4 mt-5">
                        <span className="text-gray-700 text-2xl">{product.price}$</span>
                        <Button variant="outlined" color="error">ADD TO CART</Button>
                    </div>
                </div>
            </div>

            <div className="w-full flex-col mt-20">
                <h1 className="text-center font-bold text-gray-700 text-4xl">Photos</h1>
                <div className="md:flex justify-center flex-row">
                    {product.images.length > 1 ? (
                        <>
                            <img 
                                src={product.images[1]} 
                                alt={product.title} 
                                className=" h-screen scale-75" 
                            />
                            {product.images.length > 2 && (
                                <img 
                                    src={product.images[2]} 
                                    alt={product.title} 
                                    className=" h-screen scale-75" 
                                />
                            )}
                        </>
                    ) : (
                        <div className="flex items-center justify-center w-full h-screen">
                            <p className="text-gray-500 text-xl">No additional photos to show</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductInfo;
