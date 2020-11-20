import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiTableHead from './MuiTableHead';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiTableHead", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
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
  };

  const comp = shallow(<MuiTableHead {...props} />);
  return { comp, props };
}

describe('<MuiTableHead />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiTableHead {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('should render MuiTableHead', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
