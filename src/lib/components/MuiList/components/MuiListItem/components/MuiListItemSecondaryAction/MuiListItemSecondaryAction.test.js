import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import MuiListItemSecondaryAction from './MuiListItemSecondaryAction';

function setup() {
  const props = {
    content: [{
      component: 'MuiIconButtonRedirect',
      buttonText: 'buttonText',
      redirectRoute: 'page-welcome',
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
    const mockstore = configureMockStore();
    const store = mockstore({});
    const tree = renderer.create((
      <Provider store={store}>
        <MemoryRouter>
          <MuiListItemSecondaryAction {...props} />
        </MemoryRouter>
      </Provider>
    ));
    expect(tree).toMatchSnapshot();
  });
});
