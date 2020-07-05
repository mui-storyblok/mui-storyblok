import React from 'react';
import PropTypes from 'prop-types';
import GoogleApis from '../../utils/GoogleApis';
import StoryBlokPage from '../StoryBlokPage/StoryBlokPage';
import customIcons from '../../utils/customIcons';
import { pushToCustomComponets } from '../../utils/customComponents';

export const MuiStoryblok = ({
  theme,
  accessToken,
  version,
  googleapisKey,
  useObjectTheme,
  iconArray,
  customComponents,
}) => {
  // set GoogleApis instance to window to use in GeocodeTabs
  if (googleapisKey) window.muistoryblokgoogleapis = new GoogleApis(googleapisKey);
  // if iconArray is passed down push into customIcons array
  if (iconArray.length > 0) iconArray.forEach(icon => customIcons.push(icon));
  pushToCustomComponets(customComponents);

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
  /**
   * pass an array of icons to render custom icons in MuiIcon componet
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
  /**
   * ex [{ componentName: 'MyCoolComp', Component: MyCoolComp, props: {} }]
   */
  customComponents: PropTypes.arrayOf(
    PropTypes.shape({
      componentName: PropTypes.string.isRequired,
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
  customComponents: [],
};
