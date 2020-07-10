import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GithubSvg from './GithubSvg';

function setup() {
  const props = {
    color: '#fff',
  };
  const comp = shallow(<GithubSvg {...props} classes={{}} />);

  return { comp, props };
}

describe('<GithubSvg />', () => {
  it('renders GithubSvg', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<GithubSvg {...props} classes={{}} />);
    expect(tree).toMatchSnapshot();
  });
});
