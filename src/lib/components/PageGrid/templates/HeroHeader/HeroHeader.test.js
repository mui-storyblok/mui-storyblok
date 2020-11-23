import React from 'react';
import { shallow } from 'enzyme';
import HeroHeader from './HeroHeader';

function setup() {
  const props = {
    backgroundImageUrl: 'backgroundImageUrl.png',
    component: 'Grid',
    content: [{
      component: 'HeroHeaderGridItem',
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
  const comp = shallow(<HeroHeader {...props} />);
  return { comp, props };
}

describe('<HeroHeader />', () => {
  it('renders HeroHeader', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
