import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Storyblok from 'lib/utils/Storyblok';
import IconButton from './IconButton';

Storyblok.arrayToStyles = jest.fn(() => ({}));

function setup(tooltip = []) {
  const props = {
    tooltip,
    icon: [{
      component: 'Icon',
      iconName: 'star',
    }],
    onClick: jest.fn(),
  };
  const comp = mount(<IconButton {...props} />);
  return { comp, props };
}

describe('<IconButton />', () => {
  it('renders IconButton', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('tooltip', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });


    it('shows tooltip', () => {
      const tooltip = [{
        title: 'cool',
      }];
      const { props } = setup(tooltip);

      const tip = container.querySelector("[data-testid='tooltip']");

      act(() => {
        ReactDOM.render(<IconButton {...props} />, container);
      });

      expect(tip).toBeDefined();
    });

    it('hides tooltip', () => {
      const { props } = setup();

      const tip = container.querySelector("[data-testid='tooltip']");

      act(() => {
        ReactDOM.render(<IconButton {...props} />, container);
      });
      expect(tip).toBe(null);
    });
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
    const tree = renderer.create(<IconButton {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
