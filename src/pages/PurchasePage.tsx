import { Button } from "@mui/material";
import axios from "axios";
import { JSXElementConstructor, Key, ReactElement, ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";

const PurchasePage = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);
    const [cartProducts, setCartProducts] = useState<any>([]);
    const isSingleProduct = id !== "all";

    useEffect(() => {
        if (isSingleProduct) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get<Product>(`https://dummyjson.com/products/${id}`);
                    setProduct(response.data);
                } catch (error) {
                    console.error("Error while fetching product data", error);
                }
            };
            fetchProduct();
        } else {
            try {
                const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
                if (Array.isArray(storedCart)) {
                    setCartProducts(storedCart);
                } else {
                    console.error("Cart data is not an array.");
                }
            } catch (error) {
                console.error("Error parsing cart data from localStorage", error);
            }
        }
    }, [id, isSingleProduct]);

    const totalSum = cartProducts.reduce((acc: number, product: { price: number; }) => acc + product.price, 0);

    const handlePurchase = (event: React.FormEvent) => {
        event.preventDefault();
        if (isSingleProduct && product) {
            alert(`Thanks For Purchasing ${product.title} for $${product.price}!`);
            window.location.href = "/";
        } else {
            alert(`Thanks For Purchasing our products for $${totalSum.toFixed(2)}!`);
            window.location.href = "/";
            localStorage.removeItem("cart");
        }
       
        
    };

    return (
        <div className="flex flex-col justify-self-center items-center border rounded-md md:w-[500px] w-full h-auto  mt-12 p-4">
            {isSingleProduct && product ? (
                <>
                    <div className="flex justify-between items-center gap-11 border-b h-20">
                        <img src={product.images?.[0] || ""} alt={product.title} className="w-[100px] mb-4" />
                        <h1 className="font-semibold text-xl">{product.title}</h1>
                        <p className="font-semibold text-lg">${product.price}</p>
                    </div>

            <p className="font-semibold text-lg mt-2 mb-2">Total: ${product.price}$</p>
            <form onSubmit={handlePurchase} className="flex flex-col gap-4 w-full mt-12">
                <input
                    type="text"
                    placeholder="Card User Name"
                    className="border rounded-md p-2 w-full"
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="border rounded-md p-2 w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Shiping Address"
                    className="border rounded-md p-2 w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Card Number"
                    className="border rounded-md p-2 w-full"
                    required
                />
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="MM/YY"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>
                <Button variant="contained" color="error" type="submit">
                   Confirm Payment
                </Button>
            </form>
                    
                </>
            ) : (
                <>
                    <h1 className="font-semibold text-xl mb-2">Total Purchase</h1>
                    <div className="mb-4 overflow-auto h-auto">
                        {cartProducts.length > 0 ? (
                            cartProducts.map((item: { id: Key | null | undefined; price: number, image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => (
                                <div key={item.id} className="flex items-center gap-11 mb-2 border-b h-14">
                                    <img src={item.image}  className="w-[80px] mb-4" />
                                    <h1 className="font-semibold text-md">{item.title}</h1>
                                    <h1  className="font-semibold text-sm">{item.price}$</h1>
                                </div>
                            ))
                        ) : (
                            <p>No items in the cart.</p>
                        )}
                    </div>

            <p className="font-semibold text-lg mt-2 mb-2">Items({cartProducts.length}) Total: {Math.max(totalSum)}$</p>
            <form onSubmit={handlePurchase} className="flex flex-col gap-4 w-full">
                <input
                    type="text"
                    placeholder="Card User Name"
                    className="border rounded-md p-2 w-full"
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="border rounded-md p-2 w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Shiping Address"
                    className="border rounded-md p-2 w-full"
                    required
                />
                <input
                    type="text"
                    placeholder="Card Number"
                    className="border rounded-md p-2 w-full"
                    required
                />
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="MM/YY"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        className="border rounded-md p-2 w-full"
                        required
                    />
                </div>
                <Button variant="contained" color="error" type="submit">
                Confirm Payment
                </Button>
            </form>
                </>
            )}
        </div>
    );
};

export default PurchasePage;
