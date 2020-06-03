import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiActionCardContainer from './MuiActionCardContainer';

function setup() {
  const props = {
    menuName: 'test menu',
    height: '100px',
    width: '100px',
    actionCards: [{
      component: 'MuiActionCard',
      header: [{
        component: 'MuiTypography',
        content: [{
          component: 'MuiText',
          text: 'Card Header',
        }],
      }],
      icon: [{
        component: 'MuiIcon',
        iconName: 'star',
      }],
      text: [{
        component: 'MuiTypography',
        content: [{
          component: 'MuiText',
          text: 'Action card body test',
        }],
      }],
    }],
  };
  const comp = shallow(<MuiActionCardContainer {...props} />);
  return { comp, props };
}

describe('<MuiActionCardContainer />', () => {
  it('renders MuiActionCardContainer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiActionCardContainer {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
