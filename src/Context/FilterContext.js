import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../reducer/FilterReducer";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null, // Fixed typo
};

const FilterContext = createContext(filterInitialState); // Fixed typo

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FilterReducer, filterInitialState);

    function initialProductList(products) {
        dispatch({
            type: "PRODUCT_LIST",
            payload: { products },
        });
    }

    function bestSeller(products) {
        return state.bestSellerOnly ? products.filter((product) => product.best_seller === true): products;
    }

    function inStock(products) {
        
        return state.onlyInStock? products.filter((product) => product.in_stock === true): products;
    }

    function sort(products) {
        const sortedProducts = [...products]; // Create a copy to avoid mutating the original array
        if (state.sortBy === "lowtohigh") {
            return sortedProducts.sort((a, b) => Number(a.price) - Number(b.price));
        }
        if (state.sortBy === "hightolow") {
            return sortedProducts.sort((a, b) => Number(b.price) - Number(a.price));
        }
        return products;
    }

    function rating(products) {
        
        if (state.ratings === "4STARSABOVE") {
            products=products.sort((a,b)=>Number(b.rating)-Number(a.rating));
            return products.filter((product) => product.rating >= 4);
        }
        if (state.ratings === "3STARSABOVE") {
            products=products.sort((a,b)=>Number(a.rating)-Number(b.rating));
            return products.filter((product) => product.rating >= 3);
        }
        if (state.ratings === "2STARSABOVE") {
            products=products.sort((a,b)=>Number(a.rating)-Number(b.rating));
            return products.filter((product) => product.rating >= 2);
        }
        if (state.ratings === "1STARSABOVE") {
            products=products.sort((a,b)=>Number(a.rating)-Number(b.rating));
            return products.filter((product) => product.rating >= 1);
        }
        return products;
    }

    const filteredProductList = rating(sort(inStock(bestSeller(state.productList))));

    const value = {
        products: filteredProductList,
        initialProductList,
        state,
        dispatch,
    };

    return <FilterContext.Provider value={value}>
        {children}
        </FilterContext.Provider>;
};

// Hook for using the context
export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilter must be used within a FilterProvider");
    }
    return context;
};
