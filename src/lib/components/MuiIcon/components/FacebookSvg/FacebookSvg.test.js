import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import FacebookSvg from './FacebookSvg';

function setup() {
  const props = {
    color: '#fff',
  };
  const comp = shallow(<FacebookSvg {...props} classes={{}} />);

  return { comp, props };
}

describe('<FacebookSvg />', () => {
  it('renders FacebookSvg', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <FacebookSvg {...props} classes={{}} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
