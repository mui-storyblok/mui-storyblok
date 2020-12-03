import React from 'react';
import { shallow } from 'enzyme';
import MobileStepper from './MobileStepper';

function setup() {
  const props = {
    autoplay: true,
    geocode: 'Colorado1234',
    tabs: [{
      component: 'MobileTab',
      tab: [{
        component: 'MobileTabGrid',
        backgroundImageUrl: 'backgroundImageUrl.png',
        content: [{
          component: 'MobileTabGridItem',
          content: [{
            component: 'Icon',
            iconName: 'android',
          }],
        }],
      }],
    },
    {
      component: 'MobileTab',
      tab: [{
        component: 'MobileTabGrid',
        backgroundImageUrl: 'backgroundImageUrl.png',
        content: [{
          component: 'MobileTabGridItem',
          content: [{
            component: 'Icon',
            iconName: 'android',
          }],
        }],
      }],
    }],
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
  const comp = shallow(<MobileStepper {...props} />);
  return { comp, props };
}

describe('<MobileStepper />', () => {
  it('renders MobileStepper', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should handleNext and increment activeStep by one then set active to 0 after all steps have been called', () => {
    const { comp } = setup();
    const firstStep = comp.find('#MuiMobileStepper').prop('activeStep');
    expect(firstStep).toEqual(0);
    comp.find('#MuiMobileStepper').first().prop('nextButton').props.children.props.onClick();
    const secondStep = comp.find('#MuiMobileStepper').prop('activeStep');
    expect(secondStep).toEqual(1);
    comp.find('#MuiMobileStepper').first().prop('nextButton').props.children.props.onClick();
    const lastStep = comp.find('#MuiMobileStepper').prop('activeStep');
    expect(lastStep).toEqual(0);
  });

  it('should handleBack and increment activeStep by one then set active to 0 after all steps have been called', () => {
    const { comp } = setup();
    const firstStep = comp.find('#MuiMobileStepper').prop('activeStep');
    expect(firstStep).toEqual(0);
    comp.find('#MuiMobileStepper').first().prop('backButton').props.children.props.onClick();
    const secondStep = comp.find('#MuiMobileStepper').prop('activeStep');
    expect(secondStep).toEqual(1);
    comp.find('#MuiMobileStepper').first().prop('backButton').props.children.props.onClick();
    const lastStep = comp.find('#MuiMobileStepper').prop('activeStep');
    expect(lastStep).toEqual(0);
  });

  it('should handle onChangeIndex and change the activeStep', () => {
    const { comp } = setup();
    const activeStep = comp.find('#MuiMobileStepper').first().prop('activeStep');
    expect(activeStep).toEqual(0);
    const autoPlay = comp.find('AutoPlay').first().prop('onChangeIndex');
    autoPlay(1);
    const activeStep2 = comp.find('#MuiMobileStepper').prop('activeStep');
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
