import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiCardActions from './MuiCardActions';

function setup() {
  const props = {
    content: [{
      component: 'MuiIconButtonDownload',
      href: 'google.com',
      fileName: 'fileName.png',
      iconButton: [{
        component: 'MuiIconButton',
        icon: [{
          component: 'MuiIcon',
          iconName: 'star',
        }],
      }],
    }],
  };
  const comp = shallow(<MuiCardActions {...props} />);
  return { comp, props };
}

describe('<MuiCardActions />', () => {
  it('renders MuiCardActions', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiCardActions {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
