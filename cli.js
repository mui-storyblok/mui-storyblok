#!/usr/bin/env node

const { exec } = require('child_process');
const fs = require('fs');

const asyncCmd = (cmd) => {
  console.log(cmd);
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error);
      }
      console.log(stdout || stderr);
      resolve(stdout || stderr);
    });
  });
};


let files;
if (process.env.NODE_ENV === 'production') {
  files = fs.readdirSync('node_modules/mui-storyblok/dist/storyblok');
} else {
  files = fs.readdirSync('storyblok');
}

const fileNames = files.map((file) => {
  if (!file.includes('config')) {
    return file.replace('.js', '');
  }
}).filter(x => x != null);

const cmd = `npx storyblok-migrate --component-migrations --components ${fileNames.join()}`;

const migrateComps = async (command) => {
  await asyncCmd(command);
};

migrateComps(cmd);
