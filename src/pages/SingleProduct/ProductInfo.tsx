import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../Cart/CartPage";
import { ArrowLeft, Handshake, Layers, Recycle, StarIcon, Truck } from "lucide-react";
import gsap from "gsap";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
    returnPolicy: string,
    shippingInformation: string,
    warrantyInformation: string,
    availabilityStatus: string,
    discountPercentage: number
}

const ProductInfo = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProducts] = useState<Product | null>(null);
    const [showInfo, setShowinfo] = useState(false);

    const infoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.fromTo(
                infoRef.current,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.5 }
              );
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0 }); 
    
        if (infoRef.current) {
          observer.observe(infoRef.current);
        }
    
        return () => {
          if (infoRef.current) {
            observer.unobserve(infoRef.current);
          }
        };
      }, [showInfo]);

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

    const productsParams = {
        title: product.title,
        image: product.images[0],
        price: product.price.toString(), 
    };

    return (
        <>
        <Button color="error" onClick={() => window.history.go(-1)}><ArrowLeft /></Button>
            <div className="w-full md:flex flex-row justify-center">
                <div className="md:w-1/2 w-full">
                    <img 
                        src={product.images[0]} 
                        alt={product.title} 
                        className="border-2 h-screen scale-75" 
                    />
                </div>
                
                <div className="md:w-1/2 w-full md:mt-[200px] flex-col">
                    <div className="flex justify-center">
                        <span className="text-gray-700 font-semibold text-5xl text-center">{product.title}(-{Math.round(product.discountPercentage)}%)</span>
                    </div>
                    
                    <div className="mt-5 flex justify-center">
                        <span className="text-gray-700 text-xl flex"><StarIcon /> {product.rating}</span>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <p className="text-gray-400 text-center text-xl">{product.description}</p>
                    </div>

                    <div className="mt-3 flex justify-center text-primary gap-2">
                        {showInfo ? (
                            <span ref={infoRef} className="md:flex flex-row gap-2">
                                <span className="flex gap-2 mt-3"><Truck />{product.shippingInformation}</span>
                                <span className="flex gap-2 mt-3"><Handshake />{product.returnPolicy}</span>
                                <span className="flex gap-2 mt-3"><Recycle />{product.warrantyInformation}</span>
                                <span className="flex gap-2 mt-3 mb-3"><Layers />{product.availabilityStatus}</span>
                                <Button onClick={() => setShowinfo(false)} color="error">Show Less</Button>
                            </span>
                        ) : (
                            <Button onClick={() => setShowinfo(true)} color="error">Additional Informations</Button>
                        )}
                    </div>

                    <div className="mt-3">
                        <hr />
                    </div>

                    <div className="flex justify-center gap-4 mt-5">
                        <Button 
                            variant="outlined" 
                            color="error" 
                            onClick={() => addToCart(productsParams)}
                        >
                            ADD TO CART
                        </Button>
                        <Button variant="contained" color="error">PURCHASE {product.price}$</Button>
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
                                className="h-screen scale-75 border-2" 
                            />
                            {product.images.length > 2 && (
                                <img 
                                    src={product.images[2]} 
                                    alt={product.title} 
                                    className="h-screen scale-75 border-2" 
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
