import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiTooltip from './MuiTooltip';

function setup() {
  const props = {
    title: 'title text',
  };
  const comp = shallow(
    <MuiTooltip {...props}>
      <div>thing here</div>
    </MuiTooltip>,
  );
  return { comp, props };
}

describe('<MuiTooltip />', () => {
  it('renders MuiTooltip', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(
      <MuiTooltip {...props}>
        <div>thing here</div>
      </MuiTooltip>,
    );
    expect(tree).toMatchSnapshot();
  });
});
