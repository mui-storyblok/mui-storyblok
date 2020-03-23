import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MuiIconButtonRedirect } from './MuiIconButtonRedirect';

function setup(legacyRedirect = true) {
  const props = {

    redirectRoute: 'page-welcome',
    legacyRedirect,
    
    icon: [{
      component: 'MuiIcon',
      iconName: 'android',
    }],

    history: {
      push: jest.fn(),
    },

  };
  const comp = shallow(<MuiIconButtonRedirect {...props} />);

  return { comp, props };
}

describe('<MuiIconButtonRedirect />', () => {
  it('renders MuiIconButtonRedirect', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('clicks', () => {
    it('handleClick and calls history push ', async () => {
      const { comp, props } = setup(false);
      comp.find('WithStyles(ForwardRef(IconButton))').at(0).simulate('click');
      expect(props.history.push).toBeCalled();
    });
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiIconButtonRedirect {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
