import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GridListTileBar from './GridListTileBar';

function setup(actionComponent = 'IconButtonRedirect') {
  const props = {
    titlePosition: 'bottom',
    subtitle: 'wooooo',
    title: 'ayeeeee',
    actionIcon: [{ component: actionComponent }],
  };

  const comp = shallow(<GridListTileBar {...props} />);
  return { comp, props };
}

describe('<GridListTileBar />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<GridListTileBar {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render GridListTileBar', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
