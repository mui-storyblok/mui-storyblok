import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiCardActions from './MuiCardActions';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiCardActions", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiIconButtonDownload", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiIconButtonDownload',
      href: 'google.com',
      fileName: 'fileName.png',
      iconButton: [{
        _editable: '<!--#storyblok#{"name": "MuiIconButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiIconButton',
        icon: [{
          _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiIcon',
          iconName: 'star',
        }],
      }],
    }],
  };
  const comp = shallow(<MuiCardActions {...props} />);
  return { comp, props };
}

describe('<MuiCardActions />', () => {
  it('renders MuiCardActions', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiCardActions {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
