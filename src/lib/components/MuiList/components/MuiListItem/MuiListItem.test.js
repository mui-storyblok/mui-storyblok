import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MuiListItem } from './MuiListItem';

function setup(isButton = false, redirectRoute = undefined, href = undefined) {
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
        component: 'MuiIconButtonRedirect',
        iconButton: [{
          component: 'MuiIconButton',
          icon: [{
            component: 'MuiIcon',
            iconName: 'star',
          }],
        }],
      }],
    }],
    isButton,
    redirectRoute,
    history: {
      push: jest.fn(),
    },
    href,
  };
  const comp = shallow(<MuiListItem {...props} />);
  return { comp, props };
}

describe('<MuiListItem />', () => {
  it('renders MuiListItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and calls history push ', async () => {
    const { comp, props } = setup(true, '/page-test');
    comp.find('WithStyles(ForwardRef(ListItem))').at(0).simulate('click');
    expect(props.history.push).toBeCalled();
  });

  it('handleClick and calls history push ', async () => {
    const { assign } = window.location;
    window.location.assign = jest.fn();
    const { comp } = setup(false, undefined, 'www.google.com');
    comp.find('WithStyles(ForwardRef(ListItem))').at(0).simulate('click');
    expect(window.location.assign).toBeCalled();
    window.location.assign = assign;
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiListItem {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
