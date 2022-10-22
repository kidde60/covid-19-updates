import renderer from 'react-test-renderer';

describe('Currency display container', () => {
  it('Confirm that the currency display renders correctly', () => {
    const tree = renderer.create(<fetchCountries />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
