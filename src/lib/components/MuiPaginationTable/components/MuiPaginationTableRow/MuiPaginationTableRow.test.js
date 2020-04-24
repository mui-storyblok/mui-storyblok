import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiPaginationTableRow from './MuiPaginationTableRow';

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
  const comp = shallow(<MuiPaginationTableRow {...props} />);
  return { comp, props };
}

describe('<MuiPaginationTableRow />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiPaginationTableRow {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiTable Row', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
