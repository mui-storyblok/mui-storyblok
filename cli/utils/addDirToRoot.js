const { exec } = require('child_process');

const addToDirRoot = (projectRoot, dir) => {
  exec(`cp -R ${projectRoot}/node_modules/mui-storyblok/dist/${dir} ${projectRoot}/${dir}`, (error, stdout, stderr) => {
    if (error) {
      console.warn(error);
    }
    console.log(stdout || stderr);
  });
};

module.exports = addToDirRoot;
