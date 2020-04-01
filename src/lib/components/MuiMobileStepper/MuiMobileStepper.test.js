import React from 'react';
import { shallow } from 'enzyme';
import MuiMobileStepper from './MuiMobileStepper';

function setup() {
  const props = {
    tabs: [{
      component: 'MuiMobileTab',
      tab: [{
        component: 'MuiHeroHeader',
        backgroundImageUrl: 'backgroundImageUrl.png',
        content: [{
          component: 'MuiGrid',
          content: [{
            component: 'MuiGridItem',
            content: [{
              component: 'MuiIcon',
              iconName: 'android',
            }],
          }],
        }],
      }],
    }],

    nextBtn: [{
      component: 'MuiButton',
      buttonText: 'next',
    }],

    backBtn: [{
      component: 'MuiButton',
      buttonText: 'next',
    }],
  };
  const comp = shallow(<MuiMobileStepper {...props} />);
  return { comp, props };
}

describe('<MuiMobileStepper />', () => {
  it('renders MuiMobileStepper', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
