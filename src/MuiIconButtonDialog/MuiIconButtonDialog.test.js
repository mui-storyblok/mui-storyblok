import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiIconButtonDialog from './MuiIconButtonDialog';

function setup() {
  const props = {
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
    icon: [{
      component: 'MuiIcon',
      iconName: 'star',
    }],
  };
  const comp = shallow(<MuiIconButtonDialog {...props} />);

  return { comp, props };
}

describe('<MuiIconButtonDialog />', () => {
  it('renders MuiIconButtonDialog', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiIconButtonDialog {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
