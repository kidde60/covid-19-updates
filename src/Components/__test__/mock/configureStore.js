import { configureStore } from '@reduxjs/toolkit';
import HomeReducer from './home';
import DetailSlice from './details';

const store = configureStore({
  reducer: {
    Home: HomeReducer,
    Detail: DetailSlice,
  },
});

export default store;
