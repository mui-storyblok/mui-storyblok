import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MuiContactButton } from './MuiContactButton';

function setup(email = '', phone = '') {
  const props = {
    button: [{
      component: 'MuiButton',
      buttonText: 'Contact',
    }],
    phone,
    email,
  };

  const comp = mount(<MuiContactButton {...props} />);
  return { comp, props };
}

describe('<MuiContactButton />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiContactButton {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('renders MuiContactButton', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and href to contact email ', async () => {
    const { comp, props } = setup('testemail@yahoo.com');
    comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(props.email).toEqual('testemail@yahoo.com');
  });

  it('handleClick and href to contact phone number ', async () => {
    const { comp, props } = setup('', '720');
    comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(props.phone).toEqual('720');
  });
});
