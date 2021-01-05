import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DialogActions from './DialogActions';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "DialogActions", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "ButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'ButtonRedirect',
      href: 'google.com',
      button: [{
        _editable: '<!--#storyblok#{"name": "Button", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'Button',
        buttonText: 'buttonText',
        onClick: jest.fn(),
      }],
    }],
  };
  const comp = shallow(<DialogActions {...props} />);
  return { comp, props };
}

describe('<DialogActions />', () => {
  it('renders DialogActions', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test.skip('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<DialogActions {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
