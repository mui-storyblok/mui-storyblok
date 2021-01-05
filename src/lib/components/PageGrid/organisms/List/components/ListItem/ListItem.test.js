import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListItem from './ListItem';

function setup() {
  const props = {
    component: 'ListItem',
    _editable: '<!--#storyblok#{"name": "ListItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    listItemText: [{
      _editable: '<!--#storyblok#{"name": "ListItemText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'ListItemText',
      primary: 'primary',
    }],
  };
  const comp = shallow(<ListItem {...props} />);
  return { comp, props };
}

describe('<ListItem />', () => {
  it('renders ListItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ListItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
