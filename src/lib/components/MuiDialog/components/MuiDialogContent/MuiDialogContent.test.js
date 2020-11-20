import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiDialogContent from './MuiDialogContent';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiDialogContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiDialogContentTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiDialogContentTypography',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiText',
        text: 'text',
      }],
    }],
  };
  const comp = shallow(<MuiDialogContent {...props} />);

  return { comp, props };
}

describe('<MuiDialogContent />', () => {
  it('renders MuiDialogContent', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiDialogContent {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
