import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import IconButtonDownload from './IconButtonDownload';

function setup() {
  const props = {
    href: 'google.com',
    fileName: 'fileName.png',
    iconButton: [{
      component: 'IconButton',
      icon: [{
        component: 'Icon',
        iconName: 'android',
      }],
    }],
  };

  const comp = mount(<IconButtonDownload {...props} />);
  return { comp, props };
}

describe('<IconButtonDownload />', () => {
  it('renders IconButtonDownload', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create(<IconButtonDownload {...props} />);
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
