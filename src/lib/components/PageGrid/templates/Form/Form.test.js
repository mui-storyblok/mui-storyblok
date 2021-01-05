import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Form from './Form';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "Form", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "FormGrid", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'FormGrid',
      content: [{
        _editable: '<!--#storyblok#{"name": "FormGridItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'FormGridItem',
        content: [{
          _editable: '<!--#storyblok#{"name": "MuiCheckbox", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiCheckbox',
          name: 'checkbox',
        }, {
          _editable: '<!--#storyblok#{"name": "MuiInput", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiInput',
          name: 'input',
        }, {
          _editable: '<!--#storyblok#{"name": "MuiSelect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiSelect',
          name: 'select',
          options: ['one', 'two', 'three'],
        }, {
          _editable: '<!--#storyblok#{"name": "MuiRadio", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiRadio',
          name: 'radio',
          value: 'radio1',
        }, {
          _editable: '<!--#storyblok#{"name": "MuiRadio", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
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
  const comp = mount(<Form {...props} />);
  return { comp, props };
}

describe('<Form />', () => {
  it('renders Form', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });


  describe('Fetch Request should set success and error responses based on request correctly', () => {
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
        ReactDOM.render(<Form {...props} />, container);
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
        ReactDOM.render(<Form {...props} />, container);
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
      <Form {...props} />
    ));
    expect(tree).toMatchSnapshot();
  });
});
