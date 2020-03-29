import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Storyblok from 'lib/utils/Storyblok';

import MuiIconButtonDownload from './MuiIconButtonDownload';

Storyblok.arrayToMuiStyles = jest.fn(() => ({}));

function setup() {
  const props = {
    href: 'google.com',
    fileName: 'fileName.png',
    icon: [{
      component: 'MuiIcon',
      iconName: 'android',
    }],
  };
  const comp = shallow(<MuiIconButtonDownload {...props} />);
  return { comp, props };
}

describe('<MuiIconButtonDownload />', () => {
  it('renders MuiIconButtonDownload', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MemoryRouter>
        <MuiIconButtonDownload {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});

describe('clicks', () => {
  it('handleClick and call download', () => {
    const { createElement } = document;
    const { createObjectURL } = window.URL;

    document.createElement = jest.fn(() => ({
      href: '',
      setAttribute: jest.fn(),
      click: jest.fn(),
      remove: jest.fn(),
    }));

    const { comp } = setup('contact', true);
    comp.find('WithStyles(ForwardRef(IconButton))').at(0).simulate('click');
    expect(document.createElement).toBeCalled();
    document.createElement = createElement;
    window.URL = createObjectURL;
  });
});
