import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MusicListItem from './MusicListItem';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MusicListItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    component: 'MusicListItem',
    title: 'title',
    subtitle: 'subtitle',
    src: 'cool.png',
  };
  const comp = shallow(<MusicListItem {...props} />);
  return { comp, props };
}

describe('<MusicListItem />', () => {
  it('renders MusicListItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MusicListItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
