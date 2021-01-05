import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Span } from './Span';

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ inView: true, ref: {} }),
}));

function setup(external = true) {
  const props = {
    content: 'wooo',
    external,
  };
  const comp = mount(<Span {...props} />);

  return { comp, props };
}

describe('<Span />', () => {
  it('renders Span', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<Span {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
