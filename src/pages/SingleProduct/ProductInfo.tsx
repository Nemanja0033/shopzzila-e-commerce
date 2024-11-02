import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {  Handshake, Layers, Recycle, StarIcon, Truck } from "lucide-react";
import gsap from "gsap";
import ProductCard from "../Products/components/ProductCard";
import BackButton from "../../components/BackButton";
import AddToCart from "../Cart/components/AddToCart";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    images: string[];
    returnPolicy: string;
    shippingInformation: string;
    warrantyInformation: string;
    availabilityStatus: string;
    discountPercentage: number;
    category: string;
}

interface SimilarProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

const ProductInfo = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProducts] = useState<Product | null>(null);
    const [showInfo, setShowinfo] = useState(false);
    const [similarProducts, setSimilarProducts] = useState<SimilarProduct[]>([]); 

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
                console.error('Error while fetching product data', error);
            }
        };

        fetchProduct();
    }, [id]);

    const category = product?.category;

    useEffect(() => {
        const fetchSimilarProducts = async () => {
            if (!category) return; 
            try {
                const response = await axios.get<{ products: SimilarProduct[] }>(`https://dummyjson.com/products/category/${category}`);
                setSimilarProducts(response.data.products); 
            } catch (error) {
                console.error('Error while fetching similar products', error);
            }
        };

        fetchSimilarProducts();
    }, [category]);

    if (!product) {
        return (
            <div className="flex items-center justify-center mt-[200px]">
                <h1 className="text-center text-5xl">Loading . . .</h1>
            </div>
        );
    }

    return (
        <>
        <BackButton />
            <div className="w-full md:flex flex-row justify-center shadow-md">
                <div className="md:w-1/2 w-full">
                    {product.images[0] ? (
                        <img
                        src={product.images[0]}
                        alt={product.title}
                        className="border-2 h-screen scale-75"
                    />
                    )
                :(
                    <h1>Loading . . .</h1>
                )}
                </div>

                <div className="md:w-1/2 w-full md:mt-[200px] md:mr-16 flex-col">
                    <div className="flex justify-center">
                        <span className="text-gray-700 font-semibold text-5xl text-center">{product.title}</span>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <span className="text-gray-700 text-xl flex"><StarIcon color="red" /> {product.rating}</span>
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

                    <div className="flex justify-center gap-8 mt-5">
                        <AddToCart title={product.title} image={product.images[0]} price={product.price.toString()} />
                        <Button variant="contained" color="error">PURCHASE {product.price}$ (-{Math.round(product.discountPercentage)}%)</Button>
                    </div>
                </div>
            </div>

            <div className="w-full mt-32 md:mt-12">
            <h3 className="md:ml-11 ml-0 mt-3 text-center md:text-start  mb-3 text-primary font-semibold">S I M I L A R</h3>
            <h1 className="text-gray-700 md:ml-11 text-center md:text-start font-semibold md:text-3xl text-xl">Explore more {product.category} products</h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5 ml-10 mr-10">
                    {similarProducts.map((similarProduct) => (
                        <ProductCard key={similarProduct.id}
                            id={similarProduct.id.toString()}
                            title={similarProduct.title}
                            image={similarProduct.thumbnail}
                            price={similarProduct.price.toString()} />
                    ))}
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
