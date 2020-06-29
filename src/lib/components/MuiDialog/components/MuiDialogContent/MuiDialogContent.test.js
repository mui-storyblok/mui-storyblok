import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiDialogContent from './MuiDialogContent';

function setup() {
  const props = {
    content: [{
      component: 'MuiDialogContentTypography',
      content: [{
        component: 'MuiText',
        text: 'text',
      }],
    }],
  };
  const comp = shallow(<MuiDialogContent {...props} />);

  return { comp, props };
}

describe('<MuiDialogContent />', () => {
  it('renders MuiDialogContent', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<MuiDialogContent {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
