const { exec } = require('child_process');

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

module.exports = asyncCmd;
