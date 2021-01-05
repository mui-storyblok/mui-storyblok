import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListDropdown from './ListDropdown';

function setup() {
  const props = {
    listExpansion: [{
      component: 'ListExpansion',
      icon: [{
        component: 'ListItemIcon',
        content: [{
          component: 'Icon',
          iconName: 'star',
        }],
      }],
      primaryText: 'list Text',
    }],
    content: [{
      component: 'List',
      content: [{
        component: 'ListItem',
      }],
    }],
  };
  const comp = shallow(<ListDropdown {...props} />);
  return { comp, props };
}

describe('<ListDropdown />', () => {
  it('renders ListDropdown', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ListDropdown {...props} />);
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
