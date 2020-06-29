import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DropDownMenu from './DropDownMenu';

function setup() {
  const props = {};
  const comp = shallow(
    <DropDownMenu {...props}>
      <p>here</p>
    </DropDownMenu>,
  );
  return { comp, props };
}

describe('<DropDownMenu />', () => {
  it('renders DropDownMenu', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot with auth', () => {
    const { props } = setup();

    const tree = renderer.create(
      <DropDownMenu {...props}>
        <p>here</p>
      </DropDownMenu>,
    );
    expect(tree).toMatchSnapshot();
  });
});
