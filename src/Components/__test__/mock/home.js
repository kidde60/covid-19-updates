// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = {
//   countryList: [],
//   searchKeys: [],
// };

// export const getCountriesData = createAsyncThunk(
//   'countries/countriesData',
//   async () => ({
//     name: 'Ghana',
//     flag: 'flag.png',
//     population: '32100',
//   }),
// );

// const countriesSlice = createSlice({
//   name: 'country',
//   initialState,
//   reducers: {
//     filterByKey: (state, action) => {
//       if (action.payload !== 'DEFAULT') {
//         const filteredCountries = state.countryList.filter(
//           (el) => (el.region === action.payload),
//         );
//         return {
//           countryList: state.countryList,
//           filteredCountries,
//           searchKeys: state.searchKeys,
//         };
//       }
//       return {
//         countryList: state.countryList,
//         searchKeys: state.searchKeys,
//       };
//     },
//   },

//   extraReducers: {
//     [getCountriesData.fulfilled]:
//     (state, { payload }) => ({
//       countryList: payload,
//       searchKeys: ['all', 'Asia', 'Africa',
//         'America', 'Europe', 'Oceania'],
//     })
//     ,
//   },
// });

// export const { filterByKey } = countriesSlice.actions;
// export default countriesSlice.reducer;

/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  countriesData: {},
  global: {},
  error: '',
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries',
  async () => ({
    Country: 'Afghanistan',
    TotalConfirmed: 201750,
    TotalDeaths: 7814,
    NewConfirmed: 193
  })
);

const HomeSlice = createSlice({
  name: 'country',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.countriesData = action.payload.Countries;
      state.global = action.payload.Global;

      state.error = '';
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
