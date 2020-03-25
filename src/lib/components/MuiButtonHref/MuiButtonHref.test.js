import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiButtonHref from './MuiButtonHref';

function setup() {
  const props = {
    button: [{
      component: 'MuiButton',
      buttonText: 'buttonText',
    }],
    herf: 'google.com',
  };
  const comp = mount(<MuiButtonHref {...props} />);
  return { comp, props };
}

describe('<MuiButtonHref />', () => {
  it('renders MuiButtonHref', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('clicks', () => {
    it('handleClick and calls history push ', async () => {
      const { assign } = window.location;
      window.location.assign = jest.fn();
      const { comp } = setup(false);
      comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
      expect(window.location.assign).toBeCalled();
      window.location.assign = assign;
    });
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiButtonHref {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
