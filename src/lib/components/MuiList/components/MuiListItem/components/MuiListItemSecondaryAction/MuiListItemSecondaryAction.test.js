import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MuiListItemSecondaryAction from './MuiListItemSecondaryAction';

function setup() {
  const props = {
    content: [{
      component: 'MuiIconButtonRedirect',
      icon: [{
        component: 'MuiIcon',
        iconName: 'star',
      }],
    }],
  };
  const comp = shallow(<MuiListItemSecondaryAction {...props} />);
  return { comp, props };
}

describe('<MuiListItemSecondaryAction />', () => {
  it('renders MuiListItemSecondaryAction', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiListItemSecondaryAction {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
