import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiCollapse from './MuiCollapse';

function setup(enterTime = 1500) {
  const props = {
    enter: enterTime,
    exit: 1500,
    content: [{
      component: 'Blok',
      content: [{
        component: 'MuiGrid',
        content: [{
          component: 'MuiGridItem',
          content: [{
            component: 'MuiCard',
            content: [{
              component: 'MuiCardContent',
              content: [{
                component: 'MuiTypography',
                content: [{
                  component: 'MuiText',
                  text: 'Juice Box',
                }],
              }],
            }],
          }],
        }],
      }],
    }],
  };

  const comp = mount(<MuiCollapse {...props} />);
  return { comp, props };
}

describe('<MuiCollapse />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiCollapse {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiGridList', () => {
    const { comp } = setup();
    expect(comp).toMatchSnapshot();
  });

  it('should set enterTime to auto if enter value is 0', () => {
    const { comp } = setup('0');
    expect(comp.find('WithStyles(ForwardRef(Collapse))').first().props().timeout).toEqual('auto');
  });

  it('should change state after transitionIn time is ran', () => {
    const { comp } = setup();
    expect(comp.find('WithStyles(ForwardRef(Collapse))').first().props().in).toEqual(false);
    setTimeout(() => {
      expect(comp.find('WithStyles(ForwardRef(Collapse))').first().props().in).toEqual(true);
    }, 1000);
  });
});
