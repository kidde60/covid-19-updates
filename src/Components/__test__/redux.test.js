import store from './mock/configureStore';
import { fetchCountries } from './mock/homeSlice';

describe('test the store', () => {
  it('check if the store is populated after getCountries action is dispatched',
    async () => {
      await store.dispatch(fetchCountries());
      expect(store.getState().country.countriesData.Country).toEqual('Afghanistan');
    });
});
