import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiIconButtonDownload from './MuiIconButtonDownload';

function setup() {
  const props = {
    href: 'google.com',
    fileName: 'fileName.png',
    iconButton: [{
      component: 'MuiIconButton',
      icon: [{
        component: 'MuiIcon',
        iconName: 'android',
      }],
    }],
  };

  const comp = mount(<MuiIconButtonDownload {...props} />);
  return { comp, props };
}

describe('<MuiIconButtonDownload />', () => {
  it('renders MuiIconButtonDownload', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<MuiIconButtonDownload {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('clicks', () => {
  it('handleClick and call download', () => {
    const { comp } = setup();
    const { createElement } = document;
    const { createObjectURL } = window.URL;

    document.createElement = jest.fn(() => ({
      href: '',
      setAttribute: jest.fn(),
      click: jest.fn(),
      remove: jest.fn(),
    }));
    comp.find('WithStyles(ForwardRef(IconButton))').at(0).simulate('click');
    expect(document.createElement).toBeCalled();
    document.createElement = createElement;
    window.URL = createObjectURL;
  });
});
