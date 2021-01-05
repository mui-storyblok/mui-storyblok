import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import List from './List';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "List", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "ListItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'ListItem',
      listItemText: [{
        _editable: '<!--#storyblok#{"name": "ListItemText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'ListItemText',
        primary: 'primary',
      }],
    }],
  };
  const comp = shallow(<List {...props} />);
  return { comp, props };
}

describe('<List />', () => {
  it('renders List', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<List {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
