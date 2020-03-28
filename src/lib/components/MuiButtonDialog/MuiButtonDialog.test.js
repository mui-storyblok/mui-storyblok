import React from 'react';
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
          buttonText: 'buttonText',
          redirectRoute: 'page-welcome',
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

  describe('click', () => {
    it('onClick to be called', () => {
      const { comp } = setup();
      comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
      expect(comp.find('WithStyles(ForwardRef(Dialog))').length).toEqual(1);
    });
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
});
