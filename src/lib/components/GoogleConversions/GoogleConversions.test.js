import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import GoogleConversions from './GoogleConversions';

function setup() {
  const props = {
    sendTo: '1234',
    aWConversionID: 'ui1234',
    button: [{
      component: 'MuiIconButtonRedirect',
      redirectRoute: '/apples',
      iconButtonRedirect: [{
        component: 'MuiIconButton',
        icon: [{
          component: 'MuiIcon',
          iconName: 'github',
        }],
      }],
    }],
  };
  const comp = mount(<GoogleConversions {...props} />);
  return { comp, props };
}

describe('<GoogleConversions />', () => {
  it('renders GoogleConversions', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<GoogleConversions {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should handle the conversionCall and call gtag correctly', () => {
    window.gtag = jest.fn();
    const { comp } = setup();
    const iconButton = comp.find('WithStyles(ForwardRef(IconButton))').first();
    iconButton.prop('onClick')();
    expect(window.gtag).toHaveBeenCalled();
  });
});
