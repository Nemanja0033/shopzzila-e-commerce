import React, { createContext, useContext, useEffect, useReducer } from "react";
import { CartAction, CartState } from "../types";
import { cartReducer } from "../reducers/CartReducer";

const initialCartState: CartState = {
    items: typeof window !== "undefined" && localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")!)
        : []
};

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction>} | undefined>(undefined);

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(cartReducer, initialCartState);
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.items));
    }, [state.items]);

    return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within CartProvider");
    return context;
};