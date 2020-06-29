import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MuiListItemButton } from './MuiListItemButton';

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
    isButton,
    redirectRoute,
    history: {
      push: jest.fn(),
    },
    href,
  };
  const comp = shallow(<MuiListItemButton {...props} />);
  return { comp, props };
}

describe('<MuiListItemButton />', () => {
  it('renders MuiListItemButton', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and calls history push ', async () => {
    const { comp } = setup(true, '/page-test');
    window.location.assign = jest.fn();
    comp.find('WithStyles(ForwardRef(ListItem))').at(0).simulate('click');
    expect(window.location.assign).toBeCalled();
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
        <MuiListItemButton {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
