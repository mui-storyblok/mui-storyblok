#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');

const files = fs.readdirSync('node_modules/mui-storyblok/dist/storyblok');
const fileNames = files.map(file => file.replace('.js', '')).filter(x => x != null).join();
const cmd = `npx storyblok-migrate --component-migrations --components ${fileNames}`;

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
  await asyncCmd(command);
};

migrateComponents(cmd);
