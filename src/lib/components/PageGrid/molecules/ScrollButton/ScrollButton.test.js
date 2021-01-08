import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ScrollButton from './ScrollButton';


function setup(tooltip = []) {
  const props = {
    button: [{
      component: 'MuiButton',
      buttonText: 'buttonText',
    }],
    tooltip,
  };
  const comp = mount(<ScrollButton {...props} />);
  return { comp, props };
}

describe('<ScrollButton />', () => {
  it('renders ScrollButton', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ScrollButton {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('simulates click and calls window scrollBy func', () => {
    const originalWindow = window.scrollBy;
    window.scrollBy = jest.fn();
    const { comp } = setup();
    const button = comp.find('Button').first();
    button.simulate('click');
    expect(window.scrollBy).toHaveBeenCalled();
    window.scrollBy = originalWindow;
  });

  it('renders tooltip if tooltip is provided to sroll button', () => {
    const { comp } = setup([{ text: 'apples' }]);
    const tooltip = comp.find('MuiTooltip').first();
    expect(tooltip).toBeDefined();
  });
});
