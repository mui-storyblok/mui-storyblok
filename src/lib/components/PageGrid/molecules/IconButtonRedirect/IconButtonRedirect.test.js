import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { IconButtonRedirect } from './IconButtonRedirect';

function setup(legacyRedirect = true) {
  const props = {
    redirectRoute: '/page-welcome',
    legacyRedirect,
    iconButton: [{
      component: 'IconButton',
      onClick: jest.fn(),
      icon: [{
        component: 'Icon',
        iconName: 'star',
      }],
    }],

    callback: jest.fn(),

  };
  const comp = mount(<IconButtonRedirect {...props} />);

  return { comp, props };
}

describe('<IconButtonRedirect />', () => {
  it('renders IconButtonRedirect', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('clicks', () => {
    it('handleClick and calls history push ', async () => {
      const { comp } = setup(false);
      window.location.assign = jest.fn();
      comp.find('WithStyles(ForwardRef(IconButton))').at(0).simulate('click');
      expect(window.location.assign).toBeCalled();
    });
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<IconButtonRedirect {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
