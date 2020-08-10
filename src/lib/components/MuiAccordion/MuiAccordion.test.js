import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiAccordion from './MuiAccordion';

const accordionSummary = component => [{
  component,
  content: [{
    component: 'MuiIcon',
    iconName: 'android',
  }],
  expandIcon: [{
    component: 'MuiIcon',
    iconName: 'android',
  }],
}];

function setup(summaryComp = true, accordionComp = 'MuiAccordionSummary') {
  const props = {
    accordionSummary: summaryComp ? [...accordionSummary(accordionComp)] : undefined,
    accordionDetails: [
      {
        component: 'MuiAccordionDetails',
        content: [
          {
            component: 'MuiAccordionTypography',
            content: [
              {
                component: 'MuiText',
                text: 'text',
              },
            ],
          },
        ],
      },
    ],
  };
  const comp = shallow(<MuiAccordion {...props} />);
  return { comp, props };
}

describe('<MuiAccordion />', () => {
  const originalConsoleError = global.console.error;
  let warningMsg;

  beforeEach(() => {
    global.console.error = (...args) => {
      const propTypeFailures = [/Failed prop type/, /Warning: Recieved/];

      if (propTypeFailures.some(p => p.test(args[0]))) {
        warningMsg = [args[0]];
      }

      originalConsoleError(...args);
    };
  });

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

  it('should give proper warning for propTypes on MuiAccordionSummary if component is not passed down.', () => {
    setup(false);
    const expected = 'Warning: Failed prop type: MuiAccordion: accordionSummary is required to have a length of 1 but recived length of 0\n    in MuiAccordion (at MuiAccordion.test.js:38)';
    expect(warningMsg[0]).toEqual(expected);
  });

  it('should give proper warning for propTypes on MuiAccordionSummary if component is invalid.', () => {
    setup(true, 'invalidComp');
    const expected = 'Warning: Failed prop type: MuiAccordion: accordionSummary is required to have a length of 1 but recived length of 0\n    in MuiAccordion (at MuiAccordion.test.js:38)';
    expect(warningMsg[0]).toEqual(expected);
  });
});
