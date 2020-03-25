const path = require('path');

module.exports = {
  components: 'src/lib/components/**/[A-Z]*.js',
  /* gets wrapper for styleguides to use in .md files */
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styleguide/Wrapper'),
  },
};
