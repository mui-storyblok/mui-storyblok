import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiBottomNavigation from './MuiBottomNavigation';

function setup() {
  const props = {
    showLabels: false,
    width: '500',
    navActions: [
      {
        component: 'MuiBottomNavigationAction',
        label: 'home',
        value: 'home',
        icon: [
          {
            component: 'MuiIconButtonRedirect',
            redirectRoute: 'home',
            iconButton: [
              {
                component: 'MuiIconButton',
                icon: [
                  {
                    component: 'MuiIcon',
                    iconName: 'home',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };

  const comp = mount(
    <MemoryRouter>
      <MuiBottomNavigation {...props} />
    </MemoryRouter>,
  );
  return { comp, props };
}

describe('<MuiBottomNavigation />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiBottomNavigation {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiBottomNavigation', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should set a new value onChange', () => {
    const { comp } = setup();
    const { value } = comp.find('WithStyles(ForwardRef(BottomNavigation))').first().props();
    expect(value).toEqual(0);
    const btn = comp.find('[data-testid="muiIconButton"]');
    btn.first().simulate('click');
    const newValue = comp.find('WithStyles(ForwardRef(BottomNavigation))').first().props().value;
    expect(newValue).toEqual('home');
  });
});
