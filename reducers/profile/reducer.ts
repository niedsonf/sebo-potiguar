import { User } from "@/@types/user";
import { ProfileActionTypes } from "./actions";
import { produce } from "immer";

export interface ProfileState extends Partial<User> { }

export function ProfileReducer(state: ProfileState, action: any) {
    switch (action.type) {
        case ProfileActionTypes.UPDATE_USER:
            return produce(state, draft => {
                // draft.page = action.payload.page
                // draft.maxPage = action.payload.maxPage
            })
        case ProfileActionTypes.LOGOUT:
            return produce(state, draft => {
                draft.email = ""
                draft.image = ""
                draft.name = ""
            })
        default:
            return state;
    }
}