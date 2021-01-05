import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DialogTitle from './DialogTitle';

function setup() {
  const props = {
    text: 'text',
    toggleDialog: jest.fn(),
  };
  const comp = shallow(<DialogTitle {...props} />);

  return { comp, props };
}

describe('<DialogTitle />', () => {
  it('renders DialogTitle', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });


  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<DialogTitle {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
