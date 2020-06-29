import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import LinkedinSvg from './LinkedinSvg';

function setup() {
  const props = {
    color: '#fff',
  };
  const comp = shallow(<LinkedinSvg {...props} />);

  return { comp, props };
}

describe('<LinkedinSvg />', () => {
  it('renders LinkedinSvg', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<LinkedinSvg {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
