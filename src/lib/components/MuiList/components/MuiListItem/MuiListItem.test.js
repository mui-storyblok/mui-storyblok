import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import MuiListItem from './MuiListItem';

function setup() {
  const props = {
    listItemAvatar: [{
      component: 'MuiListItemAvatar',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    listItemIcon: [{
      component: 'MuiListItemIcon',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    listItemText: [{
      component: 'MuiListItemText',
      primary: 'primary',
    }],

    listItemSecondaryAction: [{
      component: 'MuiListItemSecondaryAction',
      content: [{
        component: 'MuiButtonRedirect',
        buttonText: 'buttonText',
        redirectRoute: 'page-welcome',
      }],
    }],
  };
  const comp = shallow(<MuiListItem {...props} />);
  return { comp, props };
}

describe('<MuiListItem />', () => {
  it('renders MuiListItem', () => {
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
          <MuiListItem {...props} />
        </MemoryRouter>
      </Provider>
    ));
    expect(tree).toMatchSnapshot();
  });
});
