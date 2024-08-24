import { Book } from "@/@types/book";

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export function addToCartAction(product: Book) {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload: product
    }
}

export function removeFromCartAction(id: number) {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: id
    }
}