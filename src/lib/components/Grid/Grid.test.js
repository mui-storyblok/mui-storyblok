import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Grid from './Grid';
import MuiIcon from '../MuiIcon/MuiIcon';

function setup() {
  const props = {
    gridItemComponents: {
      MuiIcon,
    },
    content: [{
      component: 'GridItem',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],
  };
  const comp = shallow(<Grid {...props} />);
  return { comp, props };
}

describe('<Grid />', () => {
  it('renders Grid', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <Grid {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
