import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Video from './Video';

function setup() {
  const props = {
    url: 'www.asdfiojasdf.com',
  };

  const comp = shallow(<Video {...props} />);
  return { comp, props };
}

describe('<Video />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<Video {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render Video', () => {
    const { comp } = setup();
    expect(comp).toMatchSnapshot();
  });
});
