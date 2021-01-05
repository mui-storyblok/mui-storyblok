import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AppBar from './AppBar';

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ inView: true, ref: {} }),
}));

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "AppBar", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "AppBarGridItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'AppBarGrid',
      content: [{
        component: 'AppBarGridItem',
        content: [{
          _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'Typography',
          content: [{
            _editable: '<!--#storyblok#{"name": "Span", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'Span',
            content: 'cool',
          }],
        }],
      }],

    }],
    position: 'relative',
  };
  const comp = shallow(<AppBar {...props} />);
  return { comp, props };
}

describe('<AppBar />', () => {
  it('renders AppBar', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<AppBar {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
