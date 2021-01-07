import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ScrollButton from './ScrollButton';


function setup() {
  const props = {
    button: [{
      component: 'MuiButton',
      buttonText: 'buttonText',
    }],
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
    // console.log(comp.debug());
    const button = comp.find('Button').first();
    button.simulate('click');
    expect(window.scrollBy).toHaveBeenCalled();
    window.scrollBy = originalWindow;
  });
});
