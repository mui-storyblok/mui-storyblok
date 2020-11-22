import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import customIcons from 'lib/utils/customIcons';
import Storyblok from 'lib/utils/Storyblok';
import { muiStringProp } from 'lib/utils/customProps';

// import styles for icons in styleguide
import 'lib/styles/styles.scss';

/* istanbul ignore next */
const MuiIcon = lazy(() => import('@material-ui/core/Icon'));
/* istanbul ignore next */
const BBBSvg = lazy(() => import('./components/BBBSvg/BBBSvg'));
/* istanbul ignore next */
const FacebookSvg = lazy(() => import('./components/FacebookSvg/FacebookSvg'));
/* istanbul ignore next */
const GoogleSvg = lazy(() => import('./components/GoogleSvg/GoogleSvg'));
/* istanbul ignore next */
const LinkedinSvg = lazy(() => import('./components/LinkedinSvg/LinkedinSvg'));
/* istanbul ignore next */
const YouTubeSvg = lazy(() => import('./components/YouTubeSvg/YouTubeSvg'));
/* istanbul ignore next */
const InstagramSvg = lazy(() => import('./components/InstagramSvg/InstagramSvg'));
/* istanbul ignore next */
const TwitterSvg = lazy(() => import('./components/TwitterSvg/TwitterSvg'));
/* istanbul ignore next */
const YelpSvg = lazy(() => import('./components/YelpSvg/YelpSvg'));
/* istanbul ignore next */
const GithubSvg = lazy(() => import('./components/GithubSvg/GithubSvg'));


// import icons to use for custom icons passed down to app;

export const Icon = ({
  color,
  fontSize,
  iconName,
  rootClass,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {

  const Sus = props => (
    <Suspense fallback={<></>}>
      <props.Comp
        {...props}
        data-blok-c={dataBlokC}
        data-blok-uid={dataBlokUid}
      />
    </Suspense>
  );
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const customIcon = customIcons.find(icon => icon.iconName === iconName);
  if (customIcon) {
    const Custom = customIcon.Component;
    return (
      <Custom
        className={`${styles.root} ${storyblokClass}`}
        color={color}
        fontSize={fontSize}
        data-blok-c={dataBlokC}
        data-blok-uid={dataBlokUid}
        {...customIcon.props}
      />
    );
  }

  switch (iconName) {
    case 'facebook':
      return <Sus Comp={FacebookSvg} color={color} fontSize={fontSize} className={`${styles.root} ${storyblokClass}`} />;
    case 'bbb':
      return <Sus Comp={BBBSvg} color={color} fontSize={fontSize} className={`${styles.root} ${storyblokClass}`} />;
    case 'linkedin':
      return <Sus Comp={LinkedinSvg} color={color} fontSize={fontSize} className={`${styles.root} ${storyblokClass}`} />;
    case 'google':
      return <Sus Comp={GoogleSvg} color={color} fontSize={fontSize} className={`${styles.root} ${storyblokClass}`} />;
    case 'youtube':
      return <Sus Comp={YouTubeSvg} color={color} fontSize={fontSize} className={`${styles.root} ${storyblokClass}`} />;
    case 'instagram':
      return <Sus Comp={InstagramSvg} color={color} fontSize={fontSize} className={`${styles.root} ${storyblokClass}`} />;
    case 'twitter':
      return <Sus Comp={TwitterSvg} color={color} fontSize={fontSize} className={`${styles.root} ${storyblokClass}`} />;
    case 'yelp':
      return <Sus Comp={YelpSvg} color={color} fontSize={fontSize} className={`${styles.root} ${storyblokClass}`} />;
    case 'github':
      return <Sus Comp={GithubSvg} color={color} fontSize={fontSize} className={`${styles.root} ${storyblokClass}`} />;
    default:
      return (
        <Suspense fallback={<></>}>
          <MuiIcon
            color={color}
            fontSize={fontSize}
            className={`${styles.root} ${storyblokClass}`}
            data-blok-c={dataBlokC}
            data-blok-uid={dataBlokUid}
          >
            {iconName}
          </MuiIcon>
        </Suspense>
      );
  }
};

export default Icon;

Icon.propTypes = {
  /** any icon from https://material.io/resources/icons/?style=baseline */
  iconName: PropTypes.string.isRequired,
  /**
   * mui prop: 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color(props, propName, componentName) {
    const validProp = ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop: 'default', 'small', 'inherit', 'large'
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * */
  fontSize(props, propName, componentName) {
    const validProp = ['default', 'small', 'inherit', 'large'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * storyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

Icon.defaultProps = {
  rootClass: [],
  color: 'secondary',
  fontSize: 'default',
};
