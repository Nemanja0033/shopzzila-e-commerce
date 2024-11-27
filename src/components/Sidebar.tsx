import { Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useFilter } from "../context/FilterContext";

interface Product {
    category: string;
}

interface FetchResponse {
    products: Product[];
}

const Sidebar = () => {

    const {
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        setKeyword,
    } = useFilter()

    const [categories, setCategories] = useState<string[]>([]);
    const [keywords] = useState<string[]>([
        "Fashion",
        "Smartphone",
        "Watch",
        "Sport",
        "home",
        "shirt",
    ]);
    
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: FetchResponse = await response.json(); 

                const uniqueCategories = Array.from(
                    new Set(data.products.map(product => product.category))
                );
                console.log(data)
                setCategories(uniqueCategories);
            } catch (error) {
                console.log('Error while fetching data', error);
            }
        };

        fetchCategories();
    }, []);

    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setMinPrice(value ? parseFloat(value) : undefined)
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMaxPrice(value ? parseFloat(value) : undefined)
    };

    const handleRadioChangeCategories = (category: string) => {
        setSelectedCategory(category)
    }

    const handleKeywordChange = (keyword: string) => {
        setKeyword(keyword);
    }

    const handleFilterReset = () => {
        setSearchQuery("");
        setSearchQuery("");
        setSelectedCategory('');
        setMinPrice(undefined);
        setMaxPrice(undefined);
        setKeyword("");
    }

    useEffect(() => {
        if (sidebarRef.current) { 
            gsap.from(sidebarRef.current, { opacity: 0, y: 100 });
            gsap.to(sidebarRef.current, { opacity: 1, y: 0, delay: 0.3 });
        }
    }, []);

    return (
        <div ref={sidebarRef} className="md:w-64 w-full p-5 h-full mt-20 md:ml-0" style={{ opacity: 0 }}>
            <section className="mt-5">
                <input 
                type="text" 
                className=" shadow-md bg-transparent rounded px-2 w-full sm:mb-0" 
                placeholder="Search Product"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} />

                <div className="flex justify-center items-center mt-3 gap-1">
                    <input 
                    type="text" 
                    className=" shadow-md bg-transparent px-5 py-3 mb-3 w-full rounded-md" 
                    placeholder="Min $"
                    value={minPrice ?? ''}
                    onChange={handleMinPriceChange} />
                    <input 
                    type="text" 
                    className=" shadow-md bg-transparent px-5 py-3 mb-3 w-full rounded-md" 
                    placeholder="Max $"
                    value={maxPrice ?? ""}
                    onChange={handleMaxPriceChange} />
                </div>

                <div className="mt-5">
                    <h2 className="text-md font-semibold mb-3">Category</h2>
                </div>

                {categories.map((category, index) => (
                    <div key={index} className="text-sm flex-row ml-2 ">
                        <label>
                        <input 
                        type="radio" 
                        name="category" 
                        value={category} 
                        className="mr-2 w-[16px] h-[16px] "
                        onChange={() => handleRadioChangeCategories(category)}
                        checked={selectedCategory === category} 
                    />  {category.toUpperCase()}
                        </label>
                    </div>
                ))}

                <div className="mt-5">
                    <h2 className="text-md font-semibold mb-3">Most Popular</h2>
                    {keywords.map((keyword, index) => (
                        <button key={index} onClick={() => handleKeywordChange(keyword)} className=" text-sm block mb-2 px-4 py-2 w-full text-left border rounded-md hover:bg-primary hover:text-white">
                            {keyword.toUpperCase()}
                        </button>
                    ))}
                </div>

                <Button onClick={() => handleFilterReset()} variant="contained" size="medium" fullWidth className='hover:bg-white hover:text-primary hover:border-2 border-gray-700' color="error">
                    Reset Filters
                </Button>
            </section>
        </div>
    );
}

export default Sidebar;
