import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiTransitions from './MuiTransitions';

function setup() {
  const props = {
    content: [{
      component: 'MuiZoom',
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
    }],
  };

  const comp = shallow(<MuiTransitions {...props} />);
  return { comp, props };
}

describe('<MuiTransitions />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiTransitions {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiGridList', () => {
    const { comp } = setup();
    expect(comp).toMatchSnapshot();
  });
});
