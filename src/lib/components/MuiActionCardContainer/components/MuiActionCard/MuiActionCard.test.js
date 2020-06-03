import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiActionCard from './MuiActionCard';

function setup() {
  const props = {
    height: '100px',
    width: '100px',
    header: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        text: 'Header of a card',
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
        text: 'this is the text of an action card body.',
      }],
    }],
  };
  const comp = shallow(<MuiActionCard {...props} />);
  return { comp, props };
}

describe('<MuiActionCard />', () => {
  it('renders MuiActionCard', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiActionCard {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
