/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import MuiGeoLocationTabs from './MuiGeoLocationTabs';

const tab = [{
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
}];

function setup() {
  const props = {
    tabs: [...tab, ...tab],
  };
  const comp = mount(<MuiGeoLocationTabs {...props} />);
  return { comp, props };
}

describe('<MuiGeoLocationTabs />', () => {
  it('renders MuiGeoLocationTabs', () => {
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
