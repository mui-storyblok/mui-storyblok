import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import BlokForm from './BlokForm';

function setup() {
  const props = {
    content: [{
      component: 'FormGrid',
      content: [{
        component: 'FormGridItem',
        content: [{
          component: 'MuiCheckbox',
          name: 'checkbox',
        }, {
          component: 'MuiInput',
          name: 'input',
        }, {
          component: 'MuiSelect',
          name: 'select',
          options: ['one', 'two', 'three'],
        }, {
          component: 'MuiRadio',
          name: 'radio',
          value: 'radio1',
        }, {
          component: 'MuiRadio',
          name: 'radio',
          value: 'radio2',
        }],
      }],
    }],
    submitButton: [{
      buttonText: 'submit',
    }],
    baseUrl: 'woo.com',
    successResponseText: '!!!!!!!!!!!!!!!!!!!!!good!!!!!!!!!!!!!!!!!!!!!',
    errorResponseText: 'bad',
  };
  const comp = mount(<BlokForm {...props} />);
  return { comp, props };
}


describe('<BlokForm />', () => {
  it('renders BlokForm', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });


  describe('submits having an issue with act and async i think? state is not setting', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });

    it('clicks submit set successResponseText', async () => {
      global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
        ok: true,
        status: 200,
      }));
      const { props } = setup();
      act(() => {
        ReactDOM.render(<BlokForm {...props} />, container);
      });

      const button = container.querySelector('button');
      await act(async () => {
        // eslint-disable-next-line no-undef
        button.dispatchEvent(new MouseEvent('click'));
      });
      expect(container.innerHTML.includes('data-testid="successResponseTestID"')).toBe(true);
    });

    it('clicks submit set errorResponse', async () => {
      global.fetch = jest.fn(() => Promise.reject());
      const { props } = setup();
      act(() => {
        ReactDOM.render(<BlokForm {...props} />, container);
      });

      const button = container.querySelector('button');
      await act(async () => {
        // eslint-disable-next-line no-undef
        button.dispatchEvent(new MouseEvent('click'));
      });
      expect(container.innerHTML.includes('data-testid="errorResponseTestID"')).toBe(true);
    });
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <BlokForm {...props} />
    ));
    expect(tree).toMatchSnapshot();
  });
});
