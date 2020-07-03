#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');
const rimraf = require('rimraf');

const files = fs.readdirSync('node_modules/mui-storyblok/storyblok');
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

const addDirToRoot = (projectRoot, dir) => {
  exec(`cp -R ${projectRoot}/node_modules/mui-storyblok/dist/${dir} ${projectRoot}/${dir}`, (error, stdout, stderr) => {
    if (error) {
      console.warn(error);
    }
    console.log(stdout || stderr);
  });
};

const removeDirFromRoot = (projectRoot, dir) => {
  rimraf(`${projectRoot}/${dir}`, () => {
    console.log(`${projectRoot}/${dir} removed`);
  });
};


const migrateComponents = async (command) => {
  const projectRoot = __dirname.replace('/node_modules/mui-storyblok/cli', '');
  addDirToRoot(projectRoot, 'storyblok');
  await asyncCmd(command);
  removeDirFromRoot(projectRoot, 'storyblok');
};

migrateComponents(cmd);
