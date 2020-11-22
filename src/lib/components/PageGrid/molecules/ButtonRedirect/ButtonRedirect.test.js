import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { ButtonRedirect } from './ButtonRedirect';

function setup(external = true) {
  const props = {
    button: [{
      component: 'MuiButton',
      buttonText: 'buttonText',
    }],
    redirectRoute: 'page-welcome',
    external,
  };
  const comp = mount(<ButtonRedirect {...props} />);

  return { comp, props };
}

describe('<ButtonRedirect />', () => {
  it('renders ButtonRedirect', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and call GoogleHelpers contact ', async () => {
    const { comp } = setup(false);
    window.location.assign = jest.fn();
    comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(window.location.assign).toBeCalled();
  });

  it('handleClick and call GoogleHelpers contact ', async () => {
    const { comp } = setup(true);
    window.location.assign = jest.fn();
    comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(window.location.assign).toBeCalled();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ButtonRedirect {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
