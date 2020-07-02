import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiAudioPlayer from './MuiAudioPlayer';

function setup() {
  const props = {
    src: 'http://thebornreadies.rocks/songs/Automatic.mp3',
  };
  const comp = shallow(<MuiAudioPlayer {...props} />);
  return { comp, props };
}

describe('<MuiAudioPlayer />', () => {
  it('renders MuiAudioPlayer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiAudioPlayer {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
