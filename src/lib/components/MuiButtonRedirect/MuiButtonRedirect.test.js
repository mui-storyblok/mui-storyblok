import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiButtonRedirect } from './MuiButtonRedirect';

function setup(legacyRedirect = true) {
  const props = {
    button: [{
      component: 'MuiButton',
      buttonText: 'buttonText',
    }],
    redirectRoute: 'page-welcome',
    legacyRedirect,
  };
  const comp = mount(<MuiButtonRedirect {...props} />);

  return { comp, props };
}

describe('<MuiButtonRedirect />', () => {
  it('renders MuiButtonRedirect', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and call GoogleHelpers contact ', async () => {
    const { comp } = setup(false);
    window.location.assign = jest.fn();
    comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(window.location.assign).toBeCalled();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiButtonRedirect {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
