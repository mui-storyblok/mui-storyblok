import React from 'react';
import { mount } from 'enzyme';
import BlokForm from './BlokForm';


function setup() {
  const props = {
    content: [{
      component: 'FormGrid',
      content: [{
        component: 'FormGridItem',
        content: [{
          component: 'MuiIcon',
          iconName: 'android',
        }],
      }],
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
    // console.log('@@@@@@', comp.find('Component').first().props())
    expect(true).toBe(false)
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
