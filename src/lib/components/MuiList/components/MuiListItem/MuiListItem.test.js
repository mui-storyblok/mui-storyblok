import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiListItem from './MuiListItem';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiListItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
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

    listItemSecondaryAction: [{
      _editable: '<!--#storyblok#{"name": "MuiListItemSecondaryAction", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiListItemSecondaryAction',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiIconButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiIconButtonRedirect',
        iconButton: [{
          _editable: '<!--#storyblok#{"name": "MuiIconButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiIconButton',
          icon: [{
            _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'MuiIcon',
            iconName: 'star',
          }],
        }],
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
    const tree = renderer.create(<MuiListItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
