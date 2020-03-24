import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import MuiListItemText from './MuiListItemText';

function setup() {
  const props = {
    component: 'MuiListItemText',
    primary: 'primary',
    secondary: 'secondary',
  };
  const comp = shallow(<MuiListItemText {...props} />);
  return { comp, props };
}

describe('<MuiListItemText />', () => {
  it('renders MuiListItemText', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const mockstore = configureMockStore();
    const store = mockstore({});
    const tree = renderer.create((
      <Provider store={store}>
        <MemoryRouter>
          <MuiListItemText {...props} />
        </MemoryRouter>
      </Provider>
    ));
    expect(tree).toMatchSnapshot();
  });
});
