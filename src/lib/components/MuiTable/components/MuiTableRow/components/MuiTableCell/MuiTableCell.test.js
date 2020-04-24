import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiTableCell from './MuiTableCell';

function setup() {
  const props = {
    align: 'inherit',
    padding: '1px',
    size: 'medium',
    sortDirection: 'asc',
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
  };
  const comp = shallow(<MuiTableCell {...props} />);
  return { comp, props };
}

describe('<MuiTableCell />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiTableCell {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiTableCell', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
