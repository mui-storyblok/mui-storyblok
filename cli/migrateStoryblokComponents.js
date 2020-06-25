#!/usr/bin/env node

const fs = require('fs');

const addDirToRoot = require('./utils/addDirToRoot');
const asyncCmd = require('./utils/asyncCmd');
const removeDirFromRoot = require('./utils/removeDirFromRoot');

const files = fs.readdirSync('node_modules/mui-storyblok/dist/storyblok');
const fileNames = files.map(file => file.replace('.js', '')).filter(x => x != null).join();
const cmd = `npx storyblok-migrate --component-migrations --components ${fileNames}`;

const migrateComponents = async (command) => {
  const projectRoot = __dirname.replace('/node_modules/mui-storyblok', '');
  addDirToRoot(projectRoot, 'storyblok');
  asyncCmd(command);
  removeDirFromRoot(projectRoot, 'storyblok');
};

migrateComponents(cmd);
