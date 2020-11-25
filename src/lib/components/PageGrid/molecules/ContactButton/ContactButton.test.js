import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { ContactButton } from './ContactButton';

function setup(email = '', phone = '') {
  const props = {
    button: [{
      component: 'Button',
      buttonText: 'Contact',
    }],
    phone,
    email,
  };

  const comp = mount(<ContactButton {...props} />);
  return { comp, props };
}

describe('<ContactButton />', () => {
  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ContactButton {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('renders ContactButton', () => {
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
