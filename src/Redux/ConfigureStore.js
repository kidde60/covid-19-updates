import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./Home/Home";

const store = configureStore({
    reducer: {
        Home: HomeReducer
    },
})

export default store;