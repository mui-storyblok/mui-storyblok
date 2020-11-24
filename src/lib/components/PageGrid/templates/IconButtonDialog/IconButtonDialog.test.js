import React from 'react';
import { shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import IconButtonDialog from './IconButtonDialog';

function setup() {
  const props = {
    dialog: [{
      component: 'Dialog',
      content: [{
        component: 'DialogContent',
        content: [{
          component: 'Typography',
          content: [{
            component: 'Span',
            content: 'text',
          }],
        }],
      }, {
        component: 'DialogActions',
        content: [{
          component: 'ButtonRedirect',
          buttonText: 'buttonText',
          redirectRoute: 'page-welcome',
        }],
      }],
      dialogTitle: [{
        component: 'DialogTitle',
        text: 'text',
        toggleDialog: jest.fn(),
      }],
    }],

    iconButton: [{
      component: 'IconButton',
      onClick: jest.fn(),
      icon: [{
        component: 'Icon',
        iconName: 'star',
      }],
    }],

  };
  const comp = shallow(<IconButtonDialog {...props} />);

  return { comp, props };
}

describe('<IconButtonDialog />', () => {
  it('renders IconButtonDialog', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<IconButtonDialog {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should handle toggle and change state', () => {
    const { comp } = setup();
    const openProp = comp.find('Dialog').first().prop('open');
    expect(openProp).toEqual(false);
    const iconButtonToggle = comp.find('IconButton').first().prop('onClick');
    act(() => {
      iconButtonToggle();
    });
    const openPropTrue = comp.find('Dialog').first().prop('open');
    expect(openPropTrue).toEqual(true);
  });
});
