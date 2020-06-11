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

  it('should handle the change of the index', () => {
    const { comp } = setup();
    console.log(comp.debug({ ignoreProps: true }));
    const firstTab = comp.find('WithStyles(ForwardRef(Tabs))').first();
    firstTab.simulate('click');
    console.log(comp.debug({ ignoreProps: true }));
    // console.log(comp.debug());
  });
});
