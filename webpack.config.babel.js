const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'lib': path.join(__dirname, '/src/lib/'),
      'library-name': './library-folder/folder',
    },
  },
};
