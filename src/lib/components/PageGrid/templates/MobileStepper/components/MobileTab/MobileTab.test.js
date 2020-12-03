import React from 'react';
import { shallow } from 'enzyme';
import MobileTab from './MobileTab';

function setup() {
  const props = {
    tab: {
      backgroundImageUrl: 'www.aoisdjfasd.com',
      component: 'MobileTabGrid',
      content: [{
        component: 'MobileTabGridItem',
        content: [{
          component: 'Typography',
          content: [{
            component: 'Span',
            text: 'mountains are cool',
          }],
        }],
      }],
    },
  };
  const comp = shallow(<MobileTab {...props} />);
  return { comp, props };
}

describe('<MobileTab />', () => {
  it('renders MobileTab', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
