import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiPaginationTable from './MuiPaginationTable';

const row = {
  component: 'MuiPaginationTableRow',
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
};

const rows = [];
do {
  // eslint-disable-next-line no-plusplus
  rows.push(row);
} while (rows.length < 12);

function setup(tBody = rows) {
  const props = {
    tHead: [
      {
        content: [
          {
            component: 'MuiPaginationTableRow',
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
    tBody: [
      {
        component: 'MuiPaginationTableBody',
        content: tBody,
      },
    ],
  };
  const comp = mount(<MuiPaginationTable {...props} />);
  return { comp, props };
}


describe('<MuiPaginationTable />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiPaginationTable {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiPaginationTable', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should display the correct amount of rows after next/previous button clicked', () => {
    const { comp } = setup();
    const btn = comp.find('[data-testid="nextButton"]');
    const previousBtn = comp.find('[data-testid="previousButton"]');
    btn.first().simulate('click');
    const doesIncludeNext = comp.text().includes('11-12 of 12');
    expect(doesIncludeNext).toEqual(true);
    previousBtn.first().simulate('click');
    const doesIncludePrevious = comp.text().includes('1-10 of 12');
    expect(doesIncludePrevious).toEqual(true);
  });

  it('should display the correct amount of rows after first/last button clicked', () => {
    const newRows = [];
    do {
      newRows.push(row);
    } while (newRows.length < 50);

    const { comp } = setup(newRows);
    const lastBtn = comp.find('[data-testid="lastButton"]');
    const firstBtn = comp.find('[data-testid="firstButton"]');
    lastBtn.first().simulate('click');
    const doesIncludeLast = comp.text().includes('41-50 of 50');
    expect(doesIncludeLast).toEqual(true);
    firstBtn.first().simulate('click');
    const doesIncludeFirst = comp.text().includes('1-10 of 50');
    expect(doesIncludeFirst).toEqual(true);
  });

  it('should handleChangeRows and set the number or rows per page', () => {
    const { comp } = setup();
    const changeRows = comp.find('MuiPaginationTableFooter').first().prop('handleChangeRows');
    changeRows({ target: { value: 10 } });
    const page = comp.find('MuiPaginationTableFooter').first().prop('page');
    expect(page).toEqual(0);
    const rowsPerPage = comp.find('WithStyles(ForwardRef(TablePagination))').first().prop('rowsPerPage');
    expect(rowsPerPage).toEqual(10);
  });
});
