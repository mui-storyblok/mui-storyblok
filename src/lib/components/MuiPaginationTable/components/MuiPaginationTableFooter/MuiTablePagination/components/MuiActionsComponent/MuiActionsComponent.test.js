import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiActionsComponent from './MuiActionsComponent';

function setup() {
  const props = {
    count: 0,
    rowsPerPage: 10,
    page: 0,
  };

  const comp = shallow(<MuiActionsComponent {...props} />);
  return { comp, props };
}

describe('<MuiActionsComponent />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiActionsComponent {...props} />);
    expect(tree).toMatchSnapshot();
  });
  it('should render MuiActionsComponent', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });
});
