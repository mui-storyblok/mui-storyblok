import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Storyblok from '../../utils/Storyblok';
import MuiIconButton from './MuiIconButton';

Storyblok.arrayToMuiStyles = jest.fn(() => ({}));

function setup() {
  const props = {
    icon: [{
      component: 'MuiIcon',
      iconName: 'star',
    }],
    onClick: jest.fn(),
  };
  const comp = mount(<MuiIconButton {...props} />);
  return { comp, props };
}

describe('<MuiIconButton />', () => {
  it('renders MuiIconButton', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('click', () => {
    it('onClick to be called', () => {
      const { comp, props } = setup();
      comp.find('WithStyles(ForwardRef(IconButton))').at(0).simulate('click');
      expect(props.onClick).toBeCalled();
    });
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiIconButton {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
