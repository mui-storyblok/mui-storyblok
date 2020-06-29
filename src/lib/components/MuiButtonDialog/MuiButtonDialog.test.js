import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiButtonDialog from './MuiButtonDialog';

function setup() {
  const props = {
    button: [{
      component: 'MuiButton',
      buttonText: 'buttonText',
    }],
    dialog: [{
      component: 'MuiDialog',
      content: [{
        component: 'MuiDialogContent',
        content: [{
          component: 'MuiDialogContentTypography',
          content: [{
            component: 'MuiText',
            content: 'text',
          }],
        }],
      }],
      dialogTitle: [{
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
