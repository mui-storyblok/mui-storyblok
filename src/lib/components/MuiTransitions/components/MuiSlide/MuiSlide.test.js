import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiSlide from './MuiSlide';

function setup() {
  const props = {
    enter: 1500,
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

  const comp = shallow(<MuiSlide {...props} />);
  return { comp, props };
}

describe('<MuiSlide />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiSlide {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiGridList', () => {
    const { comp } = setup();
    expect(comp).toMatchSnapshot();
  });
});
