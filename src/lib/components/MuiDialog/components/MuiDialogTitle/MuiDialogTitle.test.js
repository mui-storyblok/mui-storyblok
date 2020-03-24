import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiDialogTitle from './MuiDialogTitle';

function setup() {
  const props = {
    text: 'text',
    toggleDialog: jest.fn(),
  };
  const comp = shallow(<MuiDialogTitle {...props} />);

  return { comp, props };
}

describe('<MuiDialogTitle />', () => {
  it('renders MuiDialogTitle', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });


  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiDialogTitle {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
