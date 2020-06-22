import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import GoogleSvg from './GoogleSvg';

function setup() {
  const props = {
    color: '#fff',
  };
  const comp = shallow(<GoogleSvg {...props} classes={{}} />);

  return { comp, props };
}

describe('<GoogleSvg />', () => {
  it('renders GoogleSvg', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <GoogleSvg {...props} classes={{}} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
