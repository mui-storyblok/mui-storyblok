#!/usr/bin/env node

require('dotenv').config();

const { exec } = require('child_process');

const cmd = `storyblok push-components ./storyblok/components.json --space ${process.env.STORYBLOK_SPACE_ID}`;

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

const migrateComponents = async (command) => {
  process.chdir('./node_modules/mui-storyblok/dist');
  await asyncCmd(command);
};

migrateComponents(cmd);
