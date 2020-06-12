import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
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
          component: 'MuiTypography',
          content: [{
            component: 'MuiText',
            text: 'text',
          }],
        }],
      }, {
        component: 'MuiDialogActions',
        content: [{
          component: 'MuiButtonRedirect',
          href: 'google.com',
          fileName: 'fileName.png',
          button: [{
            component: 'MuiButton',
            buttonText: 'here',
          }],
        }],
      }],
      dialogTitle: [{
        component: 'MuiDialogTitle',
        text: 'text',
        toggleDialog: jest.fn(),
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
    const tree = renderer.create((
      <MemoryRouter>
        <MuiButtonDialog {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });

  it('should toggle dialog onClick in the button component', () => {
    const { comp } = setup();
    console.log(comp.debug());
    const initialOpen = comp.find('WithStyles(ForwardRef(Dialog))').first().prop('open');
    expect(initialOpen).toEqual(false);
    const firstButton = comp.find('.MuiButtonBase-root').first().prop('onClick');
    act(() => {
      firstButton();
    });
  });
});
