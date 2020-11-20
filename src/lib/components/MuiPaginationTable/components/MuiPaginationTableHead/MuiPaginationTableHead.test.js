import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiPaginationTableHead from './MuiPaginationTableHead';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiPaginationTableHead", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [
      {
        _editable: '<!--#storyblok#{"name": "MuiPaginationTableRow", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiPaginationTableRow',
        content: [
          {
            _editable: '<!--#storyblok#{"name": "MuiTableCell", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'MuiTableCell',
            content: [
              {
                _editable: '<!--#storyblok#{"name": "MuiTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                component: 'MuiTypography',
                content: [
                  {
                    _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
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
