import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiTableRow from './MuiTableRow';

function setup() {
  const props = {
    hover: false,
    selected: false,
    content: [{
      size: 'medium',
      align: 'center',
      content: [{
        align: 'inherit',
        color: 'initial',
        width: '100%',
        height: '100%',
        content: [{
          text: 'Single table row',
          component: 'MuiText',
        }],
        variant: 'body1',
        component: 'MuiTypography',
      }],
      padding: 'default',
      component: 'MuiTableCell',
      sortDirection: 'asc',
    }],
  };
  const comp = shallow(<MuiTableRow {...props} />);
  return { comp, props };
}

describe('<MuiTableRow />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiTableRow {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiTable Row', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
