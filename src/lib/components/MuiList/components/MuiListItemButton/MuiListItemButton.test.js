import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiListItemButton } from './MuiListItemButton';

function setup(isButton = false, redirectRoute = undefined, href = undefined) {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiListItemButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

    listItemAvatar: [{
      _editable: '<!--#storyblok#{"name": "MuiListItemAvatar", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

      component: 'MuiListItemAvatar',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    listItemIcon: [{
      _editable: '<!--#storyblok#{"name": "MuiListItemIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

      component: 'MuiListItemIcon',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    listItemText: [{
      _editable: '<!--#storyblok#{"name": "MuiListItemText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

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
    const tree = renderer.create(<MuiListItemButton {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
