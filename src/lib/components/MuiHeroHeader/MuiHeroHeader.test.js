import React from 'react';
import { shallow } from 'enzyme';
import MuiHeroHeader from './MuiHeroHeader';

function setup() {
  const props = {
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
  };
  const comp = shallow(<MuiHeroHeader {...props} />);
  return { comp, props };
}

describe('<MuiHeroHeader />', () => {
  it('renders MuiHeroHeader', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
