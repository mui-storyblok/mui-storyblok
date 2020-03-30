import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiIconButtonHref from './MuiIconButtonHref';

function setup() {
  const props = {
    href: 'google.com',
    iconButton: [{
      component: 'MuiIconButton',
      onClick: jest.fn(),
      icon: [{
        component: 'MuiIcon',
        iconName: 'star',
      }],
    }],
  };
  const comp = mount(<MuiIconButtonHref {...props} />);
  return { comp, props };
}

describe('<MuiIconButtonHref />', () => {
  it('renders MuiIconButtonHref', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('clicks', () => {
    it('handleClick and calls history push ', async () => {
      const { assign } = window.location;
      window.location.assign = jest.fn();
      const { comp } = setup(false);
      comp.find('WithStyles(ForwardRef(IconButton))').at(0).simulate('click');
      expect(window.location.assign).toBeCalled();
      window.location.assign = assign;
    });
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiIconButtonHref {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
