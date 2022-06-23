import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slices/auth"
import conversationReducer from "./slices/conversation"
import loginReducer from "./slices/login"
import signinReducer from "./slices/signin"
import userReducer from "./slices/user"

export default configureStore({
    reducer:{
        conversation:conversationReducer,
        login:loginReducer,
        signin:signinReducer,
        auth:authReducer,
        user:userReducer
    }
})