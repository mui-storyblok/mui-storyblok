/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import MuiTabs from './MuiTabs';

function setup() {
  const props = {
    tabs: [{
      component: 'MuiTab',
      label: 'First Tab option',
      content: [{
        component: 'MuiGrid',
        content: [{
          component: 'MuiGridItem',
          content: [{
            component: 'MuiTypography',
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
  const comp = mount(<MuiTabs {...props} />);
  return { comp, props };
}

describe('<MuiTabs />', () => {
  it('renders MuiTabs', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it.skip('should handle the change of tabs when clicked', () => {
    const { comp } = setup();
    const mockEvent = jest.fn();
    const secondTab = comp.find('WithStyles(ForwardRef(Tab))').at(1).prop('onChange');
    act(() => {
      secondTab(mockEvent, 1);
    });
    // React Siwpeable Views is not allowing to target elements to see change.
  });
});
