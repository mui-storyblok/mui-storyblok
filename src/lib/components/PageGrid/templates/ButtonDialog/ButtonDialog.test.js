import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ButtonDialog from './ButtonDialog';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "ButtonDialog", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    button: [{
      _editable: '<!--#storyblok#{"name": "Button", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Button',
      buttonText: 'buttonText',
    }],
    dialog: [{
      _editable: '<!--#storyblok#{"name": "Dialog", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Dialog',
      content: [{
        _editable: '<!--#storyblok#{"name": "DialogContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'DialogContent',
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
    }],
  };
  const comp = mount(<ButtonDialog {...props} />);

  return { comp, props };
}

describe('<ButtonDialog />', () => {
  it('renders ButtonDialog', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ButtonDialog {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should toggle dialog onClick in the button component', () => {
    const { comp } = setup();
    const initialOpen = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open');
    expect(initialOpen).toEqual(false);
    const firstButton = comp.find('WithStyles(ForwardRef(ButtonBase))').first().prop('onClick');
    act(() => {
      firstButton();
    });
    const endOpen = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open');
    setTimeout(() => {
      expect(endOpen).toEqual(true);
    }, 1000);
  });
});
