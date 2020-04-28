import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiTable from './MuiTable';

function setup() {
  const props = {
    padding: '4px',
    size: 'medium',
    sitckyHeader: false,
    tHead: [
      {
        content: [
          {
            component: 'MuiTableRow',
            content: [
              {
                component: 'MuiTableCell',
                content: [
                  {
                    component: 'MuiTypography',
                    content: [
                      {
                        component: 'MuiText',
                        text: 'wooo',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    tBody: [{
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
          sortDirection: 'asc',
        }],
        selected: false,
        component: 'MuiTableRow',
      }],
      component: 'MuiTableBody',
    }],
  };
  const comp = shallow(<MuiTable {...props} />);
  return { comp, props };
}

describe('<MuiTable />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiTable {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiTable', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
