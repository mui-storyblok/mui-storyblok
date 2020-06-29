import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TypographyText from './TypographyText';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiLink from '../MuiLink/MuiLink';
import MuiIcon from '../MuiIcon/MuiIcon';

function setup() {
  const props = {
    components: {
      MuiIconButtonRedirect,
      MuiLink,
      MuiIcon,
    },
    content: [{
      component: 'MuiText',
      text: 'this is text',
    }, {
      component: 'MuiLink',
      text: 'btn',
      href: 'google.com',
    }, {
      component: 'MuiIconButtonRedirect',
      redirectRoute: 'page-welcom',
      iconButton: [{
        component: 'MuiIconButton',
        icon: [{
          component: 'MuiIcon',
          iconName: 'star',
        }],
      }],
    }, {
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
