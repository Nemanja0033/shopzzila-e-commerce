export interface FilterContextType {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: string;
    setSelectedCategory: (category: string) => void;
    minPrice: number | undefined;
    setMinPrice: (price: number | undefined) => void;
    maxPrice: number | undefined;
    setMaxPrice: (maxPrice: number | undefined) => void;
    keyword: string;
    setKeyword: (keyword: string) => void;
}

export interface ProductCardProps {
    id: string,
    title: string,
    image: string,
    price: string,
}

export interface Product {
    category: string;
}

export interface FetchResponse {
    products: Product[];
}

export interface Product {
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

export interface SimilarProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
}

export type Products = {
    title: string;
    image: string;
    price: string;
  };