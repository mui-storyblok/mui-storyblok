import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import ButtonDrawer from './ButtonDrawer';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "ButtonDrawer", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    anchor: 'left',
    elevation: 16,
    variant: 'temporary',
    button: [{
      _editable: '<!--#storyblok#{"name": "Button", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Button',
      buttonText: 'test text',
      variant: 'text',
    }],
    drawer: [
      {
        _editable: '<!--#storyblok#{"name": "Drawer", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'Drawer',
        content: [{
          _editable: '<!--#storyblok#{"name": "DrawerContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'DrawerContent',
          content: [{
            _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'Typography',
            content: [{
              _editable: '<!--#storyblok#{"name": "Span", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
              component: 'Span',
              content: 'Span',
            }],
          }],
        }],
      },
    ],
  };
  const comp = mount(<ButtonDrawer {...props} />);
  return { comp, props };
}

describe('<ButtonDrawer />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ButtonDrawer {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render ButtonDrawer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it.skip('should toggle Drawer onClick in the button component', () => {
    // TODO: find the right btn to cick to toggle Drawer
    const { comp } = setup();
    const initialOpen = comp.find('WithStyles(ForwardRef(Drawer))').first().prop('open');
    expect(initialOpen).toEqual(false);
    const firstButton = comp.find('WithStyles(ForwardRef(ButtonBase))').first().prop('onClick');
    act(() => {
      firstButton();
    });
    const endOpen = comp.find('WithStyles(ForwardRef(Drawer))').first().prop('open');
    setTimeout(() => {
      expect(endOpen).toEqual(true);
    }, 1000);
  });
});
