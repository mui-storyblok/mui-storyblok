import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiTypography from './MuiTypography';

function setup() {
  const props = {
    content: [{
      component: 'MuiText',
      text: 'this is text',
    }, {
      component: 'MuiLink',
      text: 'btn',
      href: 'google.com',
    }, {
      component: 'MuiIconButtonRedirect',
      redirectRoute: 'page-welcom',
      iconButton: [{
        component: 'MuiIconButton',
        icon: [{
          component: 'MuiIcon',
          iconName: 'star',
        }],
      }],
    }, {
      component: 'MuiIcon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<MuiTypography {...props} />);
  return { comp, props };
}

describe('<MuiTypography />', () => {
  it('renders MuiTypography', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiTypography {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
