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

  it('should render MuiIconButton as actionItem in grid list tile bar', () => {
    const { comp } = setup('MuiIconButton');
    const actionIcon = comp.find('WithStyles(ForwardRef(GridListTileBar))').prop('actionIcon').props;
    expect(actionIcon.component).toEqual('MuiIconButton');
  });

  it('should render MuiIconButtonDialog as actionItem in grid list tile bar', () => {
    const { comp } = setup('MuiIconButtonDialog');
    const actionIcon = comp.find('WithStyles(ForwardRef(GridListTileBar))').prop('actionIcon').props;
    expect(actionIcon.component).toEqual('MuiIconButtonDialog');
  });

  it('should render MuiIconButtonHref as actionItem in grid list tile bar', () => {
    const { comp } = setup('MuiIconButtonHref');
    const actionIcon = comp.find('WithStyles(ForwardRef(GridListTileBar))').prop('actionIcon').props;
    expect(actionIcon.component).toEqual('MuiIconButtonHref');
  });

  it('should render MuiIconButtonRedirect as actionItem in grid list tile bar', () => {
    const { comp } = setup('MuiIconButtonRedirect');
    const actionIcon = comp.find('WithStyles(ForwardRef(GridListTileBar))').prop('actionIcon').props;
    expect(actionIcon.component).toEqual('MuiIconButtonRedirect');
  });

  it('should return null as actionItem in grid list tile bar', () => {
    const { comp } = setup('Apples');
    const actionIcon = comp.find('WithStyles(ForwardRef(GridListTileBar))').prop('actionIcon');
    expect(actionIcon).toEqual(null);
  });

  it('should return renderAction as null if actionIcon is empty', () => {
    const props = {
      titlePosition: 'bottom',
      subtitle: 'wooooo',
      title: 'ayeeeee',
      actionIcon: [],
    };
    const comp = shallow(<MuiGridListTileBar {...props} />);
    const actionIcon = comp.find('WithStyles(ForwardRef(GridListTileBar))').prop('actionIcon');
    expect(actionIcon).toEqual(null);
  });
});
