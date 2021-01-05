import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListItemIcon from './ListItemIcon';

function setup() {
  const props = {
    content: [{
      component: 'Icon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<ListItemIcon {...props} />);
  return { comp, props };
}

describe('<ListItemIcon />', () => {
  it('renders ListItemIcon', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ListItemIcon {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
