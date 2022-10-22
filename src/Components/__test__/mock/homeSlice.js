/* eslint-disable */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    countriesData: [],
    global: [],
    error: "",
};

export const fetchCountries = createAsyncThunk(
    "countries/fetchCountries",
    async () => ({
        Country: "Afghanistan",
        TotalConfirmed: 201750,
        TotalDeaths: 7814,
        NewConfirmed: 193,
    })
);

const HomeSlice = createSlice({
    name: "country",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.loading = false;
            state.countriesData = action.payload;
            state.global = action.payload.Global;

            state.error = "";
        });
        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.loading = false;
            state.countriesData = {};
            state.global = {};

            state.error = action.error.message;
        });
    },
});

export default HomeSlice.reducer;
