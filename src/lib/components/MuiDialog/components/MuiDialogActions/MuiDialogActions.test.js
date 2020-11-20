import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiDialogActions from './MuiDialogActions';

function setup() {
  const props = {
    _editable: '<!--#storyblok#{"name": "MuiDialogActions", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
    content: [{
      _editable: '<!--#storyblok#{"name": "MuiButtonRedirect", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
      component: 'MuiButtonRedirect',
      redirectRoute: 'page-welcome',
      button: [{
        _editable: '<!--#storyblok#{"name": "MuiButton", "space": "48408", "uid": "947be9f0-47c3-4315-a95a-550f0c560eb5", "id": "307934"}-->',
        component: 'MuiButton',
        buttonText: 'buttonText',
      }],
    }],
  };
  const comp = shallow(<MuiDialogActions {...props} />);

  return { comp, props };
}

describe('<MuiDialogActions />', () => {
  it('renders MuiDialogActions', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiDialogActions {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
