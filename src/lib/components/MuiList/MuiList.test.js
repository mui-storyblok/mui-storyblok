import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiList from './MuiList';

function setup() {
  const props = {
    content: [{
      component: 'MuiListItem',
      listItemText: [{
        component: 'MuiListItemText',
        primary: 'primary',
      }],
    }],
  };
  const comp = shallow(<MuiList {...props} />);
  return { comp, props };
}

describe('<MuiList />', () => {
  it('renders MuiList', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiList {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
