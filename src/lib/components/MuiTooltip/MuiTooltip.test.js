import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiTooltip from './MuiTooltip';

function setup() {
  const props = {
    title: 'title text',
    content: [{
      component: 'MuiIconButtonHref',
      href: 'wasd.com',
      iconButton: [{
        component: 'MuiIconButton',
        icon: [{
          component: 'MuiIcon',
          iconName: 'star',
        }],
      }],
    }],
  };
  const comp = shallow(<MuiTooltip {...props} />);
  return { comp, props };
}

describe('<MuiTooltip />', () => {
  it('renders MuiTooltip', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiTooltip {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
