import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiGrid from './MuiGrid';

function setup() {
  const props = {
    content: [{
      component: 'MuiGridItem',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],
  };
  const comp = shallow(<MuiGrid {...props} />);
  return { comp, props };
}

describe('<MuiGrid />', () => {
  it('renders MuiGrid', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiGrid {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
