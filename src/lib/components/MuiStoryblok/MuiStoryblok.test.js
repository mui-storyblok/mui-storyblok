import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiStoryblok from './MuiStoryblok';
import customIcons from '../../utils/customIcons';
import loader from '../../utils/customLoader';

function setup(iconArray = [], customLoader = undefined) {
  const props = {
    accessToken: '123',
    googleapisKey: '1234',
    theme: { cool: 'value' },
    iconArray,
    customLoader,
  };
  const comp = shallow(<MuiStoryblok {...props} />);
  return { comp, props };
}

describe('<MuiStoryblok />', () => {
  it('renders', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('iconArray', () => {
    const icons = [{
      iconName: 'thing',
      Component: <div>hey</div>,
    }];
    setup(icons);
    expect(customIcons).toEqual(icons);
  });

  it('should set the custom loader if custom loader is passed down as a prop', () => {
    const MockComponent = () => <div>Aloha</div>;
    setup([], MockComponent);
    expect(loader.length).toEqual(1);
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiStoryblok {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
