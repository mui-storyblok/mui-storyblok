import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiListItemAvatar from './MuiListItemAvatar';

function setup() {
  const props = {
    content: [{
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
