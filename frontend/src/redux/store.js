import {configureStore} from "@reduxjs/toolkit"
import conversationReducer from "./slices/conversation"
import loginReducer from "./slices/login"
import signinReducer from "./slices/signin"

export default configureStore({
    reducer:{
        conversation:conversationReducer,
        login:loginReducer,
        signin:signinReducer
    }
})