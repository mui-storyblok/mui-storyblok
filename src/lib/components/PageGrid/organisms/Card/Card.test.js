import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Card from './Card';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "Card", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "CardActions", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'CardActions',
      content: [{
        _editable: '<!--#storyblok#{"name": "ButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'ButtonRedirect',
        redirectRoute: 'page-welcome',
        button: [{
          _editable: '<!--#storyblok#{"name": "Button", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'Button',
          buttonText: 'buttonText',
        }],
      }],
    }, {
      _editable: '<!--#storyblok#{"name": "CardContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'CardContent',
      content: [{
        _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'Typography',
        content: [{
          _editable: '<!--#storyblok#{"name": "Text", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'Text',
          text: 'text',
        }],
      }],
    }, {
      _editable: '<!--#storyblok#{"name": "CardHeader", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'CardHeader',
      title: 'title',
    }, {
      _editable: '<!--#storyblok#{"name": "CardMedia", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'CardMedia',
      alt: 'alt',
      title: 'title',
      image: 'img.com',
    }],
  };
  const comp = shallow(<Card {...props} />);
  return { comp, props };
}

describe('<Card />', () => {
  it('renders Card', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<Card {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
