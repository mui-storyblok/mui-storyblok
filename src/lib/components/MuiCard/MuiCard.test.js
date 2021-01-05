import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiCard from './MuiCard';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiCard", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiCardActions", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiCardActions',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiButtonRedirect',
        redirectRoute: 'page-welcome',
        button: [{
          _editable: '<!--#storyblok#{"name": "MuiButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiButton',
          buttonText: 'buttonText',
        }],
      }],
    }, {
      _editable: '<!--#storyblok#{"name": "MuiCardContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiCardContent',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiTypography',
        content: [{
          _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiText',
          text: 'text',
        }],
      }],
    }, {
      _editable: '<!--#storyblok#{"name": "MuiCardHeader", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiCardHeader',
      title: 'title',
    }, {
      _editable: '<!--#storyblok#{"name": "MuiCardMedia", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiCardMedia',
      alt: 'alt',
      title: 'title',
      image: 'img.com',
    }],
  };
  const comp = shallow(<MuiCard {...props} />);
  return { comp, props };
}

describe('<MuiCard />', () => {
  it('renders MuiCard', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiCard {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
