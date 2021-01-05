import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiAccordionSummary from './MuiAccordionSummary';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiAccordionSummary", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    component: 'MuiAccordionSummary',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiIcon',
      iconName: 'android',
    }, {
      _editable: '<!--#storyblok#{"name": "MuiAccordionTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiAccordionTypography',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiText',
        text: 'text',
      }],
    }],
    expandIcon: [{
      component: 'MuiIcon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<MuiAccordionSummary {...props} />);
  return { comp, props };
}

describe('<MuiAccordionSummary />', () => {
  it('renders MuiAccordionSummary', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiAccordionSummary {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
