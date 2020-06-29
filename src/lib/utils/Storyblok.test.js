import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import moxios from 'moxios';
import { StoryBlokPage } from '../components/StoryBlokPage/StoryBlokPage';
import StoryBlock, { checkForMetaTag, setMetadata } from './Storyblok';

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

describe('StoryBlock', () => {
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

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<StoryBlokPage {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should check for meta tag', () => {
    const result = '[object HTMLMetaElement]';
    const expected = checkForMetaTag('apples', 'testProperty', 'testName');
    expect(expected.toString()).toEqual(result);
  });

  it('calls storyblok.get and sets the meta tags', async () => {
    const { comp } = setup();
    StoryBlock.get = jest.fn(() => [
      {
        _uid: '3ca44afb-97b7-485d-9923-d94d7fab0b5d',
        headLine: 'StoryBlokPage',
        component: 'StoryBlokCard',
        bodyContent: [],
        backgroundColor: 'black',
        res: { data: { story: { content: { seo: { title: 'apples' } } } } },
      },
    ]);

    const res = await StoryBlock.get();
    setMetadata(res[0].res);
    await comp.instance().componentDidMount();
    await comp.instance().getPage();
    await comp.instance().setStory(comp.instance().state.story);
    expect(comp.instance().state.loading).toEqual(false);
    expect(comp.instance().state.story).toEqual(res);
    expect(comp.find('div').at(1).children().props().headLine).toEqual('StoryBlokPage');
  });

  it('should handle Error of the Meta data', async () => {
    const { comp } = setup();
    StoryBlock.get = jest.fn(() => {
      throw new Error('noooooo');
    });

    await comp.instance().getPage();
    expect(comp.instance().state.error).toEqual('Unable to fetch page content please refresh and try again or check to make sure you are at the right url');
  });
});
