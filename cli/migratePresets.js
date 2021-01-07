#!/usr/bin/env node
const StoryblokClient = require('storyblok-js-client');
const presets = require('../storyblok/presets.json');

const storyblokClient = (accessToken = '', oauthToken = '') => new StoryblokClient({
  accessToken,
  oauthToken,
});

const createPresets = async (client, sets) => {
  for (let index = 0; index < sets.length; index++) {
    const preset = sets[index];
    try {
      await client.post(`spaces/${process.env.STORYBLOK_SPACE_ID}/presets/`, { preset });
    } catch (e) {
      console.log('error', e.response.data);
    }
  }
};

const updateComponetDefaulPreset = async (client) => {
  const updatedComponents = await client.get(`spaces/${process.env.STORYBLOK_SPACE_ID}/components`);

  for (let index = 0; index < updatedComponents.data.components.length; index++) {
    const comp = updatedComponents.data.components[index];
    try {
      const defaultPreset = comp.all_presets.find(preset => preset.name.toLowerCase() === 'basic');
      if (defaultPreset) {
        const component = {
          ...comp,
          preset_id: defaultPreset.id,
        };
        await client.put(`spaces/${process.env.STORYBLOK_SPACE_ID}/components/${comp.id}`, { component });
      }
    } catch (e) {
      console.log('error', e.response.data);
    }
  }
};

const getPresetsComponetId = async (client) => {
  const components = await client.get(`spaces/${process.env.STORYBLOK_SPACE_ID}/components`);

  return presets.map((preset) => {
    const hasComp = components.data.components.find(comp => comp.name === preset.component_name);
    if (hasComp) {
      return {
        ...preset.preset,
        component_id: hasComp.id,
      };
    }
    return undefined;
  }).filter(element => element !== undefined);
};

const migratePresets = async () => {
  const client = storyblokClient(
    process.env.STORYBLOK_ACCESS_TOKEN,
    process.env.STORYBLOK_OAUTH_TOKEN,
  );

  const sets = await getPresetsComponetId(client);
  await createPresets(client, sets);
  await updateComponetDefaulPreset(client);

  console.log('presets added to components');
};

migratePresets();
