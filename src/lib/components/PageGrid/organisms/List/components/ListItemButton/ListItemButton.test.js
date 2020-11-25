import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { ListItemButton } from './ListItemButton';

function setup(isButton = false, redirectRoute = undefined, href = undefined) {
  const props = {
    _editable: '<!--#storyblok#{"name": "ListItemButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

    listItemAvatar: [{
      _editable: '<!--#storyblok#{"name": "ListItemAvatar", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

      component: 'ListItemAvatar',
      content: [{
        _editable: '<!--#storyblok#{"name": "Icon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

        component: 'Icon',
        iconName: 'android',
      }],
    }],

    listItemIcon: [{
      _editable: '<!--#storyblok#{"name": "ListItemIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

      component: 'ListItemIcon',
      content: [{
        _editable: '<!--#storyblok#{"name": "Icon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

        component: 'Icon',
        iconName: 'android',
      }],
    }],

    listItemText: [{
      _editable: '<!--#storyblok#{"name": "ListItemText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

      component: 'ListItemText',
      primary: 'primary',
    }],
    isButton,
    redirectRoute,
    history: {
      push: jest.fn(),
    },
    href,
  };
  const comp = shallow(<ListItemButton {...props} />);
  return { comp, props };
}

describe('<ListItemButton />', () => {
  it('renders ListItemButton', () => {
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
    const tree = renderer.create(<ListItemButton {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
