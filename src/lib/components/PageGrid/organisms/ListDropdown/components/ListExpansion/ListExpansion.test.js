import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListExpansion from './ListExpansion';

function setup() {
  const props = {
    handleClick: jest.fn(),
    open: false,
    primaryText: 'tarter sauce',
    icon: [{
      component: 'ListItemIcon',
      content: [{
        component: 'Icon',
        iconName: 'star',
      }],
    }],
  };
  const comp = shallow(<ListExpansion {...props} />);
  return { comp, props };
}

describe('<ListExpansion />', () => {
  it('renders ListExpansion', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ListExpansion {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
