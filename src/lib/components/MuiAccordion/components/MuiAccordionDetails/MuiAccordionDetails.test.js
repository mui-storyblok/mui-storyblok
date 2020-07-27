import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiAccordionDetails from './MuiAccordionDetails';

function setup() {
  const props = {
    content: [{
      component: 'MuiAccordionTypography',
      content: [{
        component: 'MuiText',
        text: 'text',
      }],
    }],
  };
  const comp = shallow(<MuiAccordionDetails {...props} />);
  return { comp, props };
}

describe('<MuiAccordionDetails />', () => {
  it('renders MuiAccordionDetails', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiAccordionDetails {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
