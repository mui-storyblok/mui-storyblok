
// import StoryblokClient from 'storyblok-js-client';
import StoryBlok, { checkForMetaTag, setMetadata } from './Storyblok';

// jest.mock('storyblok-js-client');


describe('StoryBlok', () => {
  it('should check for meta tag', () => {
    const result = '[object HTMLMetaElement]';
    const expected = checkForMetaTag('apples', 'testProperty', 'testName');
    expect(expected.toString()).toEqual(result);
  });

  it('setMetadata', () => {
    const { getElementById, createElement } = document;

    document.getElementById = jest.fn();
    document.createElement = jest.fn(() => ({
      setAttribute: jest.fn(),
    }));

    const res = {
      data: {
        story: {
          content: {
            seo: {
              title: 'title',
              og_image: 'og_image',
              og_title: 'og_title',
              description: 'description',
              twitter_image: 'twitter_image',
              twitter_title: 'twitter_title',
              og_description: 'og_description',
              og_url: 'og_url',
              twitter_description: 'twitter_description',
            },
          },
        },
      },
    };
    setMetadata(res);
    expect(document.getElementById).toBeCalledTimes(8);
    expect(document.createElement).toBeCalledTimes(8);
    document.getElementById = getElementById;
    document.createElement = createElement;
  });

  it.skip('StoryBlok.get', async () => {
    // having a hard time mocking storyblok-js-client
    const client = jest.genMockFromModule('storyblok-js-client');
    client.get = jest.fn(() => ({
      data: {
        story: {
          content: [],
        },
      },
    }));

    await StoryBlok.get('page-welcome', 'wasd123', 'draft');
    expect(client.get).toBeCalled();
    expect(true).toBe(false);
  });
});
