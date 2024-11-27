import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {  ArrowDown, Handshake, Layers, Recycle, StarIcon, Truck, User } from "lucide-react";
import gsap from "gsap";
import ProductCard from "../Products/components/ProductCard";
import BackButton from "../../components/BackButton";
import AddToCart from "../Cart/components/AddToCart";
import LikeReview from "./components/LikeReview";
import Footer from "../../components/Footer";

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
    reviews: any;
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

    (function() {
        document.title = `${product?.title}`
      })();

   

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
                console.log(response.data)
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
                const response = await axios.get<{ products: SimilarProduct[] }>(`https://dummyjson.com/products/category/${category}?limit=5`);
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
                        className="border-2 md:h-screen h-[600px] w-full scale-75"
                    />
                    )
                :(
                    <h1>Loading . . .</h1>
                )}
                </div>

                <div className="md:w-1/2 w-full md:mt-[200px] md:mr-16 flex-col">
                    <div className="flex justify-center">
                        <span className="font-semibold text-5xl text-center">{product.title}</span>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <span className="text-primary text-xl flex mr-2"><StarIcon color="red" /> {product.rating} <Button href="#reviews" color="error">Reviews <ArrowDown /></Button></span>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <p className="text-center text-xl">{product.description}</p>
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
                        <Link to={`/purchase/${id}`}>
                        <Button variant="contained" color="error">PURCHASE {product.price}$ (-{Math.round(product.discountPercentage)}%)</Button>
                        </Link>
                    </div>
                    <br />
                </div>
            </div>

            <div className="w-full mt-12 md:mt-10 shadow-md">
            <h3 className="md:ml-11 ml-0 mt-3 text-center md:text-start  mb-3 text-primary font-semibold">S I M I L A R</h3>
            <h1 className="md:ml-11 text-center md:text-start font-semibold md:text-3xl text-xl">Explore more {product.category} products</h1>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-5 ml-10 mr-10">
                    {similarProducts.map((similarProduct) => (
                        <ProductCard key={similarProduct.id}
                            id={similarProduct.id.toString()}
                            title={similarProduct.title}
                            image={similarProduct.thumbnail}
                            price={similarProduct.price.toString()} />
                    ))}
                </div>
                <br /><br /><br />
            </div>

            <div id="reviews" className="w-full mt-12 md:mt-10">
            <h3 className="md:ml-11 ml-0 mt-3 text-center md:text-start  mb-3 text-primary font-semibold">R E V I E W S</h3>
            <h1 className="md:ml-11 text-center md:text-start font-semibold md:text-3xl text-xl">{product.title}</h1>
                <div className="w-full md:flex flex-row justify-evenly gap-8 shadow-md">
                    <div className="md:w-[300px] w-full bg-transparent border shadow-md rounded-md mt-6 mb-6">
                       <div className="flex justify-center mt-1">
                            <h1 className="font-semibold text-xl flex gap-1"><User color="red" />{product.reviews[0].reviewerName}</h1>
                       </div>
                       <div className="flex justify-center mt-1">
                            <span className="text-gray-500 flex gap-1 text-sm">Rating: ({product.reviews[0].rating})</span>
                       </div>
                       <div className="flex justify-center mt-1">
                            <p className="text-gray-500">{product.reviews[0].comment}</p>
                       </div>
                       <div className="flex justify-center mt-1">
                            <span className="text-sm">{product.reviews[0].date}</span>
                       </div>
                       <div className="flex justify-center mt-1 mb-1">
                            <LikeReview />
                       </div>
                    </div>
                    
                    <div className="md:w-[300px] w-full bg-transparent border shadow-md rounded-md mt-6 mb-6">
                       <div className="flex justify-center mt-1">
                            <h1 className="font-semibold text-xl flex gap-1"><User color="red" />{product.reviews[1].reviewerName}</h1>
                       </div>
                       <div className="flex justify-center mt-1">
                            <span className="text-gray-500 flex gap-1 text-sm">Rating: ({product.reviews[1].rating})</span>
                       </div>
                       <div className="flex justify-center mt-1">
                            <p className="text-gray-500">{product.reviews[1].comment}</p>
                       </div>
                       <div className="flex justify-center mt-1">
                            <span className="text-sm">{product.reviews[1].date}</span>
                       </div>
                       <div className="flex justify-center mt-1 mb-1">
                            <LikeReview />
                       </div>
                    </div>

                    <div className="md:w-[300px] w-full bg-transparent border shadow-md rounded-md mt-6 mb-6">
                       <div className="flex justify-center mt-1">
                            <h1 className="font-semibold text-xl flex gap-1"><User color="red" />{product.reviews[2].reviewerName}</h1>
                       </div>
                       <div className="flex justify-center mt-1">
                            <span className="text-gray-500 flex gap-1 text-sm">Rating: ({product.reviews[2].rating})</span>
                       </div>
                       <div className="flex justify-center mt-1">
                            <p className="text-gray-500">{product.reviews[2].comment}</p>
                       </div>
                       <div className="flex justify-center mt-1">
                            <span className="text-sm">{product.reviews[2].date}</span>
                       </div>
                       <div className="flex justify-center mt-1 mb-1">
                            <LikeReview />
                       </div>
                    </div>
                </div>
            </div>

            <Footer />
            
        </>
    );
};

export default ProductInfo;
