import React from 'react';
import style from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GoogleApis from './utils/GoogleApis';
import StoryBlokPage from './components/StoryBlokPage/StoryBlokPage';

const MuiStoryblok = ({
  theme,
  accessToken,
  version,
  googleapisKey,
}) => {
  // set GoogleApis instance to window to use in GeocodeTabs
  if (googleapisKey) window.muistoryblokgoogleapis = new GoogleApis(googleapisKey);

  const muiTheme = style.createMuiTheme(theme);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <style.MuiThemeProvider theme={muiTheme}>
      <StoryBlokPage
        accessToken={accessToken}
        version={version}
      />
    </style.MuiThemeProvider>
  );
};

export default MuiStoryblok;

MuiStoryblok.propTypes = {
  /** theme for mui */
  theme: PropTypes.shape(),
  /** storyblok prop  'published' : 'draft' */
  version: PropTypes.string,

  /** acess key from storyblok you can make them in storyblok settings */
  accessToken: PropTypes.string.isRequired,

  /** key for google apis Key to use geocode if here will make  */
  googleapisKey: PropTypes.string,
};

MuiStoryblok.defaultProps = {
  theme: {},
  version: 'draft',
  googleapisKey: '',
};
