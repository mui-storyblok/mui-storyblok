import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiGrid, { sizeGrid } from './MuiGrid';

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

  it('sizeGrid', () => {
    const valueTrue = sizeGrid('true');
    const valueFalse = sizeGrid('false');
    const valueAuto = sizeGrid('auto');
    const value12 = sizeGrid(12);

    expect(valueTrue).toEqual(true);
    expect(valueFalse).toEqual(false);
    expect(valueAuto).toEqual('auto');
    expect(value12).toEqual(12);
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
