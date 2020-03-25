import React from 'react';
import { shallow } from 'enzyme';
import TabPannal from './TabPannal';

function setup() {
  const props = {
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
  };
  const comp = shallow(<TabPannal {...props} />);
  return { comp, props };
}

describe('<TabPannal />', () => {
  it('renders TabPannal', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
