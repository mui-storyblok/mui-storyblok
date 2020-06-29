import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiPaginationTableHead from './MuiPaginationTableHead';

function setup() {
  const props = {
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
  };

  const comp = shallow(<MuiPaginationTableHead {...props} />);
  return { comp, props };
}

describe('<MuiPaginationTableHead />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiPaginationTableHead {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('should render MuiPaginationTableHead', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
