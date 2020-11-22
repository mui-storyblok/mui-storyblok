import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CardMedia from './CardMedia';

function setup() {
  const props = {
    alt: 'alt',
    title: 'title',
    image: 'img.com',
  };
  const comp = shallow(<CardMedia {...props} />);
  return { comp, props };
}

describe('<CardMedia />', () => {
  it('renders CardMedia', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<CardMedia {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
