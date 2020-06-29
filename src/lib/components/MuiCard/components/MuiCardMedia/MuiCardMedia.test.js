import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiCardMedia from './MuiCardMedia';

function setup() {
  const props = {
    alt: 'alt',
    title: 'title',
    image: 'img.com',
  };
  const comp = shallow(<MuiCardMedia {...props} />);
  return { comp, props };
}

describe('<MuiCardMedia />', () => {
  it('renders MuiCardMedia', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiCardMedia {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
