import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MuiListItem } from './MuiListItem';

function setup(isButton = false, redirectRoute = undefined) {
  const props = {
    listItemAvatar: [{
      component: 'MuiListItemAvatar',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    listItemIcon: [{
      component: 'MuiListItemIcon',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    listItemText: [{
      component: 'MuiListItemText',
      primary: 'primary',
    }],

    listItemSecondaryAction: [{
      component: 'MuiListItemSecondaryAction',
      content: [{
        component: 'MuiIconButtonRedirect',
        iconButton: [{
          component: 'MuiIconButton',
          icon: [{
            component: 'MuiIcon',
            iconName: 'star',
          }],
        }],
      }],
    }],
    isButton,
    redirectRoute,
    history: {
      push: jest.fn(),
    },
  };
  const comp = shallow(<MuiListItem {...props} />);
  return { comp, props };
}

describe('<MuiListItem />', () => {
  it('renders MuiListItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and calls history push ', async () => {
    const { comp, props } = setup(true, '/page-test');
    comp.find('WithStyles(ForwardRef(ListItem))').at(0).simulate('click');
    expect(props.history.push).toBeCalled();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiListItem {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
