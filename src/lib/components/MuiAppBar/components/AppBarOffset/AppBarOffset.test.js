import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { AppBarOffset, styles } from './AppBarOffset';


function setup() {
  const props = {
    classes: { offset: 'stylesmadewithstyles' },
  };
  const comp = shallow(<AppBarOffset {...props} />);
  return { comp, props };
}

describe('<AppBarOffset />', () => {
  it('renders AppBarOffset', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<AppBarOffset {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should create styles with offset toolbar', () => {
    const theme = { mixins: { toolbar: { apples: 1 } } };
    const classes = styles(theme);
    expect(classes).toEqual({ offset: { apples: 1, flexGrow: 1 } });
  });
});
