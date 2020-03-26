import React from 'react';
import { shallow } from 'enzyme';
import MuiTab from './MuiTab';

function setup() {
  const props = {
    label: 'goku',
    value: 1,
    index: 1,
    handleChange: jest.fn(),
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
  const comp = shallow(<MuiTab {...props} />);
  return { comp, props };
}

describe('<MuiTab />', () => {
  it('renders MuiTab', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
