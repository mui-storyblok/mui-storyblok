// storyblok.config.js
module.exports = {
  backupDirectory: 'backup',
  componentDirectory: 'storyblok',
  dryRun: process.argv.includes('--dry-run'),
  oauthToken: process.env.STORYBLOK_OAUTH_TOKEN,
  spaceId: process.env.STORYBLOK_SPACE_ID,
};
