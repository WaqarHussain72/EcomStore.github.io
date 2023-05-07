import { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("myCart");
    if (localCartData === []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 30000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCard = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };

    // controle increment and decrement function in addToCard component
    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    };
    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    };

    // to remove the individual item from cart
    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    // to clear the all cart
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    // add the data in the local storage
    // get vs set




    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("myCart", JSON.stringify(state.cart));
    }, [state.cart])


    return (
        <CartContext.Provider value={{
            ...state,
            addToCard,
            removeItem,
            clearCart,
            setDecrease,
            setIncrease,
        }} >
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };