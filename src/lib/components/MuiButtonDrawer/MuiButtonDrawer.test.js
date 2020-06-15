import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiButtonDrawer from './MuiButtonDrawer';

function setup() {
  const props = {
    anchor: 'left',
    elevation: 16,
    variant: 'temporary',
    button: [{
      component: 'MuiButton',
      buttonText: 'test text',
      variant: 'text',
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
  const comp = mount(
    <MemoryRouter>
      <MuiButtonDrawer {...props} />
    </MemoryRouter>,
  );
  return { comp, props };
}

describe('<MuiButtonDrawer />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiButtonDrawer {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiButtonDrawer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should toggle drawer when button is clicked', () => {
    const { comp } = setup();

    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(false);
    const btn = comp.find('[data-testid="muiButton"]');
    btn.first().simulate('click');
    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(true);
  });

  it('should handleClose and toggle drawer', () => {
    const { comp } = setup();
    const btn = comp.find('[data-testid="muiButton"]');
    btn.first().simulate('click');
    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(true);
    const closeModal = comp.find('ForwardRef(Modal)').first().prop('onClose');
    act(() => {
      closeModal({ type: 'keydown', key: 'Tab' });
    });
    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(true);
    act(() => {
      closeModal({ type: 'keydown', key: 'Shift' });
    });
    expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(true);
    act(() => {
      closeModal({ target: {} });
    });
    setTimeout(() => {
      expect(comp.find('WithStyles(ForwardRef(Drawer))').first().props().open).toEqual(false);
    }, 800);
  });
});
