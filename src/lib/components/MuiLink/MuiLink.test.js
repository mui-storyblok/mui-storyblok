import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiLink from './MuiLink';

function setup() {
  const props = {
    href: 'href.com',
    text: 'text',
  };
  const comp = shallow(<MuiLink {...props} />);
  return { comp, props };
}

describe('<MuiLink />', () => {
  it('renders MuiLink', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('renders MuiLink', () => {
    const { replace } = window.location;
    window.location.replace = jest.fn();
    const { comp } = setup();
    comp.find('WithStyles(ForwardRef(Link))').first().simulate('click');
    expect(window.location.replace).toBeCalled();
    window.location.replace = replace;
  });


  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiLink {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
