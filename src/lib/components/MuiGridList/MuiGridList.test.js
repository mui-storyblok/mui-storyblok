import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiGridList from './MuiGridList';

function setup() {
  const props = {
    cellHeight: '180',
    cols: '3',
    spacing: '4',
    width: '400',
    height: '500',
    content: [
      {
        MuiGridListTileBar: [
          {
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
            component: 'MuiGridListTileBar',
            subtitle: 'test1',
            title: 'home',
            titlePosition: 'bottom',
          },
        ],
        cols: '1',
        component: 'MuiTileData',
        image: 'www.test.com',
        rows: '1',
        title: 'bubble gum',
      },
    ],
  };

  const comp = shallow(<MuiGridList {...props} />);
  return { comp, props };
}

describe('<MuiGridList />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiGridList {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiGridList', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
