import React from 'react';
import { shallow } from 'enzyme';
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
  const comp = shallow(<MuiListDropdown {...props} />);
  return { comp, props };
}

describe('<MuiListDropdown />', () => {
  it('renders MuiListDropdown', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiListDropdown {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should handle click and toggle open prop', () => {
    const { comp } = setup();
    const initialOpen = comp.find('MuiListExpansion').first().prop('open');
    expect(initialOpen).toEqual(false);
    const listExpansion = comp.find('MuiListExpansion').first().prop('handleClick');
    listExpansion();
    const isOpen = comp.find('MuiListExpansion').first().prop('open');
    expect(isOpen).toEqual(true);
  });
});
