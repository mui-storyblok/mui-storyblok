import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import BBBSvg from './BBBSvg';

function setup() {
  const props = {
    color: '#fff',
  };
  const comp = shallow(<BBBSvg {...props} />);

  return { comp, props };
}

describe('<BBBSvg />', () => {
  it('renders BBBSvg', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<BBBSvg {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
