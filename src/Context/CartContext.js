import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const cartInitialState = {
    cartList: [],
    total: 0
};

const CartContext = createContext(cartInitialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, cartInitialState);

    function addToCart(product) {
        const updatedList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;
        console.log(updatedList)
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                cartList: updatedList,
                total:updatedTotal
            }
        });
        console.log(state.total)
    }

    function removeFromCart(product) {
        const updatedList = state.cartList.filter(item => item.id !== product.id);
        const updatedTotal= state.total - product.price;
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                cartList: updatedList,
                total:updatedTotal
            }
        });
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const cartContext = useContext(CartContext);
    return cartContext;
};
