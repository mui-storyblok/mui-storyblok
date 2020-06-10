/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import MuiTabs from './MuiTabs';

function setup() {
  const props = {
    tabs: [{
      component: 'MuiTab',
      content: [{
        component: 'MuiGrid',
        content: [{
          component: 'MuiGridItem',
          content: [{
            component: 'MuiTypography',
            content: [{
              component: 'MuiText',
              text: 'First tab text',
            }],
          }],
        }],
      }],
    },
    {
      // icon: [{
      //   component: 'MuiIcon',
      //   iconName: 'android',
      // }],
      component: 'MuiTab',
      content: [{
        component: 'MuiGrid',
        content: [{
          component: 'MuiGridItem',
          content: [{
            component: 'MuiTypography',
            content: [{
              component: 'MuiText',
              text: 'First tab text',
            }],
          }],
        }],
      }],
    }],
  };
  const comp = mount(<MuiTabs {...props} />);
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

describe('<MuiTabs />', () => {
  it('renders MuiTabs', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('should handle the change of the index', () => {
    const { props } = setup();

    act(() => {
      ReactDOM.render(<MuiTabs {...props} />, container);
    });

    const btn = container.querySelector('button');
    const btnAll = container.querySelectorAll('button');
    console.log('$$$$$$$$$$$$$$$$$$$$');
    console.log(btnAll[1].outerHTML);
    // console.log(btn.outerHTML);
    act(() => {
      btn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    console.log(container.innerHTML);
  });
});
