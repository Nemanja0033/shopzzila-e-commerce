import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Handshake, Layers, Recycle, StarIcon, Truck } from "lucide-react";
import BackButton from "../components/ui/BackButton";
import AddToCart from "../components/AddToCart";
import { Product, SimilarProduct } from "../types";
import ProductCard from "../components/reusables/ProductCard";

const SingleProduct = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProducts] = useState<Product | null>(null);
    const [showInfo, setShowinfo] = useState(false);
    const [similarProducts, setSimilarProducts] = useState<SimilarProduct[]>([]); 
    const [previewImage, setPreviewImage] = useState<number>(0);
    const infoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productResponse = await axios.get<Product>(`https://dummyjson.com/products/${id}`);
                setProducts(productResponse.data);

                const category = productResponse.data.category;
                if (category) {
                    const similarProductsResponse = await axios.get<{ products: SimilarProduct[] }>(`https://dummyjson.com/products/category/${category}?limit=5`);
                    setSimilarProducts(similarProductsResponse.data.products);
                }
            } catch (error) {
                console.error('Error while fetching data', error);
            }
        };

        fetchData();
    }, [id]);

    if (!product) {
        return (
            <div className="flex items-center justify-center mt-[200px]">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <>
        <BackButton />
            <div className="w-full md:flex p-5 justify-center shadow-md">
                <div className="md:w-1/2 w-full">
                    {product.images[0] ? (
                        <img
                        src={product.images[previewImage]}
                        alt={product.title}
                        className="border-2 md:h-[880px] h-[600px] w-full scale-75"
                    />
                    )
                :(
                    <h1>Loading . . .</h1>
                )}
                </div>

                <div className="md:w-1/2 w-full md:mt-[160px] flex-col">
                    <div className="flex justify-center">
                        <span className="font-semibold text-5xl text-center">{product.title}</span>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <span className="text-primary text-xl flex mr-2"><StarIcon color="red" /> {product.rating}</span>
                    </div>

                    <div className="mt-5 md:h-20 flex justify-center">
                        <p className="text-center text-xl">{product.description}</p>
                    </div>

                    <div className="md:mt-3 mt-12  flex justify-center text-primary gap-2">
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
                        <AddToCart title={product.title} img={product.images[0]} price={product.price} id={product.id.toString()} />
                        <Link to={`/purchase/${id}`}>
                        <Button variant="contained" color="error">PURCHASE {product.price}$ (-{Math.round(product.discountPercentage)}%)</Button>
                        </Link>
                    </div>
                    
                    <div className="grid md:grid-cols-3 grid-cols-2 gap-2 mt-5">
                        {product.images.length > 1 ? product.images.map((img, i) => (
                            <img onClick={() => setPreviewImage(i)} className="border-2 cursor-pointer h-82" src={img} />
                        )) : null}
                    </div>

                </div>
            </div>

            <div className="w-full mt-12 md:mt-8 shadow-md py-12">
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
            </div>
        </>
    );
};

export default SingleProduct;
