import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListItemAvatar from './ListItemAvatar';

function setup() {
  const props = {
    content: [{
      _editable: '<!--#storyblok#{"name": "Icon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Icon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<ListItemAvatar {...props} />);
  return { comp, props };
}

describe('<ListItemAvatar />', () => {
  it('renders ListItemAvatar', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ListItemAvatar {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
