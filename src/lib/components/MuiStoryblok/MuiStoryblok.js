import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BrowserRouter, withRouter } from 'react-router-dom';
import GoogleApis from '../../utils/GoogleApis';
import StoryBlokPage from '../StoryBlokPage/StoryBlokPage';

export const MuiStoryblok = ({
  theme,
  accessToken,
  version,
  googleapisKey,
  location,
}) => {
  // set GoogleApis instance to window to use in GeocodeTabs
  if (googleapisKey) window.muistoryblokgoogleapis = new GoogleApis(googleapisKey);

  const muiTheme = createMuiTheme(theme);
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <MuiThemeProvider theme={muiTheme}>
      <StoryBlokPage
        location={location}
        accessToken={accessToken}
        version={version}
      />
    </MuiThemeProvider>
  );
};

export default withRouter(MuiStoryblok);

MuiStoryblok.propTypes = {
  /** theme for mui */
  theme: PropTypes.shape(),
  /** storyblok prop  'published' : 'draft' */
  version: PropTypes.string,

  /** acess key from storyblok you can make them in storyblok settings */
  accessToken: PropTypes.string.isRequired,

  /** key for google apis Key to use geocode if here will make  */
  googleapisKey: PropTypes.string,

  location: PropTypes.shape().isRequired,
};

MuiStoryblok.defaultProps = {
  theme: {},
  version: 'draft',
  googleapisKey: '',
};
