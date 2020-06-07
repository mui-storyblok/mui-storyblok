import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import moxios from 'moxios';
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
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('renders BlokForm', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('submits', () => {
    it('clicks submit set successResponseText', async () => {
      moxios.stubRequest('woo.com', {
        status: 200,
        response: {
          data: {},
        },
      });

      const { comp } = setup();

      act(async () => {
        await comp
          .find('form')
          .first()
          .simulate('submit');
      });


      // console.log(comp.debug());
      const successResponse = comp.find('[data-testid="successResponse"]');
      console.log(successResponse);

      expect(successResponse.count).toEqual(1);
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
