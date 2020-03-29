import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiDialogActions from './MuiDialogActions';

function setup() {
  const props = {
    content: [{
      component: 'MuiButtonRedirect',
      redirectRoute: 'page-welcome',
      button: [{
        component: 'MuiButton',
        buttonText: 'buttonText',
      }],
    }],
  };
  const comp = shallow(<MuiDialogActions {...props} />);

  return { comp, props };
}

describe('<MuiDialogActions />', () => {
  it('renders MuiDialogActions', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });


  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiDialogActions {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
