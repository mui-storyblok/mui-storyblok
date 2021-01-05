import React from 'react';
import { shallow } from 'enzyme';
import PageGrid from './PageGrid';

function setup() {
  const props = {
    component: 'PageGrid',
    content: [{
      component: 'PageGridItem',
      content: [{
        _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'Typography',
        content: [{
          _editable: '<!--#storyblok#{"name": "Span", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'Span',
          content: 'text',
        }],
      }],
    }],
  };
  const comp = shallow(<PageGrid {...props} />);
  return { comp, props };
}

describe('<PageGrid />', () => {
  it('renders PageGrid', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
