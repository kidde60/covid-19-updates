import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from "./Home/Home";
import DetailSlice from './Home/Detail';

const store = configureStore({
    reducer: {
        Home: HomeReducer,
        Detail: DetailSlice
    },
})

export default store;