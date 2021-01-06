#!/usr/bin/env node

require('dotenv').config();

const { exec } = require('child_process');

const asyncCmd = (command) => {
  console.log(command);
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      try {
        console.log(stdout || stderr);
        resolve(stdout || stderr);
      } catch (err) {
        console.warn(error);
        reject(error);
      }
    });
  });
};

const migrateNewMuiStoryblok = async () => {
  await asyncCmd('npx migrate-storyblok-components');
  await asyncCmd('migrate-storyblok-presets');
  await asyncCmd('npx migrate-storyblok-stories');
};

migrateNewMuiStoryblok();
