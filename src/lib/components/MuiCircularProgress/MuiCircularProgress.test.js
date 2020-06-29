import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiCircularProgress from './MuiCircularProgress';

function setup() {
  const props = {
    color: 'primary',
    disableShrink: false,
    size: 40,
    thickness: 3.6,
    variant: 'indeterminate',
  };
  const comp = mount(<MuiCircularProgress {...props} />);
  return { comp, props };
}

describe('<MuiCircularProgress />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiCircularProgress {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiCircularProgress', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
