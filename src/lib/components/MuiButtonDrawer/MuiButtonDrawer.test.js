import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import MuiButtonDrawer from './MuiButtonDrawer';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiButtonDrawer", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    anchor: 'left',
    elevation: 16,
    variant: 'temporary',
    button: [{
      _editable: '<!--#storyblok#{"name": "MuiButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiButton',
      buttonText: 'test text',
      variant: 'text',
    }],
    content: [
      {
        _editable: '<!--#storyblok#{"name": "MuiList", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

        component: 'MuiList',
        content: [
          {
            _editable: '<!--#storyblok#{"name": "MuiListItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',

            component: 'MuiListItem',
            listItemText: [
              {
                _editable: '<!--#storyblok#{"name": "MuiListItemText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                primary: 'apples',
                component: 'MuiListItemText',
              },
            ],
            listItemSecondaryAction: [
              {
                _editable: '<!--#storyblok#{"name": "MuiListItemSecondaryAction", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                component: 'MuiListItemSecondaryAction',
                content: [
                  {
                    _editable: '<!--#storyblok#{"name": "MuiIconButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                    component: 'MuiIconButtonRedirect',
                    redirectRoute: 'home',
                    iconButton: [
                      {
                        _editable: '<!--#storyblok#{"name": "MuiIconButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                        component: 'MuiIconButton',
                        icon: [
                          {
                            _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
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
  const comp = mount(<MuiButtonDrawer {...props} />);
  return { comp, props };
}

describe('<MuiButtonDrawer />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiButtonDrawer {...props} />);
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
