import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name:"login",
    initialState:{
        email:"",
        password:"",
        isLoading:false
    },
    reducers:{
        emailChanged:(state,values)=>{

            state.email = values.payload
        },
        passwordChanged : (state,values) =>{
            state.password = values.payload
        },
        isLoadingChanged :(state,values) =>{
            state.isLoading =!state.isLoading
        }
    }
})

export const {emailChanged,passwordChanged,isLoadingChanged} = loginSlice.actions
export default loginSlice.reducer