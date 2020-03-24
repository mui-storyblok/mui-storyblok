import React from 'react';
import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import renderer from 'react-test-renderer';
import MuiMenuItem from './MuiMenuItem';

const mock = jest.fn();

function setup(googleConversionTracking = '', legacyRedirect = true) {
  const props = {
    buttonText: 'buttonText',
    redirectRoute: 'page-welcome',
    legacyRedirect,
    googleConversionTracking,
  };
  const comp = mount(
    <Router
      history={{
        ...createMemoryHistory(),
        push: mock,
      }}
    >
      <MuiMenuItem {...props} />
    </Router>,
  );
  return { comp, props };
}

describe('<MuiMenuItem />', () => {
  it('renders MuiMenuItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('handleClick and call GoogleHelpers contact ', async () => {
    const { comp } = setup('contact', false);
    comp.find('ForwardRef(MenuItem)').at(0).simulate('click');
    expect(mock).toBeCalled();
  });

  test('snapshot with auth', () => {
    const { props } = setup();

    const tree = renderer.create(
      <Router history={createMemoryHistory()}>
        <MuiMenuItem {...props} />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
