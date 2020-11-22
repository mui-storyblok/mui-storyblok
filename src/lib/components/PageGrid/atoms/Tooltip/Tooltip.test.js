import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Tooltip from './Tooltip';

function setup() {
  const props = {
    title: 'title text',
  };
  const comp = shallow(
    <Tooltip {...props}>
      <div>thing here</div>
    </Tooltip>,
  );
  return { comp, props };
}

describe('<Tooltip />', () => {
  it('renders Tooltip', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(
      <Tooltip {...props}>
        <div>thing here</div>
      </Tooltip>,
    );
    expect(tree).toMatchSnapshot();
  });
});
