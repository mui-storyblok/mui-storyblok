import React from 'react';
import { shallow } from 'enzyme';
import GeoLocationMobileStepper from './GeoLocationMobileStepper';

const tabs = [{
  component: 'MobileTab',
  geocodeState: 'CO',
  tab: [{
    component: 'HeroHeader',
    backgroundImageUrl: 'backgroundImageUrl.png',
    content: [{
      component: 'Grid',
      content: [{
        component: 'GridItem',
        content: [{
          component: 'Icon',
          iconName: 'android',
        }],
      }],
    }],
  }],
},
{
  component: 'MobileTab',
  geocodeState: 'CO',
  tab: [{
    component: 'HeroHeader',
    backgroundImageUrl: 'backgroundImageUrl222.png',
    content: [{
      component: 'Grid',
      content: [{
        component: 'GridItem',
        content: [{
          component: 'Icon',
          iconName: 'menu',
        }],
      }],
    }],
  }],
}];

function setup(googleApiKey = '1234') {
  const props = {
    autoplay: true,
    googleApiKey,
    tabs: [...tabs],
    nextBtn: [{
      component: 'Button',
      buttonText: 'next',
      onClick: jest.fn(),
    }],

    backBtn: [{
      component: 'Button',
      buttonText: 'previous',
      onClick: jest.fn(),
    }],
  };
  const comp = shallow(<GeoLocationMobileStepper {...props} />);
  return { comp, props };
}

describe('<GeoLocationMobileStepper />', () => {
  it('renders GeoLocationMobileStepper', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
