import React from 'react';
import { shallow } from 'enzyme';
import MuiTabs from './MuiTabs';

function setup() {
  const props = {
    tabs: [{
      icon: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
      component: 'MuiTab',
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
  };
  const comp = shallow(<MuiTabs {...props} />);
  return { comp, props };
}

describe('<MuiTabs />', () => {
  it('renders MuiTabs', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
