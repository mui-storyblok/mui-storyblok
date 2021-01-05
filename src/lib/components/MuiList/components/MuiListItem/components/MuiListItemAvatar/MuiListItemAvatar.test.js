import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiListItemAvatar from './MuiListItemAvatar';

function setup() {
  const props = {
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiIcon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<MuiListItemAvatar {...props} />);
  return { comp, props };
}

describe('<MuiListItemAvatar />', () => {
  it('renders MuiListItemAvatar', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiListItemAvatar {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
