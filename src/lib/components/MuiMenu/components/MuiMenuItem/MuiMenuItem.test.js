import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiMenuItem from './MuiMenuItem';

function setup(googleConversionTracking = '', legacyRedirect = true) {
  const props = {
    buttonText: 'buttonText',
    redirectRoute: 'page-welcome',
    legacyRedirect,
    googleConversionTracking,
  };
  const comp = mount(<MuiMenuItem {...props} />);
  return { comp, props };
}

describe('<MuiMenuItem />', () => {
  it('renders MuiMenuItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and call GoogleHelpers contact ', async () => {
    const { comp } = setup('contact', false);
    window.location.assign = jest.fn();
    comp.find('ForwardRef(MenuItem)').at(0).simulate('click');
    expect(window.location.assign).toBeCalled();
  });

  test('snapshot with auth', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiMenuItem {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
