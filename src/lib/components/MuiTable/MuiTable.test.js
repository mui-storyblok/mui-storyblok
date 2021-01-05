import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiTable from './MuiTable';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiTable", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    padding: '4px',
    size: 'medium',
    sitckyHeader: false,
    tHead: [
      {
        content: [
          {
            _editable: '<!--#storyblok#{"name": "MuiTableRow", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'MuiTableRow',
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
              _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
              component: 'MuiText',
            }],
            variant: 'body1',
            _editable: '<!--#storyblok#{"name": "MuiTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'MuiTypography',
          }],
          padding: 'default',
          _editable: '<!--#storyblok#{"name": "MuiTableCell", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiTableCell',
          sortDirection: 'asc',
        }],
        selected: false,
        _editable: '<!--#storyblok#{"name": "MuiTableRow", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiTableRow',
      }],
      _editable: '<!--#storyblok#{"name": "MuiTableBody", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiTableBody',
    }],
  };
  const comp = shallow(<MuiTable {...props} />);
  return { comp, props };
}

describe('<MuiTable />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiTable {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiTable', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
