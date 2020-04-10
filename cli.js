#!/usr/bin/env node

const { exec } = require('child_process');
const fs = require('fs');

const files = fs.readdirSync('node_modules/mui-storyblok/dist/storyblok');
const fileNames = files.map((file) => {
  if (!file.includes('config')) {
    return file.replace('.js', '');
  }
});

const cmd = `npx storyblok-migrate --component-migrations --components ${fileNames.join()}`;
exec(cmd);
