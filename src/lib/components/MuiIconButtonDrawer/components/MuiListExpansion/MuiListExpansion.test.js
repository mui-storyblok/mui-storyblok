import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiListExpansion from './MuiListExpansion';

function setup() {
  const props = {
    handleClick: jest.fn(),
    open: false,
    primaryText: 'tarter sauce',
    icon: [{
      component: 'MuiListItemIcon',
      content: [{
        component: 'MuiIcon',
        iconName: 'star',
      }],
    }],
  };
  const comp = shallow(<MuiListExpansion {...props} />);
  return { comp, props };
}

describe('<MuiListExpansion />', () => {
  it('renders MuiListExpansion', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiListExpansion {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
