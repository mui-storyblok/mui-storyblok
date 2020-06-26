const rimraf = require('rimraf');

const removeDirFromRoot = (projectRoot, dir) => {
  rimraf(`${projectRoot}/${dir}`, () => {
    console.log(`${dir} removed`);
  });
};

module.exports = removeDirFromRoot;
