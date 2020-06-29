import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
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

    iconButton: [{
      component: 'MuiIconButton',
      onClick: jest.fn(),
      icon: [{
        component: 'MuiIcon',
        iconName: 'star',
      }],
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

    const tree = renderer.create(<MuiIconButtonDialog {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should handle toggle and change state', () => {
    const { comp } = setup();
    const openProp = comp.find('MuiDialog').first().prop('open');
    expect(openProp).toEqual(false);
    const iconButtonToggle = comp.find('MuiIconButton').first().prop('onClick');
    act(() => {
      iconButtonToggle();
    });
    const openPropTrue = comp.find('MuiDialog').first().prop('open');
    expect(openPropTrue).toEqual(true);
  });
});
