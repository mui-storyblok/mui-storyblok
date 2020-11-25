import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListItemText from './ListItemText';

function setup() {
  const props = {
    component: 'ListItemText',
    primary: 'primary',
    secondary: 'secondary',
  };
  const comp = shallow(<ListItemText {...props} />);
  return { comp, props };
}

describe('<ListItemText />', () => {
  it('renders ListItemText', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ListItemText {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
