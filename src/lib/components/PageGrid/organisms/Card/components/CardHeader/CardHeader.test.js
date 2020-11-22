import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import CardHeader from './CardHeader';

function setup() {
  const props = {
    title: 'title',
  };
  const comp = shallow(<CardHeader {...props} />);
  return { comp, props };
}

describe('<CardHeader />', () => {
  it('renders CardHeader', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<CardHeader {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
