import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import GridItem from './GridItem';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "GridItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    sizeGrid: jest.fn(),
    components: {
      MuiIcon,
    },
    content: [{
      _editable: '<!--#storyblok#{"name": "Typography", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'Typography',
      content: [{
        _editable: '<!--#storyblok#{"name": "Span", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'Span',
        content: 'text',
      }],
    }],
  };
  const comp = shallow(<GridItem {...props} />);
  return { comp, props };
}

describe('<GridItem />', () => {
  it('renders GridItem', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((<GridItem {...props} />));
    expect(tree).toMatchSnapshot();
  });
});
