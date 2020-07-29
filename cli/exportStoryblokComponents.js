#!/usr/bin/env node

require('dotenv').config();
const { exec } = require('child_process');

const cmd = `storyblok pull-components --space ${process.env.STORYBLOK_SPACE_ID}`;
const moveStoryblokComponents = `mv ./components.${process.env.STORYBLOK_SPACE_ID}.json ./storyblok/components.json `;

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

const migrateComponents = async (command) => {
  await asyncCmd(command);
  await asyncCmd(moveStoryblokComponents);
};

migrateComponents(cmd);
