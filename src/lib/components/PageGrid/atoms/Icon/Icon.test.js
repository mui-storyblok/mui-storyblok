import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Icon from './Icon';

// import customIcons from '../../utils/customIcons';

jest.mock('lib/utils/customIcons', () => ([{
  iconName: 'cool',
  Component: <div id="cool"> something here </div>,
  props: {
    'data-testid': 'cool',
  },
}]));

function setup(iconName = 'android') {
  const props = {
    component: 'Icon',
    iconName,
  };
  const comp = shallow(<Icon {...props} />);
  return { comp, props };
}

describe('<Icon />', () => {
  it('renders Icon', () => {
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

    const tree = renderer.create(<Icon {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render social svgs return facebook svg if iconName is facebook', () => {
    const { comp } = setup('facebook');
    expect(comp.find('Sus').exists()).toEqual(true);
  });

  it('should render social svgs return bbb svg if iconName is bbb', () => {
    const { comp } = setup('bbb');
    expect(comp.find('Sus').exists()).toEqual(true);
  });

  it('should render social svgs return linkedin svg if iconName is linkedin', () => {
    const { comp } = setup('linkedin');
    expect(comp.find('Sus').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is google', () => {
    const { comp } = setup('google');
    expect(comp.find('Sus').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is youtube', () => {
    const { comp } = setup('youtube');
    expect(comp.find('Sus').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is instagram', () => {
    const { comp } = setup('instagram');
    expect(comp.find('Sus').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is twitter', () => {
    const { comp } = setup('twitter');
    expect(comp.find('Sus').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is yelp', () => {
    const { comp } = setup('yelp');
    expect(comp.find('Sus').exists()).toEqual(true);
  });

  it('should render social svgs return google svg if iconName is github', () => {
    const { comp } = setup('github');
    expect(comp.find('Sus').exists()).toEqual(true);
  });
});
