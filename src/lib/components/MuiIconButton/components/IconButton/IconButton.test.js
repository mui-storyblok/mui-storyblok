import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import IconButton from './IconButton';

function setup() {
  const props = {
    icon: [{
      component: 'MuiIcon',
      iconName: 'star',
    }],
    edge: 'start',
  };
  const comp = shallow(<IconButton />);
  return { comp, props };
}

describe('<IconButton />', () => {
  it('renders IconButton', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<IconButton {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
