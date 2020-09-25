#!/usr/bin/env node

const StoryblokClient = require('storyblok-js-client');

const storyblokClient = (accessToken = '', oauthToken = '') => new StoryblokClient({
  accessToken,
  oauthToken,
});

const getStory = async (page, client) => {
  try {
    const data = await client.get(`cdn/stories/${page}`, { version: 'published' });
    return data.data.story;
  } catch (err) {
    return err;
  }
};

const addStoryToSpace = async (story, client) => {
  try {
    const res = await client.post(`spaces/${process.env.REACT_APP_STORYBLOK_SPACE_ID}/stories/`, { story });
    return res;
  } catch (err) {
    return err;
  }
};

const getStories = async () => {
  const clientDemo = storyblokClient('EDQtN1xyCm9DI8WMbOBr0gtt');
  try {
    return [
      await getStory('page-demo', clientDemo),
      await getStory('page-welcome', clientDemo),
      await getStory('page-not-found', clientDemo),
    ];
  } catch (err) {
    return err;
  }
};

const addStories = async (pageDemo, pageWelcome, pageNotFound) => {
  try {
    const client = storyblokClient('', process.env.REACT_APP_STORYBLOK_OAUTH_TOKEN);
    return [
      await addStoryToSpace(pageDemo, client),
      await addStoryToSpace(pageWelcome, client),
      await addStoryToSpace(pageNotFound, client),
    ];
  } catch (err) {
    return err;
  }
};

const migrateStories = async () => {
  const stories = await getStories();
  await addStories(stories[0], stories[1], stories[2]);
};

migrateStories();
