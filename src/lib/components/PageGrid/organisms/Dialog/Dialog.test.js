import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Dialog from './Dialog';

function setup(open = false) {
  const props = {
    open,
    toggleDialog: jest.fn(),
    content: [{
      component: 'DialogContent',
      content: [{
        component: 'Typography',
        content: [{
          component: 'Text',
          text: 'text',
        }],
      }],
    }, {
      component: 'DialogActions',
      content: [{
        component: 'ButtonRedirect',
        buttonText: 'buttonText',
        href: '/page-welcome',
      }],
    }],
    dialogTitle: [{
      component: 'DialogTitle',
      text: 'text',
      toggleDialog: jest.fn(),
    }],
  };
  const comp = shallow(<Dialog {...props} />);

  return { comp, props };
}

describe('<Dialog />', () => {
  it('renders Dialog', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<Dialog {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
