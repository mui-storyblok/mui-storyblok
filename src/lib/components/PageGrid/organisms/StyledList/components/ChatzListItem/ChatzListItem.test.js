import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ChatzListItem from './ChatzListItem';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "ChatzListItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    component: 'ChatzListItem',
    title: 'title',
    subtitle: 'subtitle',
    src: 'cool.png',
  };
  const comp = shallow(<ChatzListItem {...props} />);
  return { comp, props };
}

describe('<ChatzListItem />', () => {
  it('renders ChatzListItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ChatzListItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
