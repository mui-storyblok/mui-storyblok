import React from 'react';
import PropTypes from 'prop-types';
import StoryBlokPage from '../StoryBlokPage/StoryBlokPage';
import { pushToCustomIcons } from '../../utils/customIcons';
import { pushToCustomComponents } from '../../utils/customComponents';
import { setCustomLoader } from '../../utils/customLoader';

export const MuiStoryblok = ({
  theme,
  accessToken,
  version,
  useObjectTheme,
  iconArray,
  customComponents,
  customLoader,
  dynamicSlug,
  staticSlug,
}) => {
  // If a custom loader is passed down push into customLoader variable
  if (customLoader) setCustomLoader(customLoader);
  pushToCustomIcons(iconArray);
  pushToCustomComponents(customComponents);

  return (
    <StoryBlokPage
      useObjectTheme={useObjectTheme}
      theme={theme}
      accessToken={accessToken}
      version={version}
      dynamicSlug={dynamicSlug}
      staticSlug={staticSlug}
    />
  );
};

export default MuiStoryblok;

MuiStoryblok.propTypes = {
  staticSlug: PropTypes.string,
  dynamicSlug: PropTypes.string,

  /** theme for mui */
  theme: PropTypes.shape(),
  /** storyblok prop  'published' : 'draft' */
  version: PropTypes.string,
  /** access key from storyblok you can make them in storyblok settings */
  accessToken: PropTypes.string.isRequired,
  /** Custom App Loader for storyblok */
  customLoader: PropTypes.element,
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
    })
  ),
  /**
   * Important you can add and use customComponets to any sotyblok componet that uses content prop
   * ex [{ componentName: 'MyCoolComp', Component: MyCoolComp, props: {} }]
   */
  customComponents: PropTypes.arrayOf(
    PropTypes.shape({
      componentName: PropTypes.string.isRequired,
      Component: PropTypes.func.isRequired,
      props: PropTypes.shape({}).isRequired,
    })
  ),
};

MuiStoryblok.defaultProps = {
  theme: {},
  version: 'draft',
  useObjectTheme: false,
  iconArray: [],
  customComponents: [],
  customLoader: undefined,
  dynamicSlug: 'page-welcome',
  staticSlug: '',
};
