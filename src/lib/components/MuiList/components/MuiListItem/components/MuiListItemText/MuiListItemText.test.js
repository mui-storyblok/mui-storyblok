import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiListItemText from './MuiListItemText';

function setup() {
  const props = {
    component: 'MuiListItemText',
    primary: 'primary',
    secondary: 'secondary',
  };
  const comp = shallow(<MuiListItemText {...props} />);
  return { comp, props };
}

describe('<MuiListItemText />', () => {
  it('renders MuiListItemText', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiListItemText {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
