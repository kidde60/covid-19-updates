import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './homeSlice';
import DetailSlice from './detailReducer';

const store = configureStore({
  reducer: {
    country: HomeReducer,
    Detail: DetailSlice,
  },
});

export default store;
