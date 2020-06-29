import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';


describe('<MuiAppBar />', () => {
  it('renders MuiAppBar', () => {
    const comp = shallow(<App />);
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const tree = renderer.create(<App />);
    expect(tree).toMatchSnapshot();
  });
});
