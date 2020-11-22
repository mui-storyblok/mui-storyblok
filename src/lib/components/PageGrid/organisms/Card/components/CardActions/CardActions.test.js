import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CardActions from './CardActions';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "CardActions", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "ButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'ButtonRedirect',
      href: 'google.com',
      fileName: 'fileName.png',
      Button: [{
        _editable: '<!--#storyblok#{"name": "Button", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'Button',
      }],
    }],
  };
  const comp = shallow(<CardActions {...props} />);
  return { comp, props };
}

describe('<CardActions />', () => {
  it('renders CardActions', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<CardActions {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
