import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Storyblok from '../../utils/Storyblok';
import {
  dimensionProp,
  muiStringProp,
} from '../../utils/customProps';
import { renderComponents } from '../../utils/customComponents';

/**
 * TypographyText
 */

export const TypographyText = ({
  align,
  color,
  height,
  width,
  rootClass,
  content,
  components,
}) => {
  const defaultStyles = {
    height,
    width,
  };
  const styles = Storyblok.arrayToMuiStyles(rootClass, defaultStyles);
  return (
    <Typography
      className={styles.root}
      align={align}
      color={color}
      component="div"
    >
      {content.map((item, index) => {
        if (item.component === 'MuiText') {
          const style = Storyblok.arrayToMuiStyles(item.rootClass);
          return (
            <Typography
              component="span"
              key={index}
              className={style.root}
              variant={item.variant}
              align={item.align}
              color={item.color}
            >
              {` ${item.content} `}
            </Typography>
          );
        }
        return renderComponents(components, item, index);
      })}
    </Typography>
  );
};

export default TypographyText;

TypographyText.propTypes = {
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

  /** components to render in Typography */
  components: PropTypes.shape().isRequired,
};

TypographyText.defaultProps = {
  width: '100%',
  height: '100%',
  align: 'inherit',
  color: 'initial',
  rootClass: [],
  content: [],
};
