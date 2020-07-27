import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiAccordion from './MuiAccordion';

function setup() {
  const props = {
    accordionSummary: [{
      component: 'MuiAccordionSummary',
      content: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
      expandIcon: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],

    accordionDetails: [{
      component: 'MuiAccordionDetails',
      content: [{
        component: 'MuiAccordionTypography',
        content: [{
          component: 'MuiText',
          text: 'text',
        }],
      }],
    }],
  };
  const comp = shallow(<MuiAccordion {...props} />);
  return { comp, props };
}

describe('<MuiAccordion />', () => {
  it('renders MuiAccordion', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiAccordion {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should handle change and toggle the expansion panel', () => {
    const { comp } = setup();
    const { expanded } = comp.find('WithStyles(ForwardRef(Accordion))').first().props();
    expect(expanded).toEqual(false);
    comp.find('WithStyles(ForwardRef(Accordion))').first().prop('onChange')();
    expect(comp.find('WithStyles(ForwardRef(Accordion))').first().props().expanded).toEqual(true);
  });
});
