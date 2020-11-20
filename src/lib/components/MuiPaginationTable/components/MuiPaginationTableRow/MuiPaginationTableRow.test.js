import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiPaginationTableRow from './MuiPaginationTableRow';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiPaginationTableRow", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    hover: false,
    selected: false,
    content: [{
      size: 'medium',
      align: 'center',
      content: [{
        align: 'inherit',
        color: 'initial',
        width: '100%',
        height: '100%',
        content: [{
          _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          text: 'Single table row',
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
  };
  const comp = shallow(<MuiPaginationTableRow {...props} />);
  return { comp, props };
}

describe('<MuiPaginationTableRow />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiPaginationTableRow {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiTable Row', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
