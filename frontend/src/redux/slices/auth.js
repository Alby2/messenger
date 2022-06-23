import {createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
    name:"auth",
    initialState:{
        isAuth:false,
        idUser:"",
    },
    reducers:{
        isAuthChanged : (state,values)=>{
            state.isAuth = !state.isAuth
        },
        idUserChanged : (state,values)=>{
            state.idUser = values.payload
        }
    }
})

export const {isAuthChanged} = authSlice.actions;

export default authSlice.reducer