import React from 'react';
import PropTypes from 'prop-types';
import GoogleApis from '../../utils/GoogleApis';
import StoryBlokPage from '../StoryBlokPage/StoryBlokPage';

export const MuiStoryblok = ({
  theme,
  accessToken,
  version,
  googleapisKey,
  useObjectTheme,
}) => {
  // set GoogleApis instance to window to use in GeocodeTabs
  if (googleapisKey) window.muistoryblokgoogleapis = new GoogleApis(googleapisKey);

  return (
    <StoryBlokPage
      useObjectTheme={useObjectTheme}
      theme={theme}
      accessToken={accessToken}
      version={version}
    />
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
  /**
   * override url theme to edit in mui-theme tool
   */
  useObjectTheme: PropTypes.bool,
};

MuiStoryblok.defaultProps = {
  theme: {},
  version: 'draft',
  googleapisKey: '',
  useObjectTheme: false,
};
