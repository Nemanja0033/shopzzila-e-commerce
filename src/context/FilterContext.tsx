import { useState, useContext, createContext, ReactNode } from "react";
import { FilterContextType } from "../types";

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
    const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
    const [keyword, setKeyword] = useState<string>('');

    return (
        <FilterContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                selectedCategory,
                setSelectedCategory,
                minPrice,
                setMinPrice,
                maxPrice,
                setMaxPrice,
                keyword,
                setKeyword,
            }}
        >
            {children} 
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if(context === undefined) {
        throw new Error("Error with FilterContext");
    }

    return context;
}