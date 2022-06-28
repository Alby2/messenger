import {createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name:"auth",
    initialState:{
        isAuth:false,
        user:{},
    },
    reducers:{
        isAuthChanged : (state,values)=>{
            state.isAuth = !state.isAuth
        },
        userChanged : (state,values)=>{
            state.user = values.payload
        }
    }
})

export const {isAuthChanged,userChanged} = authSlice.actions;

export default authSlice.reducer