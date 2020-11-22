import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import YouTubeSvg from './YouTubeSvg';

function setup() {
  const props = {
    color: '#fff',
  };
  const comp = shallow(<YouTubeSvg {...props} classes={{}} />);

  return { comp, props };
}

describe('<YouTubeSvg />', () => {
  it('renders YouTubeSvg', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<YouTubeSvg {...props} classes={{}} />);
    expect(tree).toMatchSnapshot();
  });
});
