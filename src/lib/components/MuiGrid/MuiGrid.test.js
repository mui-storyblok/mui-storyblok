import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiGrid from './MuiGrid';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiGrid", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiGridItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiGridItem',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],
  };
  const comp = shallow(<MuiGrid {...props} />);
  return { comp, props };
}

describe('<MuiGrid />', () => {
  it('renders MuiGrid', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiGrid {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
