/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import { ActionCardContainer } from './ActionCardContainer';

jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ inView: true, ref: { } }),
}));

function setup() {
  const props = {
    menuName: [{
      component: 'Typography',
      content: [{
        component: 'Span',
        content: 'Action Card Menu',
      }],
    }],
    height: '100px',
    width: '100px',
    actionCards: [{
      component: 'ActionCard',
      header: [{
        component: 'Typography',
        content: [{
          component: 'Span',
          content: 'Card Header',
        }],
      }],
      icon: [{
        component: 'Icon',
        iconName: 'star',
      }],
      text: [{
        component: 'Typography',
        content: [{
          component: 'Span',
          content: 'Action card body test',
        }],
      }],
      redirectRoute: '/page-welcome',
    }],
  };
  const comp = mount(<ActionCardContainer {...props} />);
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

describe('<ActionCardContainer />', () => {
  it('renders ActionCardContainer', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ActionCardContainer {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should handleToggle and set open to close and close to open', () => {
    const { props } = setup();

    act(() => {
      ReactDOM.render(<ActionCardContainer {...props} />, container);
    });

    const btn = container.querySelector('button');
    act(() => {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    console.log(container.innerHTML);
    expect(container.innerHTML.includes('Action card body test')).toEqual(true);
  });

  it('should close menulist when clicked away from', async () => {
    const { props } = setup();

    act(() => {
      ReactDOM.render(<ActionCardContainer {...props} />, container);
    });

    const btn = container.querySelector('button');
    act(() => {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(container.innerHTML.includes('Action card body test')).toEqual(true);

    const classRoot = container.querySelector('#paper-test');

    act(() => {
      classRoot.dispatchEvent(new MouseEvent('click'));
    });

    setTimeout(() => {
      expect(container.innerHTML.includes('Action card body test')).toEqual(true);
    }, 200);

    act(() => {
      btn.dispatchEvent(new MouseEvent('click'));
    });

    setTimeout(() => {
      expect(container.innerHTML.includes('Action card body test')).toEqual(false);
    }, 100);
  });
});
