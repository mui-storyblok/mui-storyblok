import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiCardContent from './MuiCardContent';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiCardContent", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiTypography',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiText',
        text: 'text',
      }],
    }, {
      _editable: '<!--#storyblok#{"name": "MuiAccordion", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiAccordion',
      accordionSummary: [{
        _editable: '<!--#storyblok#{"name": "MuiAccordionSummary", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiAccordionSummary',
        content: [{
          _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiIcon',
          iconName: 'android',
        }],
        expandIcon: [{
          _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiIcon',
          iconName: 'android',
        }],
      }],
      accordionDetails: [{
        _editable: '<!--#storyblok#{"name": "MuiAccordionDetails", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiAccordionDetails',
        content: [{
          _editable: '<!--#storyblok#{"name": "MuiAccordionTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
          component: 'MuiAccordionTypography',
          content: [{
            _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
            component: 'MuiText',
            text: 'text',
          }],
        }],
      }],
    }],
  };
  const comp = shallow(<MuiCardContent {...props} />);
  return { comp, props };
}

describe('<MuiCardContent />', () => {
  it('renders MuiCardContent', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiCardContent {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
