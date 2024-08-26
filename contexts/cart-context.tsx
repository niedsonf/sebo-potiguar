'use client'

import { Book } from "@/@types/book";
import { addToCartAction, removeFromCartAction } from "@/reducers/cart/actions";
import { CartReducer, CartState } from "@/reducers/cart/reducer";
import { useCallback, useEffect, useLayoutEffect, useReducer } from "react";
import { createContext } from "use-context-selector";

interface CartContextType extends CartState {
    addToCart: (product: Book) => void;
    removeFromCart: (productId: number) => void;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(CartReducer, { products: [] },
        initialState => {
            if (typeof window !== 'undefined') {
                const cart = localStorage.getItem("@sebo-potiguar:cart-1.0.0")
                if (cart) {
                    return JSON.parse(cart)
                }
            }
            return initialState
        }
    );

    useLayoutEffect(() => {
        const stateJSON = JSON.stringify(state)
        if (typeof window !== 'undefined') {
            localStorage.setItem("@sebo-potiguar:cart-1.0.0", stateJSON)
        }
    }, [state])

    const addToCart = useCallback((product: Book) => {
        dispatch(addToCartAction(product))
    }, [])

    const removeFromCart = useCallback((productId: number) => {
        dispatch(removeFromCartAction(productId))
    }, [])

    return (
        <CartContext.Provider
            value={{ ...state, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}