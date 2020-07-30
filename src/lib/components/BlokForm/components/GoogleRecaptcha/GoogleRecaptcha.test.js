import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GoogleRecaptcha from './GoogleRecaptcha';

function setup() {
  const props = {
    siteKey: '1234',
    setIsABot: jest.fn(),
  };

  const comp = shallow(<GoogleRecaptcha {...props} />);
  return { comp, props };
}

describe('<GoogleRecaptcha />', () => {
  it('renders GoogleRecaptcha', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<GoogleRecaptcha {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should handle on change and set bot to false if sitekey is provided', () => {
    const { comp, props } = setup();
    const recaptcha = comp.find('AsyncScriptLoader(ReCAPTCHA)').first();
    recaptcha.simulate('change');
    expect(props.setIsABot).toHaveBeenCalled();
  });
});
