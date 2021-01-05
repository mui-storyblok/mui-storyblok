import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NotificationBanner from './NotificationBanner';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "NotificationBanner", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Typography',
      content: [{
        _editable: '<!--#storyblok#{"name": "Span", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'Span',
        content: 'Banner Span',
      }],
    }],
  };
  const comp = shallow(<NotificationBanner {...props} />);
  return { comp, props };
}

describe('<NotificationBanner />', () => {
  it('renders NotificationBanner', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should setBanner to false when icon is clicked', () => {
    const { comp } = setup();
    expect(comp.exists('WithStyles(ForwardRef(Icon))')).toEqual(true);
    comp.find('WithStyles(ForwardRef(Icon))').at(0).simulate('click');
    expect(comp.exists('WithStyles(ForwardRef(Icon))')).toEqual(false);
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<NotificationBanner {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
