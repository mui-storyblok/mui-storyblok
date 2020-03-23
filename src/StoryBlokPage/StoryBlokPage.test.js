import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import moxios from 'moxios';
import nock from 'nock';
import Storyblok from '../../utils/Storyblok';
import StoryBlokPage from './StoryBlokPage';

jest.mock('../../utils/Storyblok', () => ({
  get: jest.fn(() => [{
    _uid: '3ca44afb-97b7-485d-9923-d94d7fab0b5d',
    headLine: 'StoryBlokPage',
    component: 'StoryBlokCard',
    content: [],
    backgroundColor: 'black',
  }]),
}));

async function setup() {
  const props = {
    location: {
      pathname: 'page-welcome',
    },
  };
  const comp = await shallow(<StoryBlokPage {...props} />);
  return { comp, props };
}

describe('<StoryBlokPage />', () => {
  beforeEach(() => {
    moxios.install();
    nock('/')
      .get('/about')
      .query(() => true)
      .reply(200, 'Ok');
    // https://api.storyblok.com/v1/cdn/stories/about?version=draft&cv=1553226026241&token=ZXffLR9GBcsKH8Z1psRO2wtt
    // https://api.storyblok.com/v1/cdn/stories/about?version=draft&cv=1553228107616&token=ZXffLR9GBcsKH8Z1psRO2wtt
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('renders StoryBlokPage', async () => {
    const { comp } = await setup();
    expect(comp).toBeDefined();
  });

  it('componentDidMount calls Storyblok.get', async () => {
    await setup();
    expect(Storyblok.get).toBeCalled();
  });

  it('componentDidUpdate calls Storyblok.get and setStory', async () => {
    const { comp } = await setup();

    await comp.setProps({
      location: {
        pathname: 'page-about',
      },
    });
    const { state } = await comp.instance();
    expect(state).toEqual({
      loading: false,
      error: '',
      story: Storyblok.get(),
    });
  });

  it('setStory content from storyblok for StoryBlokCard', async () => {
    const { comp } = await setup();

    expect(comp.instance().state).toEqual({
      loading: false,
      error: '',
      story: Storyblok.get(),
    });
    expect(comp.find('StoryBlokCard')).toHaveLength(1);
  });

  it('calls pageNotFound and sets error', async () => {
    const { comp } = await setup();
    comp.instance().pageNotFound();
    await expect(comp.instance().state).toEqual({
      loading: false,
      error: '',
      story: Storyblok.get(),
    });
  });

  it('componentDidMount calls Storyblok.get with error', async () => {
    Storyblok.get = jest.fn(() => {
      throw new Error('noooooo');
    });
    const { comp } = await setup();
    expect(comp.instance().state.error).toEqual('Unable to fetch page content please refresh and try again or check to make sure you are at the right url');
    expect(comp.find('span')).toHaveLength(1);
  });

  it('componentDidUpdate calls Storyblok.get with error', async () => {
    Storyblok.get = jest.fn(() => [{
      _uid: '3ca44afb-97b7-485d-9923-d94d7fab0b5d',
      headLine: 'StoryBlokPage',
      component: 'StoryBlokCard',
      bodyContent: [],
      backgroundColor: 'black',
    }]);

    const { comp } = await setup();

    Storyblok.get = jest.fn(() => {
      throw new Error('noooooo');
    });

    await comp.setProps({
      location: {
        pathname: 'page-about',
      },
    });

    expect(comp.instance().state.error).toEqual('Unable to fetch page content please refresh and try again or check to make sure you are at the right url');
    expect(comp.find('span')).toHaveLength(1);
  });

  test('snapshot', async () => {
    const { props } = await setup();
    const tree = renderer.create((
      <MemoryRouter>
        <StoryBlokPage {...props} />
      </MemoryRouter>
    ));
    expect(tree).toMatchSnapshot();
  });
});
