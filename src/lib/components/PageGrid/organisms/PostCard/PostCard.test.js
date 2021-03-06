import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import PostCard from './PostCard';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "PostCard", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    overline: 'overline',
    heading: 'heading',
    body: 'body',
    image: 'cool.jpg',
    imgAlt: 'cool',
    imgTitle: 'imgTitle',
    icon: [{
      component: 'Icon',
      iconName: 'star',
    }],
    cardActions: [{
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
    }],
  };
  const comp = shallow(<PostCard {...props} />);
  return { comp, props };
}

describe('<PostCard />', () => {
  it('renders PostCard', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<PostCard {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
