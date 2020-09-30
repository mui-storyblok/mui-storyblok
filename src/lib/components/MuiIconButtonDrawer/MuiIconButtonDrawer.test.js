import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import MuiIconButtonDrawer from './MuiIconButtonDrawer';

function setup() {
  const props = {
    elevation: 16,
    variant: 'temporary',
    icon: [{
      component: 'MuiIconButton',
      icon: [{
        component: 'MuiIcon',
        iconName: 'menu',
      }],
    }],
    content: [
      {
        component: 'MuiList',
        content: [
          {
            component: 'MuiListItem',
            listItemText: [
              {
                primary: 'apples',
                component: 'MuiListItemText',
              },
            ],
            listItemSecondaryAction: [
              {
                component: 'MuiListItemSecondaryAction',
                content: [
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
          },
        ],
      },
    ],
  };
  const comp = mount(<MuiIconButtonDrawer {...props} />);
  return { comp, props };
}

describe('<MuiIconButtonDrawer />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiIconButtonDrawer {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiIconButtonDrawer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should toggle drawer when button is clicked', () => {
    const { comp } = setup();

    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(false);
    const btn = comp.find('[data-testid="muiIconButton"]');
    btn.first().simulate('click');
    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(true);
  });
});
