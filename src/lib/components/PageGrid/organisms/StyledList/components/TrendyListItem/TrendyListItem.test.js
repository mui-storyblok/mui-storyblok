import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TrendyListItem from './TrendyListItem';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "TrendyListItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    component: 'TrendyListItem',
    title: 'title',
    subtitle: 'subtitle',
    src: 'cool.png',
  };
  const comp = shallow(<TrendyListItem {...props} />);
  return { comp, props };
}

describe('<TrendyListItem />', () => {
  it('renders TrendyListItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<TrendyListItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
