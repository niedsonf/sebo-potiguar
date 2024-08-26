import { StoreActionTypes } from "./actions";
import { produce } from "immer";

export interface StoreState {
    search: string;
    page: number;
    maxPage: number;
}

export function StoreReducer(state: StoreState, action: any) {
    switch (action.type) {
        case StoreActionTypes.PAGE_CHANGE:
            return produce(state, draft => {
                draft.page = action.payload
            })
        case StoreActionTypes.SEARCH:
            return produce(state, draft => {
                draft.search = action.payload
            })
        default:
            return state;
    }
}