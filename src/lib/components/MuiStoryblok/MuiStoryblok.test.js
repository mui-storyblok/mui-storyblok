import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiStoryblok from './MuiStoryblok';
import customIcons from '../../utils/customIcons';

function setup(iconArray = []) {
  const props = {
    accessToken: '123',
    googleapisKey: '1234',
    theme: { cool: 'value' },
    iconArray,
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


  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiStoryblok {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
