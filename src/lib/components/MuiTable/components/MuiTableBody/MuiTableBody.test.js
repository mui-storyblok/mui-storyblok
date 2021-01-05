import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiTableBody from './MuiTableBody';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiTableBody", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiTableRow", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      hover: false,
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiTableCell", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        size: 'medium',
        align: 'center',
        content: [{
          _editable: '<!--#storyblok#{"name": "MuiTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          align: 'inherit',
          color: 'inherit',
          width: '100%',
          height: '100%',
          content: [{
            _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
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
    const tree = renderer.create(<MuiTableBody {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiBody', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
