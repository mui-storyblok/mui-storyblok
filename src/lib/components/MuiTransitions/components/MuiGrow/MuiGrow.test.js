import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiGrow from './MuiGrow';

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

  const comp = mount(<MuiGrow {...props} />);
  return { comp, props };
}

describe('<MuiGrow />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiGrow {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiGridList', () => {
    const { comp } = setup();
    expect(comp).toMatchSnapshot();
  });

  it('should set enterTime to auto if enter value is 0', () => {
    const { comp } = setup('0');
    expect(comp.find('ForwardRef(Grow)').first().props().timeout).toEqual('auto');
  });
});
