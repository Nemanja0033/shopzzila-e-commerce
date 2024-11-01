import { createContext, useState, useEffect } from "react";

const CartCounterContext = createContext({
  amount: 0,
  add: () => {},
});

export const CartCounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [amount, setAmount] = useState(
    () => JSON.parse(localStorage.getItem("cart") || "[]").length
  );

  const add = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    localStorage.setItem("cartCount", JSON.stringify(newAmount));
  };

  
  useEffect(() => {
    const syncAmount = () => {
      const updatedAmount = JSON.parse(localStorage.getItem("cart") || "[]").length;
      setAmount(updatedAmount);
    };

    window.addEventListener("storage", syncAmount);
    return () => {
      window.removeEventListener("storage", syncAmount);
    };
  }, []);

  return (
    <CartCounterContext.Provider value={{ amount, add }}>
      {children}
    </CartCounterContext.Provider>
  );
};

export { CartCounterContext };
