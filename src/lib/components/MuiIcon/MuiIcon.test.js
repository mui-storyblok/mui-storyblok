import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiIcon from './MuiIcon';

// import customIcons from '../../utils/customIcons';

jest.mock('../../utils/customIcons', () => ([{
  iconName: 'cool',
  Component: <div id="cool"> something here </div>,
  props: {
    'data-testid': 'cool',
  },
}]));

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

  it('renders customIcon', () => {
    const { comp } = setup('cool');
    const icon = comp.find('[data-testid="cool"]');
    expect(icon.length).toBe(1);
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

  it('should render social svgs return google svg if iconName is youtube', () => {
    const { comp } = setup('youtube');
    expect(comp.find('YouTubeSvg').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is instagram', () => {
    const { comp } = setup('instagram');
    expect(comp.find('InstagramSvg').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is twitter', () => {
    const { comp } = setup('twitter');
    expect(comp.find('TwitterSvg').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is yelp', () => {
    const { comp } = setup('yelp');
    expect(comp.find('YelpSvg').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is github', () => {
    const { comp } = setup('github');
    expect(comp.find('GithubSvg').exists()).toEqual(true);
  });
});
