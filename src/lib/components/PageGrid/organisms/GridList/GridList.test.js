import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GridList from './GridList';

function setup() {
  const props = {
    cellHeight: '180',
    cols: '3',
    spacing: '4',
    width: '400',
    height: '500',
    content: [
      {
        gridlistTileBar: [
          {
            actionIcon: [
              {
                component: 'IconButtonRedirect',
                iconName: 'home',
              },
            ],
            component: 'GridListTileBar',
            subtitle: 'test1',
            title: 'home',
            titlePosition: 'bottom',
          },
        ],
        cols: '1',
        component: 'TileData',
        image: 'www.test.com',
        rows: '1',
        title: 'bubble gum',
      },
    ],
  };

  const comp = shallow(<GridList {...props} />);
  return { comp, props };
}

describe('<GridList />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<GridList {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render GridList', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
