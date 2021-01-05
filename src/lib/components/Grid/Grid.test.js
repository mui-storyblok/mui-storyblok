import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Grid from './Grid';
import MuiIcon from '../MuiIcon/MuiIcon';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "Grid", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    components: {
      MuiIcon,
    },
    content: [{
      _editable: '<!--#storyblok#{"name": "GridItem", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'GridItem',
      content: [{
        _editable: '<!--#storyblok#{"name": "MuiIcon", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],
  };
  const comp = shallow(<Grid {...props} />);
  return { comp, props };
}

describe('<Grid />', () => {
  it('renders Grid', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<Grid {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
