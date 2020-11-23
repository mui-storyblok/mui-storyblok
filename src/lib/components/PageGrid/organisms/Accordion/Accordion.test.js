import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';

const accordionSummary = component => [{
  _editable: '<!--#storyblok#{"name": "AccordionSummary", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
  component: 'AccordionSummary',
  expandIcon: [{
    _editable: '<!--#storyblok#{"name": "Icon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    component: 'Icon',
    iconName: 'android',
  }],
  content: [{
    _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    component: 'Typography',
    content: [{
      _editable: '<!--#storyblok#{"name": "Span", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Span',
      content: 'Span',
    }],
  }],
}];

function setup(summaryComp = true, accordionComp = 'AccordionSummary') {
  const props = {
    _editable: '<!--#storyblok#{"name": "Accordion", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    accordionSummary: summaryComp ? [...accordionSummary(accordionComp)] : undefined,
    accordionDetails: [
      {
        _editable: '<!--#storyblok#{"name": "AccordionDetails", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'AccordionDetails',
        content: [
          {
            _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'Typography',
            content: [
              {
                _editable: '<!--#storyblok#{"name": "Span", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
                component: 'Span',
                content: 'text',
              },
            ],
          },
        ],
      },
    ],
  };
  const comp = shallow(<Accordion {...props} />);
  return { comp, props };
}

describe('<Accordion />', () => {
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

  it('renders Accordion', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<Accordion {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should handle change and toggle the expansion panel', () => {
    const { comp } = setup();
    const { expanded } = comp.find('WithStyles(ForwardRef(Accordion))').first().props();
    expect(expanded).toEqual(false);
    comp.find('WithStyles(ForwardRef(Accordion))').first().prop('onChange')();
    expect(comp.find('WithStyles(ForwardRef(Accordion))').first().props().expanded).toEqual(true);
  });

  it.skip('should give proper warning for propTypes on AccordionSummary if component is not passed down.', () => {
    setup(false);
    const expected = 'Warning: Failed prop type: Accordion: accordionSummary is required to have a length of 1 but recived length of 0\n    in Accordion (at Accordion.test.js:38)';
    expect(warningMsg[0]).toEqual(expected);
  });

  it.skip('should give proper warning for propTypes on AccordionSummary if component is invalid.', () => {
    setup(true, 'invalidComp');
    const expected = 'Warning: Failed prop type: Accordion: accordionSummary is required to have a length of 1 but recived length of 0\n    in Accordion (at Accordion.test.js:38)';
    expect(warningMsg[0]).toEqual(expected);
  });
});
