import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Storyblok from 'lib/utils/Storyblok';
import ButtonDownload from './ButtonDownload';

Storyblok.arrayToMuiStyles = jest.fn(() => ({}));

function setup() {
  const props = {
    button: [{
      component: 'MuiButton',
      buttonText: 'buttonText',
    }],
    href: 'google.com',
    fileName: 'fileName.png',
  };
  const comp = mount(<ButtonDownload {...props} />);
  return { comp, props };
}

describe('<ButtonDownload />', () => {
  it('renders ButtonDownload', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<ButtonDownload {...props} />);
    expect(tree).toMatchSnapshot();
  });
});

describe('clicks', () => {
  it('handleClick and call download', () => {
    const { createElement } = document;
    const { createObjectURL } = window.URL;
    const { comp } = setup();
    document.createElement = jest.fn(() => ({
      href: '',
      setAttribute: jest.fn(),
      click: jest.fn(),
      remove: jest.fn(),
    }));
    comp.find('WithStyles(ForwardRef(Button))').at(0).simulate('click');
    expect(document.createElement).toBeCalled();
    document.createElement = createElement;
    window.URL = createObjectURL;
  });
});
