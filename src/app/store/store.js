import { combineReducers, configureStore } from "@reduxjs/toolkit"
import registrationReducer from "./thunks/sign-up/sign-up.slice"
import authReducer from "./thunks/sign-in/sign-in.slice"
const rootReducer = combineReducers({
    signUp: registrationReducer

const rootReducer = combineReducers({
    signIn: registrationReducer,
    auth: authReducer
})


export const setupStore = configureStore({
    reducer: rootReducer
})