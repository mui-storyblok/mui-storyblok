#!/usr/bin/env node

require('dotenv').config();

const { exec } = require('child_process');

const asyncCmd = (command) => {
  console.log(command);
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      console.log(stdout || stderr);
      resolve(stdout || stderr);
    });
  });
};

const migrateNewMuiStoryblok = async () => {
  await asyncCmd('npx migrate-storyblok-components');
  await asyncCmd('npx migrate-storyblok-stories');
};

migrateNewMuiStoryblok();
