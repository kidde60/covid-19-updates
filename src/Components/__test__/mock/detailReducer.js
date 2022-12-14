/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDetails = createAsyncThunk('countries/fetchCountries',
  async () => ({
    Country: 'Afghanistan',
    Date: '2022-10-21T16:55:45.724Z',
    NewConfirmed: 193,
    NewDeaths: 2,
    NewRecovered: 0,
    TotalConfirmed: 201750,
    TotalDeaths: 7814,

  }));
const initialState = {
  loading: false,
  countriesDetails: {},
  error: '',
};
const DetailSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.countriesDetails = action.payload.Countries;

      state.error = '';
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      state.loading = false;
      state.countriesDetails = {};

      state.error = action.error.message;
    });
  },
});

export default DetailSlice.reducer;
