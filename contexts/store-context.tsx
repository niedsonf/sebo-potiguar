'use client'

import { Book } from "@/@types/book";
import { storePageChangeAction, storeSearchAction } from "@/reducers/store/actions";
import { StoreReducer, StoreState } from "@/reducers/store/reducer";
import { useCallback, useEffect, useLayoutEffect, useReducer } from "react";
import { createContext } from "use-context-selector";

interface StoreContextType extends StoreState {
    storePageChange: (page: number) => void;
    storeSearch: (search: string) => void;
}

export const StoreContext = createContext({} as StoreContextType)

export function StoreContextProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(StoreReducer, {
        page: 1,
        maxPage: 3,
        search: ''
    });

    const storePageChange = useCallback((page: number) => {
        dispatch(storePageChangeAction(page))
    }, [])

    const storeSearch = useCallback((search: string) => {
        dispatch(storeSearchAction(search))
    }, [])

    return (
        <StoreContext.Provider
            value={{ ...state, storePageChange, storeSearch }}>
            {children}
        </StoreContext.Provider>
    )
}