import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Link } from './Link';

function setup(external = true) {
  const props = {
    text: 'wooo',
    href: '/page-cool',
    external,
  };
  const comp = mount(<Link {...props} />);

  return { comp, props };
}

describe('<Link />', () => {
  it('renders Link', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and call external false ', () => {
    const { assign } = window.location;
    window.location.assign = jest.fn();
    const { comp } = setup(false);
    comp.find('WithStyles(ForwardRef(Typography))').at(0).simulate('click');
    expect(window.location.assign).toBeCalled();
    window.location.assign = assign;
  });

  it.skip('handleClick and call external true ', () => {
    const { assign } = window.location;
    window.location.assign = jest.fn();
    const { comp } = setup(true);
    comp.find('WithStyles(ForwardRef(Typography))').at(0).simulate('click');
    expect(window.location.assign).toBeCalled();
    window.location.assign = assign;
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<Link {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
