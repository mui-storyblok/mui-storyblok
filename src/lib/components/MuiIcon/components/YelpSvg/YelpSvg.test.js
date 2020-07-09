import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import YelpSvg from './YelpSvg';

function setup() {
  const props = {
    color: '#fff',
  };
  const comp = shallow(<YelpSvg {...props} classes={{}} />);

  return { comp, props };
}

describe('<YelpSvg />', () => {
  it('renders YelpSvg', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<YelpSvg {...props} classes={{}} />);
    expect(tree).toMatchSnapshot();
  });
});
