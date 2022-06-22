import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name:"conversation",
    initialState:{
        isAuth:1
    },
    reducers:{
        isAuthChanged : (state,payload)=>{
            state.isAuth +=1;
        }
    }
})
export  const {isAuthChanged} = conversationSlice.actions
export default conversationSlice.reducer