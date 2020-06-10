import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { act, Simulate } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { MuiActionCardContainer } from './MuiActionCardContainer';

function setup() {
  const props = {
    menuName: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        text: 'Action Card Menu',
      }],
    }],
    height: '100px',
    width: '100px',
    history: {
      push: jest.fn(),
    },
    actionCards: [{
      component: 'MuiActionCard',
      header: [{
        component: 'MuiTypography',
        content: [{
          component: 'MuiText',
          text: 'Card Header',
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
          text: 'Action card body test',
        }],
      }],
      redirectRoute: '/page-welcome',
      history: {
        push: jest.fn(),
      },
    }],
  };
  const comp = mount(<MuiActionCardContainer {...props} />);
  return { comp, props };
}

let container;
let button;

beforeEach(() => {
  container = document.createElement('div');
  // button = document.createElement('button');
  // button.setAttribute('id', 'clickaway-button');
  document.body.appendChild(container);
  // document.querySelector('div').appendChild(button);
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

describe('<MuiActionCardContainer />', () => {
  it('renders MuiActionCardContainer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <MemoryRouter>
        <MuiActionCardContainer {...props} />
      </MemoryRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should handleToggle and set open to close and close to open', () => {
    const { props } = setup();

    act(() => {
      ReactDOM.render(<MuiActionCardContainer {...props} />, container);
    });

    const btn = container.querySelector('button');
    act(() => {
      // eslint-disable-next-line no-undef
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(container.innerHTML.includes('Action card body test')).toEqual(true);
  });

  it('should close menulist when clicked away from', async () => {
    const { props } = setup();

    act(() => {
      ReactDOM.render(<MuiActionCardContainer {...props} />, container);
    });

    console.log('FIRST', container.innerHTML);
    const btn = container.querySelector('button');
    act(() => {
      // eslint-disable-next-line no-undef
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(container.innerHTML.includes('Action card body test')).toEqual(true);

    const classRoot = container.querySelector('#paper-test');
    act(() => {
      // eslint-disable-next-line no-undef
      classRoot.dispatchEvent(new MouseEvent('click'));
    });
    setTimeout(() => {
      expect(container.innerHTML.includes('Action card body test')).toEqual(true);
    }, 200);
    console.log('SECOND: ', container.innerHTML);

    act(() => {
     // eslint-disable-next-line no-undef
      btn.dispatchEvent(new MouseEvent('click'));
    });

    console.log('LAST', container.innerHTML);
    setTimeout(() => {
      expect(container.innerHTML.includes('Action card body test')).toEqual(false);
    }, 100);
  });
});
