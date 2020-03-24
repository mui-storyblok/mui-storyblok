import React from 'react';
import { shallow } from 'enzyme';
import MuiMenu from './MuiMenu';

function setup() {
  const props = {
    btnText: 'BtnText',
    content: [{
      component: 'MuiMenuItem',
      btnText: 'BtnText',
      content: [{
        component: 'MuiMenuItem',
        redirectRoute: 'page-welcome',
        buttonText: 'buttonText',
      }],
    }],
  };
  const comp = shallow(<MuiMenu {...props} />);
  return { comp, props };
}

describe('<MuiMenu />', () => {
  it('renders MuiMenu', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
