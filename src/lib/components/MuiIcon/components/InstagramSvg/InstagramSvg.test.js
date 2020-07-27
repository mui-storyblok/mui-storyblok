import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import InstagramSvg from './InstagramSvg';

function setup() {
  const props = {
    color: '#fff',
  };
  const comp = shallow(<InstagramSvg {...props} classes={{}} />);

  return { comp, props };
}

describe('<InstagramSvg />', () => {
  it('renders InstagramSvg', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<InstagramSvg {...props} classes={{}} />);
    expect(tree).toMatchSnapshot();
  });
});
