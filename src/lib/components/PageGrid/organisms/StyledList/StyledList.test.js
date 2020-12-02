import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import StyledList from './StyledList';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "StyledList", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MusicListItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MusicListItem',
      title: 'title',
      subtitle: 'subtitle',
      src: 'cool.png',
    }],
  };
  const comp = shallow(<StyledList {...props} />);
  return { comp, props };
}

describe('<StyledList />', () => {
  it('renders StyledList', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<StyledList {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
