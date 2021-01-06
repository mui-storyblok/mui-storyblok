#!/usr/bin/env node

const StoryblokClient = require('storyblok-js-client');
const fs = require('fs');

const storyblokClient = (accessToken = '', oauthToken = '') => new StoryblokClient({
  accessToken,
  oauthToken,
});

const getPresets = async (client) => {
  try {
    const data = await client.get(`spaces/${process.env.STORYBLOK_SPACE_ID}/presets/`);
    return data.data.presets;
  } catch (err) {
    return err;
  }
};

const exportPresets = async () => {
  const client = storyblokClient(
    process.env.STORYBLOK_ACCESS_TOKEN,
    process.env.STORYBLOK_OAUTH_TOKEN,
  );

  const presets = await getPresets(client);
  const newPresets = presets.map(preset => ({
    component_name: preset.preset.component,
    preset: {
      name: preset.name,
      component_id: undefined,
      preset: preset.preset,
    },
  }));

  const jsonString = JSON.stringify(newPresets);

  fs.writeFile('./storyblok/presets.json', jsonString, (err) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
};

exportPresets();
