import { Book } from "@/@types/book";
import { CartActionTypes } from "./actions";
import { produce } from "immer";

export interface CartState {
    products: Book[];
}

export function CartReducer(state: CartState, action: any) {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART:
            return produce(state, draft => {
                draft.products.push(action.payload)
            })
        case CartActionTypes.REMOVE_FROM_CART:
            return produce(state, draft => {
                draft.products = draft.products.filter(product => product.id !== action.payload)
            })
        default:
            return state;
    }
}