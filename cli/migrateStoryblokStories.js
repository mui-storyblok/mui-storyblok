#!/usr/bin/env node

const fs = require('fs');
const addDirToRoot = require('./utils/addDirToRoot');
const asyncCmd = require('./utils/asyncCmd');
const removeDirFromRoot = require('./utils/removeDirFromRoot');

const files = fs.readdirSync('node_modules/mui-storyblok/dist/backup');
const cmd = `npx storyblok-backup-restore backup/${files[0]}`;

const migrateStories = async (command) => {
  const projectRoot = __dirname.replace('/node_modules/mui-storyblok', '');
  addDirToRoot(projectRoot, 'backup');
  asyncCmd(command);
  removeDirFromRoot(projectRoot, 'backup');
};

migrateStories(cmd);
