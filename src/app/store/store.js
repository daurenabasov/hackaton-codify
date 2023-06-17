import { combineReducers, configureStore } from "@reduxjs/toolkit"
import registrationReducer from "./thunks/sign-up/sign-up.slice"
const rootReducer = combineReducers({
    signUp: registrationReducer

})


export const setupStore = configureStore({
    reducer: rootReducer
})