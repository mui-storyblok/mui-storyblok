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
      label: 'First Tab option',
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
      label: 'Second Tab option',
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
    const autoPlayView = container.querySelector('#swipeableViews-test');
    console.log(autoPlayView.innerHTML);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log(container.innerHTML);
    // console.log(btn.outerHTML);
    act(() => {
      btnAll[1].dispatchEvent(new MouseEvent('click'));
    });
    console.log('---------------------------------------------------------------------------------');
    console.log(container.innerHTML);

    expect(container.innerHTML.includes('First Tab text')).toEqual(true);

    console.log(btnAll[1].outerHTML);
    // act(() => {
    //   btnAll[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    // });

    // expect(container.innerHTML.includes('Second Tab')).toEqual(true);
  });
});
