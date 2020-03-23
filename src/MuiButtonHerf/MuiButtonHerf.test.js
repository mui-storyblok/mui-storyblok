import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiButtonHerf from './MuiButtonHerf';

function setup() {
  const props = {
    herf: 'google.com',
  };
  const comp = shallow(<MuiButtonHerf {...props} />);
  return { comp, props };
}

describe('<MuiButtonHerf />', () => {
  it('renders MuiButtonHerf', () => {
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
        <MuiButtonHerf {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
