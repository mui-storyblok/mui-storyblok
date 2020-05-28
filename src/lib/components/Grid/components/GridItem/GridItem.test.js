import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import GridItem from './GridItem';

function setup() {
  const props = {
    sizeGrid: jest.fn(),
    gridItemComponets: {
      MuiIcon,
    },
    content: [{
      component: 'MuiIcon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<GridItem {...props} />);
  return { comp, props };
}

describe('<GridItem />', () => {
  it('renders GridItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <GridItem {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
