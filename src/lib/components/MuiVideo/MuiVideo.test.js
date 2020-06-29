import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiVideo from './MuiVideo';

function setup() {
  const props = {
    url: 'www.asdfiojasdf.com',
  };

  const comp = shallow(<MuiVideo {...props} />);
  return { comp, props };
}

describe('<MuiVideo />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiVideo {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should render MuiVideo', () => {
    const { comp } = setup();
    expect(comp).toMatchSnapshot();
  });
});
