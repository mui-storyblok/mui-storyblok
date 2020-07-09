import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiGridListTileBar from './MuiGridListTileBar';

function setup(actionComponent = 'MuiIconButtonRedirect') {
  const props = {
    titlePosition: 'bottom',
    subtitle: 'wooooo',
    title: 'ayeeeee',
    actionIcon: [{ component: actionComponent }],
  };

  const comp = shallow(<MuiGridListTileBar {...props} />);
  return { comp, props };
}

describe('<MuiGridListTileBar />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiGridListTileBar {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiGridListTileBar', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
