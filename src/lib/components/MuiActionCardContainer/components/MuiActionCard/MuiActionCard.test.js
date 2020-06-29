import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { MuiActionCard } from './MuiActionCard';

function setup() {
  const props = {
    height: '100px',
    width: '100px',
    header: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        content: 'Header of a card',
      }],
    }],
    icon: [{
      component: 'MuiIcon',
      iconName: 'star',
    }],
    text: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        content: 'this is the text of an action card body.',
      }],
    }],
    redirectRoute: '/page-welcome',
    history: {
      push: jest.fn(),
    },
  };
  const comp = mount(<MuiActionCard {...props} />);
  return { comp, props };
}

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});

describe('<MuiActionCard />', () => {
  it('renders MuiActionCard', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiActionCard {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('handleClick and call GoogleHelpers contact ', async () => {
    const { props } = setup();
    act(() => {
      ReactDOM.render(
        <MuiActionCard {...props} />,
        container,
      );
    });
    window.location.assign = jest.fn();
    const btn = container.querySelector('#actionCard-test');
    act(() => {
      // eslint-disable-next-line no-undef
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(window.location.assign).toBeCalled();
  });
});
