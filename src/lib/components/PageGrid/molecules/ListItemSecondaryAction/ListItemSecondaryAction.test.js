import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListItemSecondaryAction from './ListItemSecondaryAction';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "IconButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "IconButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'IconButtonRedirect',
      iconButton: [{
        _editable: '<!--#storyblok#{"name": "IconButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'IconButton',
        icon: [{
          _editable: '<!--#storyblok#{"name": "Icon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'Icon',
          iconName: 'star',
        }],
      }],
    }],
  };
  const comp = shallow(<ListItemSecondaryAction {...props} />);
  return { comp, props };
}

describe('<ListItemSecondaryAction />', () => {
  it('renders ListItemSecondaryAction', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ListItemSecondaryAction {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
