export enum StoreActionTypes {
    PAGE_CHANGE = 'STORE_PAGE_CHANGE',
    SEARCH = 'STORE_SEARCH'
}

export function storePageChangeAction(page: number, maxPage: number) {
    return {
        type: StoreActionTypes.PAGE_CHANGE,
        payload: {
            page,
            maxPage
        }
    }
}

export function storeSearchAction(search: string) {
    return {
        type: StoreActionTypes.SEARCH,
        payload: search
    }
}