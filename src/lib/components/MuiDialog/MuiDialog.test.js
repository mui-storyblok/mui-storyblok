import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiDialog from './MuiDialog';

function setup(open = false) {
  const props = {
    open,
    toggleDialog: jest.fn(),
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
  };
  const comp = shallow(<MuiDialog {...props} />);

  return { comp, props };
}

describe('<MuiDialog />', () => {
  it('renders MuiDialog', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiDialog {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
