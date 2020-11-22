import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Typography from './Typography';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "Span", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Span',
      text: 'this is text',
    }, {
      _editable: '<!--#storyblok#{"name": "Link", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Link',
      text: 'btn',
      href: 'google.com',
    }],
  };
  const comp = shallow(<Typography {...props} />);
  return { comp, props };
}

describe('<Typography />', () => {
  it('renders Typography', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<Typography {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
