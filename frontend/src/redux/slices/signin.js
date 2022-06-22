import {createSlice} from '@reduxjs/toolkit'

export const signinSlice = createSlice({
    name:"signin",
    initialState:{
        firstname:"",
        lastname:"",
        password:"",
        email:""
    },
    reducers:{
        firstnameChanged:(state,values)=>{
            state.firstname = values.payload
        },
        lastnameChanged:(state,values)=>{
            state.lastname = values.payload
        },
        passwordChanged:(state,values)=>{
            state.password = values.payload
        },
        emailChanged:(state,values)=>{
            state.email = values.payload
        }
    }
})

export const {firstnameChanged,lastnameChanged,passwordChanged,emailChanged} = signinSlice.actions

export default signinSlice.reducer