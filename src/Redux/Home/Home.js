import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    countriesData: {},
    error: ''
}

export const fetchCountries = createAsyncThunk('countries/fetchCountries', () => {
    return axios
        .get('https://api.covid19api.com/summary')
        .then((response) => response.data)
})
const HomeSlice = createSlice({
    name: 'country',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCountries.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.loading = false
            state.countriesData = action.payload

            state.error = ''
        })
        builder.addCase(fetchCountries.rejected, (state, action) => {
            state.loading = false
            state.countriesData = []

            state.error = action.error.message
        })
    },
})

export default HomeSlice.reducer