import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiListDropdown from './MuiListDropdown';

function setup() {
  const props = {
    listExpansion: [{
      component: 'MuiListExpansion',
      icon: [{
        component: 'MuiListItemIcon',
        content: [{
          component: 'MuiIcon',
          iconName: 'star',
        }],
      }],
      primaryText: 'list Text',
    }],
    content: [{
      component: 'MuiList',
      content: [{
        component: 'MuiListItem',
      }],
    }],
  };
  const comp = mount(<MuiListDropdown {...props} />);
  return { comp, props };
}

describe('<MuiListDropdown />', () => {
  it('renders MuiListDropdown', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiListDropdown {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
