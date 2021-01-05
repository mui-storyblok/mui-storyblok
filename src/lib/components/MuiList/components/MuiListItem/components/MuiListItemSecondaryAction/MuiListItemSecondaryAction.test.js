import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiListItemSecondaryAction from './MuiListItemSecondaryAction';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiIconButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
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
  };
  const comp = shallow(<MuiListItemSecondaryAction {...props} />);
  return { comp, props };
}

describe('<MuiListItemSecondaryAction />', () => {
  it('renders MuiListItemSecondaryAction', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiListItemSecondaryAction {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
