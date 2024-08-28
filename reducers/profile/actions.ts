import { User } from "@/@types/user"

export enum ProfileActionTypes {
    UPDATE_USER = "UPDATE_USER",
    LOGOUT = "LOGOUT",
}

export function profilePageChangeAction(user: Partial<User>) {
    return {
        type: ProfileActionTypes.UPDATE_USER,
        payload: user
    }
}

export function profileLogout() {
    return {
        type: ProfileActionTypes.LOGOUT,
        payload: {}
    }
}