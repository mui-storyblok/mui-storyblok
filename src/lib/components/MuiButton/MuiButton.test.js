import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Storyblok from 'lib/utils/Storyblok';
import MuiButton from './MuiButton';

Storyblok.arrayToMuiStyles = jest.fn(() => ({}));

function setup() {
  const props = {
    buttonText: 'buttonText',
    onClick: jest.fn(),
  };
  const comp = mount(<MuiButton {...props} />);
  return { comp, props };
}

describe('<MuiButton />', () => {
  it('renders MuiButton', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('click', () => {
    it('onClick to be called', () => {
      const { comp, props } = setup();
      comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
      expect(props.onClick).toBeCalled();
    });
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiButton {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
