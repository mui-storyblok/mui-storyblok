import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiAccordionDetails from './MuiAccordionDetails';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiAccordionDetails", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiAccordionTypography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiAccordionTypography',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiText", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
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
