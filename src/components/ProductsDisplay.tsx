import { useEffect, useState } from 'react'
import { useFilter } from '../context/FilterContext'
import axios from 'axios'
import ProductCard from './reusables/ProductCard'
import Loader from './ui/Loader'

const ProductsDisplay = () => {
    const {searchQuery, selectedCategory, maxPrice, minPrice, keyword} = useFilter()
    const [products, setProducts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const itemsPerPage = 12;
    const totalProducts = 200;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    useEffect(() => {
        let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${(currentPage - 1) * itemsPerPage}`
        if(keyword) {
            url = `https://dummyjson.com/products/search?q=${keyword}`
        }
        setIsLoading(true);

        axios.get(url)
        .then(response => {
            setProducts(response.data.products);
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            setIsLoading(false);
        });

    }, [currentPage, keyword]);

    const getFilteredProducts = () => {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        if (minPrice !== undefined) {
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice);
        }

        if (maxPrice !== undefined) {
            filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()));
        }

        return filteredProducts;
    };

    const filteredProducts = getFilteredProducts();

    useEffect(() => {
        const isActive = selectedCategory || minPrice !== undefined || maxPrice !== undefined || searchQuery || keyword;
        setIsFilterActive(!!isActive);
    }, [selectedCategory, minPrice, maxPrice, searchQuery]);


    const handlePageChange = (page: number) => {
        if(page > 0 && page <= totalPages){
            setCurrentPage(page)
        }
    }

    const getPaginationButtons = () => {
        const buttons: number[] = []
        let startPage = Math.max(1, currentPage - 2)
        let endPage = Math.min(totalPages, currentPage + 2)  
        
        if(currentPage - 2 < 1){
            endPage = Math.min(totalPages, endPage + (2 - currentPage - 1));
        }

        if(currentPage + 2 > totalPages){
            startPage = Math.min(1, startPage - (2 - totalPages - 1))
        }

        for (let page = startPage; page <= endPage; page++){
            buttons.push(page);
        }

        return buttons;
    }

  return (
    <div className='xl:w-[55rem] lg:w-[55rem] h-full rounded-md sm:w-[40rem] p-5 border-2'>
        {isLoading ? <Loader /> : (
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {filteredProducts.map(product => (
                <ProductCard  key={product.id} 
                                id={product.id} 
                                title={product.title} 
                                image={product.thumbnail} 
                                price={product.price}
                                />
                ))}
            </div>
        )}
        {!keyword ? (
            <div className={`flex justify-between items-center mt-5 ${isFilterActive && 'hidden'}`}>
                <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)} className='border px-4 py-2 mx-2 rounded-full'>
                    Previous
                </button>

                <div className={`flex flex-wrap justify-center`}>
                    {getPaginationButtons().map((page) => (
                        <button onClick={() => handlePageChange(page)} className={`border px-4 py-2 mx-1 rounded-full ${page === currentPage ? 'bg-primary text-white' : ""}`} key={Math.random()}>{page}</button>
                    ))}
                </div>

                <button disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)} className='border px-4 py-2 mx-2 rounded-full'>Next</button>
            </div>
        ) : null}
    </div> 
  )
}

export default ProductsDisplay
