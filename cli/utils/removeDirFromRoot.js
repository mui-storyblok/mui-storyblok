const rimraf = require('rimraf');

const removeDirFromRoot = (projectRoot, dir) => {
  rimraf(`${projectRoot}/${dir}`, () => {
    console.log(`${projectRoot} removed`);
  });
};

module.exports = removeDirFromRoot;
