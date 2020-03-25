import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MuiButtonRedirect } from './MuiButtonRedirect';

function setup(legacyRedirect = true) {
  const props = {
    button: [{
      component: 'MuiButton',
      buttonText: 'buttonText',
    }],
    redirectRoute: 'page-welcome',
    legacyRedirect,
    history: {
      push: jest.fn(),
    },
  };
  const comp = mount(<MuiButtonRedirect {...props} />);

  return { comp, props };
}

describe('<MuiButtonRedirect />', () => {
  it('renders MuiButtonRedirect', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and call GoogleHelpers contact ', async () => {
    const { comp, props } = setup(false);
    comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(props.history.push).toBeCalled();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiButtonRedirect {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
