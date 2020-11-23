import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AccordionSummary from './AccordionSummary';

function setup() {
  const props = {
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
  };
  const comp = shallow(<AccordionSummary {...props} />);
  return { comp, props };
}

describe('<AccordionSummary />', () => {
  it('renders AccordionSummary', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<AccordionSummary {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
