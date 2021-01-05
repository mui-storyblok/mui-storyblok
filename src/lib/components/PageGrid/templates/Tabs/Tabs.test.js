/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import Tabs from './Tabs';

function setup() {
  const props = {
    tabs: [{
      component: 'Tab',
      label: 'First Tab option',
      content: [{
        component: 'Tabs',
        content: [{
          component: 'TabsGridItem',
          content: [{
            component: 'Typography',
            content: [{
              component: 'MuiText',
              text: 'First tab text',
            }],
          }],
        }],
      }],
    },
    {
      component: 'MuiTab',
      label: 'Second Tab option',
      content: [{
        component: 'MuiGrid',
        content: [{
          component: 'MuiGridItem',
          content: [{
            component: 'MuiTypography',
            content: [{
              component: 'MuiText',
              text: 'Second tab text',
            }],
          }],
        }],
      }],
    }],
  };
  const comp = mount(<Tabs {...props} />);
  return { comp, props };
}

describe('<Tabs />', () => {
  it('renders Tabs', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should handleChangeIndex and change the tab value', () => {
    const { comp } = setup();
    const tabValue = comp.find('ForwardRef(Tab)').first().prop('value');
    expect(tabValue).toEqual(0);
    const reactSwipeable = comp.find('ReactSwipableView').first();
    reactSwipeable.prop('onChangeIndex')();
    const tabValue2 = comp.find('ForwardRef(Tab)').at(1).prop('value');
    expect(tabValue2).toEqual(1);
  });
});
