import React from 'react';
import { mount } from 'enzyme';
// import { MemoryRouter } from 'react-router-dom';
// import renderer from 'react-test-renderer';
import BlokForm from './BlokForm';


function setup() {
  const props = {

    content: [{
      alignContent: 'stretch',
      alignItems: 'center',
      component: 'FormGrid',
      content: [{
        alignContent: 'stretch',
        alignItems: 'center',
        component: 'FormGridItem',
        content: [{
          autoFocus: false,
          color: 'primary',
          component: 'MuiInput',
          disabled: false,
          fullWidth: false,
          helperText: '',
          label: 'wasd',
          margin: 'normal',
          multiline: false,
          name: 'wasd',
          placeholder: '',
          rows: '',
          rowsMax: '',
          size: 'medium',
          type: 'text',
          variant: 'standard',
        }],
        direction: 'row',
        justify: 'center',
        lg: 'false',
        md: 'false',
        rootClass: [],
        sm: 'false',
        spacing: '2',
        wrap: 'wrap',
        xl: 'false',
        xs: 'false',
      }],
      direction: 'row',
      justify: 'center',
      spacing: '2',
      wrap: 'wrap',
    }],


    submitButton: [{
      buttonText: 'submit',
    }],
    baseUrl: 'woo.com',
    successResponseText: 'good',
    errorResponseText: 'bad',


  };
  const comp = mount(<BlokForm {...props} />);
  return { comp, props };
}

describe('<BlokForm />', () => {
  it('renders BlokForm', () => {
    const { comp } = setup();
    console.log(comp.debug());
    expect(comp).toBeDefined();
  });


//   it('clicks submit', () => {
//     const { comp } = setup();
//     console.log(comp.debug());
//     const submit = comp
//         .find('Component')
//         .first().props();
//     console.log(submit);
//     expect(true).toBe(false);
//   });

// TODO: snap thwoing Element type is invalid with rff-wrapper Form?
//   test('snapshot', () => {
//     const { props } = setup();
//     const tree = renderer.create((
//       <MemoryRouter>
//         <BlokForm {...props} />
//       </MemoryRouter>
//     ));
//     expect(tree).toMatchSnapshot();
//   });
});
