import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Storyblok from '../../utils/Storyblok';
import MuiButtonDownload from './MuiButtonDownload';

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
  const comp = mount(<MuiButtonDownload {...props} />);
  return { comp, props };
}

describe('<MuiButtonDownload />', () => {
  it('renders MuiButtonDownload', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <MuiButtonDownload {...props} />
      </MemoryRouter>
    ));
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
