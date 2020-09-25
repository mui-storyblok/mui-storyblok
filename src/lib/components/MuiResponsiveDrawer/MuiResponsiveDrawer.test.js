import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiResponsiveDrawer from './MuiResponsiveDrawer';

function setup() {
  const props = {
    elevation: 16,
    variant: 'temporary',
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
  const comp = mount(<MuiResponsiveDrawer {...props} />);
  return { comp, props };
}

describe('<MuiResponsiveDrawer />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiResponsiveDrawer {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiResponsiveDrawer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
