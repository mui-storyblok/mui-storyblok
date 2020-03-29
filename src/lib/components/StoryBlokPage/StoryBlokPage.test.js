import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import moxios from 'moxios';
import Storyblok from 'lib/utils/Storyblok';
import { StoryBlokPage } from './StoryBlokPage';

function setup() {
  const props = {
    accessToken: 'accessToken',
    version: 'draft',
    location: {
      pathname: 'page-welcome',
    },
  };
  const comp = shallow(<StoryBlokPage {...props} />);
  return { comp, props };
}

describe('<StoryBlokPage />', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('renders', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  describe('lifecycle', () => {
    it('componentDidMount calls setStory', async () => {
      const { comp } = setup();
      Storyblok.get = jest.fn(() => 'value');
      await comp.instance().componentDidMount();
      expect(comp.instance().state.story).toEqual('value');
      expect(document.body.scrollTop).toEqual(0);
      expect(document.documentElement.scrollTop).toEqual(0);
    });

    it('componentDidMount calls pageNotFound set page-not-found', async () => {
      const { comp } = setup();
      Storyblok.get = jest.fn(() => {
        throw new Error('woooo');
      });
      await comp.instance().componentDidMount();
      expect(Storyblok.get).toBeCalled();
      Storyblok.get = jest.fn(() => 'value');
      expect(document.body.scrollTop).toEqual(0);
      expect(document.documentElement.scrollTop).toEqual(0);
      expect(comp.instance().state.story).toEqual('value');
    });

    it('componentDidMount error state', async () => {
      const { comp } = setup();
      Storyblok.get = jest.fn(() => {
        throw new Error('woooo');
      });
      await comp.instance().componentDidMount();

      expect(document.body.scrollTop).toEqual(0);
      expect(document.documentElement.scrollTop).toEqual(0);
      expect(comp.instance().state.error).toEqual('Unable to fetch page content please refresh and try again or check to make sure you are at the right url');
    });
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <MemoryRouter>
        <StoryBlokPage {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
