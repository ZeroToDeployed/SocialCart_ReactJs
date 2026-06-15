import { createSlice } from "@reduxjs/toolkit";

interface User{
    id: string;
    username: string;
    fullName: string;
    email: string;
    role: 'admin' | 'user' | 'guest' 
}

interface UserSlice{
    authStatus: boolean;
    userData: User | null
}

const initialState: UserSlice  = {
    authStatus: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action)=>{
            state.authStatus = true;
            state.userData = action.payload.userData;
        },
        logout: (state)=>{
            state.authStatus = false;
            state.userData = null
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;