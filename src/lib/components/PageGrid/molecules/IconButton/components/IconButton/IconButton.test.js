import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import IconButton from './IconButton';

function setup(component = 'MuiIcon') {
  const props = {
    icon: [{
      component,
      iconName: 'star',
    }],
    edge: 'start',
  };
  const comp = shallow(<IconButton />);
  return { comp, props };
}

describe('<IconButton />', () => {
  const originalConsoleError = global.console.error;
  let warningMsg;

  beforeEach(() => {
    global.console.error = (...args) => {
      const propTypeFailures = [/Failed prop type/, /Warning: Recieved/];

      if (propTypeFailures.some(p => p.test(args[0]))) {
        warningMsg = [args[0]];
      }

      originalConsoleError(...args);
    };
  });

  it('renders IconButton', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should throw error if invalid icon proptype provided.', () => {
    setup('invalidComp');
    const expected = 'Warning: Failed prop type: The prop `iconName` is marked as required in `Icon`, but its value is `undefined`.\n    in Icon (at IconButton.js:35)';
    expect(warningMsg[0]).toEqual(expected);
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<IconButton {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
