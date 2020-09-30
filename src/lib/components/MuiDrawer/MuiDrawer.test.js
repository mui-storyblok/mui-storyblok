import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import MuiDrawer from './MuiDrawer';

function setup(open = false) {
  const props = {
    open,
    onClose: jest.fn(),
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
  const comp = mount(<MuiDrawer {...props} />);
  return { comp, props };
}

describe('<MuiDrawer />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiDrawer {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should handleClose and toggle drawer', () => {
    const { comp, props } = setup(true);
    const closeModal = comp.find('ForwardRef(Modal)').first().prop('onClose');
    act(() => {
      closeModal({ type: 'keydown', key: 'Tab' });
    });
    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(true);
    expect(props.onClose).not.toHaveBeenCalled();
    act(() => {
      closeModal({ type: 'keydown', key: 'Shift' });
    });
    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(true);
    expect(props.onClose).not.toHaveBeenCalled();

    act(() => {
      closeModal({ target: {} });
    });
    expect(props.onClose).toBeCalled();
  });

  it('should render MuiDrawer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
