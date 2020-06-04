import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiStoryblok from './MuiStoryblok';

function setup() {
  const props = {
    accessToken: '123',
  };
  const comp = shallow(<MuiStoryblok {...props} />);
  return { comp, props };
}

describe('<MuiStoryblok />', () => {
  it('renders', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiStoryblok {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
