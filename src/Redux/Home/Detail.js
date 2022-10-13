import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDetails = createAsyncThunk('countries/fetchCountries', async () => {
    return await axios
        .get('https://api.covid19api.com/summary')
        .then((response) => console.log(response.data))
})

const initialState = {
    loading: false,
    countriesDetails: {},
    error: ''
}
const DetailSlice = createSlice({
    name: 'details',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchDetails.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.loading = false
            state.countriesDetails = action.payload.Countries


            state.error = ''
        })
        builder.addCase(fetchDetails.rejected, (state, action) => {
            state.loading = false
            state.countriesDetails = {}

            state.error = action.error.message
        })
    },
})

export default DetailSlice.reducer