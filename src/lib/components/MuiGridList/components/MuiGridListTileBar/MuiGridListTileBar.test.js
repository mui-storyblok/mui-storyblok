import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiGridListTileBar from './MuiGridListTileBar';

function setup() {
  const props = {
    titlePosition: 'bottom',
    subtitle: 'wooooo',
    title: 'ayeeeee',
    actionIcon: [
      {
        component: 'MuiIconButtonRedirect',
        iconButton: [
          {
            component: 'MuiIconButton',
            icon: [
              {
                component: 'MuiIcon',
                iconName: 'home',
              },
            ],
          },
        ],
        redirectRoute: 'home',
      },
    ],
  };

  const comp = shallow(<MuiGridListTileBar {...props} />);
  return { comp, props };
}

describe('<MuiGridListTileBar />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiGridListTileBar {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiGridListTileBar', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
