import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Storyblok from '../../utils/Storyblok';

/**
 * TypographyText is used in storyblok redirect to react routes
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
              {` ${item.text} `}
            </Typography>
          );
        }
        return createElement(components[item.component], Object.assign(item, { key: index }));
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
   * mui prop: 'inherit' | 'left' | 'center' | 'right' | 'justify'
   * Set the text-align on the component.
   * */
  align: PropTypes.string,
  /**
   * mui prop: 'initial'| 'inherit'| 'primary'| 'secondary'| 'textPrimary'| 'textSecondary'| 'error'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /** hight of the Typography element */
  height: PropTypes.string,
  /** width of the Typography element */
  width: PropTypes.string,

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** componets to render in Typography */
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

TypographyText.defaultProps = {
  width: '100%',
  height: '100%',
  align: 'inherit',
  color: 'initial',
  rootClass: [],
};
