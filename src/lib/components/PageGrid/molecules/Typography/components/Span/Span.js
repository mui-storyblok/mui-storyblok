import React from 'react';
import PropTypes from 'prop-types';
import { Typography as MuiTypography } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import {
  dimensionProp,
  muiStringProp,
} from 'lib/utils/customProps';
import { useInView } from 'react-intersection-observer';

/**
 * Typography
 */


export const Span = ({
  align,
  color,
  height,
  width,
  rootClass,
  content,
  variant,
  key,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
  transitionClass,
}) => {
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true });
  const defaultStyles = {
    height,
    width,
  };
  const styles = Storyblok.arrayToMuiStyles(rootClass, defaultStyles);

  return (
    <MuiTypography
      component="span"
      key={key}
      className={`${styles.root} ${storyblokClass} ${inView && transitionClass}`}
      variant={variant}
      align={align}
      color={color}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
      inView={inView}
      ref={ref}
      style={{ opacity: inView ? 1 : 0 }}
    >
      {` ${content} `}
    </MuiTypography>
  );
};

export default Span;

Span.propTypes = {
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
  /** Applies the theme typography styles */
  variant(props, propName, componentName) {
    const validProps = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'caption',
      'button',
      'overline',
      'srOnly',
      'inherit',
    ];
    return muiStringProp(props, propName, componentName, validProps);
  },

  /** Index being passed down from parent component */
  key: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  transitionClass: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

Span.defaultProps = {
  width: '100%',
  height: '100%',
  align: 'inherit',
  color: 'initial',
  rootClass: [],
  transitionClass: '',
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
  variant: 'body1',
};
