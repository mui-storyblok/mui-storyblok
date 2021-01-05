import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiAppBar from './MuiAppBar';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiAppBar", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "GridItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'GridItem',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiButtonHref", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiButtonHref',
        button: [{
          _editable: '<!--#storyblok#{"name": "MuiButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiButton',
          buttonText: 'cool',
        }],
        href: 'cool.com',
      }],
    }],
    position: 'relative',
  };
  const comp = shallow(<MuiAppBar {...props} />);
  return { comp, props };
}

describe('<MuiAppBar />', () => {
  it('renders MuiAppBar', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiAppBar {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
