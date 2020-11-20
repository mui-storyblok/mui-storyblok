import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiNotificationBanner from './MuiNotificationBanner';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiNotificationBanner", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiTypography',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiText',
        content: 'Banner text',
      }],
    }],
  };
  const comp = shallow(<MuiNotificationBanner {...props} />);
  return { comp, props };
}

describe('<MuiNotificationBanner />', () => {
  it('renders MuiNotificationBanner', () => {
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
    const tree = renderer.create(<MuiNotificationBanner {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
