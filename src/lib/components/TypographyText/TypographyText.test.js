import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TypographyText from './TypographyText';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiLink from '../MuiLink/MuiLink';
import MuiIcon from '../MuiIcon/MuiIcon';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "TypographyText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    components: {
      MuiIconButtonRedirect,
      MuiLink,
      MuiIcon,
    },
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiText',
      text: 'this is text',
    }, {
      _editable: '<!--#storyblok#{"name": "MuiLink", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiLink',
      text: 'btn',
      href: 'google.com',
    }, {
      _editable: '<!--#storyblok#{"name": "MuiIconButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiIconButtonRedirect',
      redirectRoute: 'page-welcom',
      iconButton: [{
        _editable: '<!--#storyblok#{"name": "MuiIconButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiIconButton',
        icon: [{
          _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiIcon',
          iconName: 'star',
        }],
      }],
    }, {
      _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiIcon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<TypographyText {...props} />);
  return { comp, props };
}

describe('<TypographyText />', () => {
  it('renders TypographyText', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<TypographyText {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
