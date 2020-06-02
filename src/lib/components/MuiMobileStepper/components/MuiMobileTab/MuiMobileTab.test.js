import React from 'react';
import { shallow } from 'enzyme';
import MuiMobileTab from './MuiMobileTab';

function setup() {
  const props = {
    tab: {
      backgroundImageUrl: 'www.aoisdjfasd.com',
      component: 'MuiHeroHeader',
      content: [{
        component: 'MuiGridItem',
        content: [{
          component: 'MuiTypography',
          content: [{
            component: 'MuiText',
            text: 'mountains are cool',
          }],
        }],
      }],
    },
  };
  const comp = shallow(<MuiMobileTab {...props} />);
  return { comp, props };
}

describe('<MuiMobileTab />', () => {
  it('renders MuiMobileTab', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
