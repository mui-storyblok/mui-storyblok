import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import MuiList from './MuiList';

function setup() {
  const props = {
    content: [{
      component: 'MuiListItem',
      listItemText: [{
        component: 'MuiListItemText',
        primary: 'primary',
      }],
    }],
  };
  const comp = shallow(<MuiList {...props} />);
  return { comp, props };
}

describe('<MuiList />', () => {
  it('renders MuiList', () => {
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
          <MuiList {...props} />
        </MemoryRouter>
      </Provider>
    ));
    expect(tree).toMatchSnapshot();
  });
});
