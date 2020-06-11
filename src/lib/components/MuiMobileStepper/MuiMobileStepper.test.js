import React from 'react';
import { shallow } from 'enzyme';
import MuiMobileStepper from './MuiMobileStepper';

function setup() {
  const props = {
    autoplay: true,
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
    },
    {
      component: 'MuiMobileTab',
      tab: [{
        component: 'MuiHeroHeader',
        backgroundImageUrl: 'backgroundImageUrl222.png',
        content: [{
          component: 'MuiGrid',
          content: [{
            component: 'MuiGridItem',
            content: [{
              component: 'MuiIcon',
              iconName: 'menu',
            }],
          }],
        }],
      }],
    }],

    nextBtn: [{
      component: 'MuiButton',
      buttonText: 'next',
      onClick: jest.fn(),
    }],

    backBtn: [{
      component: 'MuiButton',
      buttonText: 'previous',
      onClick: jest.fn(),
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

  it('should handleNext and increment activeStep by one then set active to 0 after all steps have been called', () => {
    const { comp } = setup();
    const firstStep = comp.find('WithStyles(ForwardRef(MobileStepper))').prop('activeStep');
    expect(firstStep).toEqual(0);
    comp.find('WithStyles(ForwardRef(MobileStepper))').first().prop('nextButton').props.children.props.onClick();
    const secondStep = comp.find('WithStyles(ForwardRef(MobileStepper))').prop('activeStep');
    expect(secondStep).toEqual(1);
    comp.find('WithStyles(ForwardRef(MobileStepper))').first().prop('nextButton').props.children.props.onClick();
    const lastStep = comp.find('WithStyles(ForwardRef(MobileStepper))').prop('activeStep');
    expect(lastStep).toEqual(0);
  });

  it('should handleBack and increment activeStep by one then set active to 0 after all steps have been called', () => {
    const { comp } = setup();
    const firstStep = comp.find('WithStyles(ForwardRef(MobileStepper))').prop('activeStep');
    expect(firstStep).toEqual(0);
    comp.find('WithStyles(ForwardRef(MobileStepper))').first().prop('backButton').props.children.props.onClick();
    const secondStep = comp.find('WithStyles(ForwardRef(MobileStepper))').prop('activeStep');
    expect(secondStep).toEqual(1);
    comp.find('WithStyles(ForwardRef(MobileStepper))').first().prop('backButton').props.children.props.onClick();
    const lastStep = comp.find('WithStyles(ForwardRef(MobileStepper))').prop('activeStep');
    expect(lastStep).toEqual(0);
  });

  it('should handle onChangeIndex and change the activeStep', () => {
    const { comp } = setup();
    const activeStep = comp.find('WithStyles(ForwardRef(MobileStepper))').prop('activeStep');
    expect(activeStep).toEqual(0);
    const autoPlay = comp.find('AutoPlay').first().prop('onChangeIndex');
    autoPlay(1);
    const activeStep2 = comp.find('WithStyles(ForwardRef(MobileStepper))').prop('activeStep');
    expect(activeStep2).toEqual(1);
  });

  it('should set autoPlay to false onMouseEnter and true onMouseLeave', () => {
    const { comp } = setup();
    const autoPlay = comp.find('AutoPlay').first().prop('autoplay');
    expect(autoPlay).toEqual(true);
    comp.simulate('mouseEnter');
    const autoPlay2 = comp.find('AutoPlay').first().prop('autoplay');
    expect(autoPlay2).toEqual(false);
    comp.simulate('mouseLeave');
    const autoPlay3 = comp.find('AutoPlay').first().prop('autoplay');
    expect(autoPlay3).toEqual(true);
  });
});
