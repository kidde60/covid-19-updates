import store from './mock/configureStore';
import { fetchCountries } from './mock/home';

// import store from "./mock/store";
// import { fetchCurrencies } from "./mock/forexslice";

describe("test the store", () => {
  it("check if the store is populated after getCountries action is dispatched", async () => {
    await store.dispatch(fetchCountries());
    expect(store.getState().Home.countriesData.NewConfirmed).toEqual(193);
  });
});
