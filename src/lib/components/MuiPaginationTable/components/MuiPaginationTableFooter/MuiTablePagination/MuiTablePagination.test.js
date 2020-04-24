import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiTablePagination from './MuiTablePagination';

function setup() {
  const props = {
    labelRowsPerPage: 'Rows per page:',
    numRows: 0,
    rowsPerPageOptions: [10, 25, 50, 100],
    rowsPerPage: 0,
    page: 0,
  };

  const comp = shallow(<MuiTablePagination {...props} />);
  return { comp, props };
}

describe('<MuiTablePagination />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiTablePagination {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('should render MuiTablePagination', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
