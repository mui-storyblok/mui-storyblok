import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiTableBody from './MuiTableBody';

function setup() {
  const props = {
    content: [{
      hover: false,
      content: [{
        size: 'medium',
        align: 'center',
        content: [{
          align: 'inherit',
          color: 'inherit',
          width: '100%',
          height: '100%',
          content: [{
            text: 'table body 1',
            component: 'MuiText',
          }],
          variant: 'body1',
          component: 'MuiTypography',
        }],
        padding: 'default',
        component: 'MuiTableCell',
      }],
      selected: false,
      component: 'MuiTableRow',
    }],
  };
  const comp = shallow(<MuiTableBody {...props} />);
  return { comp, props };
}

describe('<MuiTableBody />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiTableBody {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiBody', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
