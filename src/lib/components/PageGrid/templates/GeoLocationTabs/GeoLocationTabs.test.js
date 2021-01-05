/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import GeoLocationTabs from './GeoLocationTabs';

const tab = [{
  component: 'Tab',
  label: 'First Tab option',
  content: [{
    component: 'Grid',
    content: [{
      component: 'GridItem',
      content: [{
        component: 'Typography',
        content: [{
          component: 'Text',
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
  const comp = mount(<GeoLocationTabs {...props} />);
  return { comp, props };
}

describe('<GeoLocationTabs />', () => {
  it('renders GeoLocationTabs', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
