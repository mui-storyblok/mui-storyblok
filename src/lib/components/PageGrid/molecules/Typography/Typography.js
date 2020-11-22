import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Typography as MuiTypography } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import {
  dimensionProp,
  muiStringProp,
} from 'lib/utils/customProps';
import { renderComponentsWithBridg } from 'lib/utils/customComponents';

/* istanbul ignore next */
const Link = lazy(() => import('./components/Link/Link'));
/* istanbul ignore next */
const Span = lazy(() => import('./components/Span/Span'));

const components = {
  Link,
  Span,
};

/**
 * Typography
 */

export const Typography = ({
  align,
  color,
  height,
  width,
  rootClass,
  content,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const defaultStyles = {
    height,
    width,
  };
  const styles = Storyblok.arrayToMuiStyles(rootClass, defaultStyles);
  return (
    <MuiTypography
      className={`${styles.root} ${storyblokClass}`}
      align={align}
      color={color}
      component="div"
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridg(components, component, key)}
        </Suspense>
      ))}
    </MuiTypography>
  );
};

export default Typography;

Typography.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'inherit', 'left', 'center', 'right', 'justify'
   * Set the text-align on the component.
   * */
  align(props, propName, componentName) {
    const validProps = ['inherit', 'left', 'center', 'right', 'justify'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: 'initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color(props, propName, componentName) {
    const validProps = ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /** hight of the Typography element */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /** width of the Typography element */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),
};

Typography.defaultProps = {
  width: '100%',
  height: '100%',
  align: 'inherit',
  color: 'initial',
  rootClass: [],
  content: [],
};
