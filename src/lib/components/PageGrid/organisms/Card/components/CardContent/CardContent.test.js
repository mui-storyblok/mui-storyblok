import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CardContent from './CardContent';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "CardContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Typography',
      content: [{
        _editable: '<!--#storyblok#{"name": "Span", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'Span',
        content: 'text',
      }],
    }],
  };
  const comp = shallow(<CardContent {...props} />);
  return { comp, props };
}

describe('<CardContent />', () => {
  it('renders CardContent', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<CardContent {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
