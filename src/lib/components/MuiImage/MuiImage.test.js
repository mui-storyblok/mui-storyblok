import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiImage from './MuiImage';

function setup(href = null) {
  const props = {
    hrefLink: href,
    image: 'www.applejuice.com',
  };

  const comp = mount(<MuiImage {...props} />);
  return { comp, props };
}

describe('<MuiImage />', () => {
  it('renders MuiImage', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot with MuiImage', () => {
    const { props } = setup('/home');

    const tree = renderer.create(<MuiImage {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
