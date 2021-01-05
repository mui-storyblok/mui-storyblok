import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AudioPlayer from './AudioPlayer';

function setup() {
  const props = {
    src: 'http://thebornreadies.rocks/songs/Automatic.mp3',
  };
  const comp = shallow(<AudioPlayer {...props} />);
  return { comp, props };
}

describe('<AudioPlayer />', () => {
  it('renders AudioPlayer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<AudioPlayer {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
