import React from 'react';
import PropTypes from 'prop-types';
import GoogleApis from '../../utils/GoogleApis';
import StoryBlokPage from '../StoryBlokPage/StoryBlokPage';
import customIcons from '../../utils/customIcons';
import { loader } from '../../utils/customLoader';

export const MuiStoryblok = ({
  theme,
  accessToken,
  version,
  googleapisKey,
  useObjectTheme,
  iconArray,
  customLoader,
}) => {
  // set GoogleApis instance to window to use in GeocodeTabs
  if (googleapisKey) window.muistoryblokgoogleapis = new GoogleApis(googleapisKey);
  // if iconArray is passed down push into customIcons array
  if (iconArray.length > 0) iconArray.forEach(icon => customIcons.push(icon));

  const svgLoader = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>

  return (
    <StoryBlokPage
      useObjectTheme={useObjectTheme}
      theme={theme}
      accessToken={accessToken}
      version={version}
      customLoader={loader(customLoader)}
    />
  );
};

export default MuiStoryblok;

MuiStoryblok.propTypes = {
  /** theme for mui */
  theme: PropTypes.shape(),
  /** storyblok prop  'published' : 'draft' */
  version: PropTypes.string,
  /** access key from storyblok you can make them in storyblok settings */
  accessToken: PropTypes.string.isRequired,
  /** key for google apis Key to use geocode if here will make  */
  googleapisKey: PropTypes.string,
  /** Custom App Loader for storyblok */
  customLoader: PropTypes.node,
  /**
   * override url theme to edit in mui-theme tool
   */
  useObjectTheme: PropTypes.bool,
  /**
   * pass an array of icons to render custom icons in MuiIcon component
   * ex :
   *  [{
      iconName: 'cool_thing',
      Component: MyCoolIcon,
      props: {viewBox: '0 0 267.34 369.6' },
   * }]
   */
  iconArray: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      Component: PropTypes.element.isRequired,
      props: PropTypes.shape({}).isRequired,
    }),
  ),
};

MuiStoryblok.defaultProps = {
  theme: {},
  version: 'draft',
  googleapisKey: '',
  useObjectTheme: false,
  iconArray: [],
  customLoader: undefined,
};
