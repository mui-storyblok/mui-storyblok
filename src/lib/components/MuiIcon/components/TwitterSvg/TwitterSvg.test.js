import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TwitterSvg from './TwitterSvg';

function setup() {
  const props = {
    color: '#fff',
  };
  const comp = shallow(<TwitterSvg {...props} classes={{}} />);

  return { comp, props };
}

describe('<TwitterSvg />', () => {
  it('renders TwitterSvg', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<TwitterSvg {...props} classes={{}} />);
    expect(tree).toMatchSnapshot();
  });
});
