import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiCardHeader from './MuiCardHeader';

function setup() {
  const props = {
    title: 'title',
  };
  const comp = shallow(<MuiCardHeader {...props} />);
  return { comp, props };
}

describe('<MuiCardHeader />', () => {
  it('renders MuiCardHeader', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiCardHeader {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
