import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MuiIconButtonRedirect } from './MuiIconButtonRedirect';

function setup(legacyRedirect = true) {
  const props = {
    redirectRoute: 'page-welcome',
    legacyRedirect,
    iconButton: [{
      component: 'MuiIconButton',
      onClick: jest.fn(),
      icon: [{
        component: 'MuiIcon',
        iconName: 'star',
      }],
    }],

    history: {
      push: jest.fn(),
    },

  };
  const comp = mount(<MuiIconButtonRedirect {...props} />);

  return { comp, props };
}

describe('<MuiIconButtonRedirect />', () => {
  it('renders MuiIconButtonRedirect', () => {
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

    const tree = renderer.create((
      <MemoryRouter>
        <MuiIconButtonRedirect {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
