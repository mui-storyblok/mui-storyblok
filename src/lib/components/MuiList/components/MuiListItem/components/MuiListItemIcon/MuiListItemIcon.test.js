import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import MuiListItemIcon from './MuiListItemIcon';

function setup() {
  const props = {
    content: [{
      component: 'MuiIcon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<MuiListItemIcon {...props} />);
  return { comp, props };
}

describe('<MuiListItemIcon />', () => {
  it('renders MuiListItemIcon', () => {
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
          <MuiListItemIcon {...props} />
        </MemoryRouter>
      </Provider>
    ));
    expect(tree).toMatchSnapshot();
  });
});
