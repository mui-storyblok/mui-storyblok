import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiPaginationTableFooter from './MuiPaginationTableFooter';

function setup() {
  const props = {
    labelRowsPerPage: 'Rows Per Page:',
    numRows: 100,
    rowsPerPageOptions: [10, 25, 50, 100],
    rowsPerPage: 10,
    page: 0,
  };

  const comp = shallow(<MuiPaginationTableFooter {...props} />);
  return { comp, props };
}

describe('<MuiPaginationTableFooter />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiPaginationTableFooter {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiPaginationTableFooter', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
