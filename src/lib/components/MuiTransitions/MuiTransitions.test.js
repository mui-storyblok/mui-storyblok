import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiTransitions from './MuiTransitions';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiTransitions", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiZoom", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiZoom',
      content: [{
        _editable: '<!--#storyblok#{"name": "Blok", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'Blok',
        content: [{
          _editable: '<!--#storyblok#{"name": "MuiGrid", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiGrid',
          content: [{
            _editable: '<!--#storyblok#{"name": "MuiGridItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'MuiGridItem',
            content: [{
              _editable: '<!--#storyblok#{"name": "MuiCard", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
              component: 'MuiCard',
              content: [{
                _editable: '<!--#storyblok#{"name": "MuiCardContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                component: 'MuiCardContent',
                content: [{
                  _editable: '<!--#storyblok#{"name": "MuiCardContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                  component: 'MuiTypography',
                  content: [{
                    _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                    component: 'MuiText',
                    text: 'Juice Box',
                  }],
                }],
              }],
            }],
          }],
        }],
      }],
    }],
  };

  const comp = shallow(<MuiTransitions {...props} />);
  return { comp, props };
}

describe('<MuiTransitions />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiTransitions {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiGridList', () => {
    const { comp } = setup();
    expect(comp).toMatchSnapshot();
  });
});
