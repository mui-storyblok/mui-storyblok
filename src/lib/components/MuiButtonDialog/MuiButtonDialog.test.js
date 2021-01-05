import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiButtonDialog from './MuiButtonDialog';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiButtonDialog", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    button: [{
      _editable: '<!--#storyblok#{"name": "MuiButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiButton',
      buttonText: 'buttonText',
    }],
    dialog: [{
      _editable: '<!--#storyblok#{"name": "MuiDialog", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiDialog',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiDialogContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiDialogContent',
        content: [{
          _editable: '<!--#storyblok#{"name": "MuiDialogContentTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiDialogContentTypography',
          content: [{
            _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'MuiText',
            content: 'text',
          }],
        }],
      }],
      dialogTitle: [{
        _editable: '<!--#storyblok#{"name": "MuiDialogTitle", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiDialogTitle',
        text: 'text',
      }],
    }],
  };
  const comp = mount(<MuiButtonDialog {...props} />);

  return { comp, props };
}

describe('<MuiButtonDialog />', () => {
  it('renders MuiButtonDialog', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiButtonDialog {...props} />);
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
