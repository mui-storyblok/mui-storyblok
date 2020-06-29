import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiIcon from './MuiIcon';

function setup(iconName = 'android') {
  const props = {
    component: 'MuiIcon',
    iconName,
  };
  const comp = shallow(<MuiIcon {...props} />);
  return { comp, props };
}

describe('<MuiIcon />', () => {
  it('renders MuiIcon', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiIcon {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render social svgs return facebook svg if iconName is facebook', () => {
    const { comp } = setup('facebook');
    expect(comp.find('FacebookSvg').exists()).toEqual(true);
  });

  it('should render social svgs return bbb svg if iconName is bbb', () => {
    const { comp } = setup('bbb');
    expect(comp.find('BBBSvg').exists()).toEqual(true);
  });

  it('should render social svgs return linkedin svg if iconName is linkedin', () => {
    const { comp } = setup('linkedin');
    expect(comp.find('LinkedinSvg').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is google', () => {
    const { comp } = setup('google');
    expect(comp.find('GoogleSvg').exists()).toEqual(true);
  });
});
