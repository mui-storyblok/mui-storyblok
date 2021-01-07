import React from 'react';
import PropTypes from 'prop-types';
import { validComponents } from 'lib/utils/customProps';
import Tooltip from 'lib/components/PageGrid/atoms/Tooltip/Tooltip';
import Button from 'lib/components/PageGrid/atoms/Button/Button';

export const ScrollButton = (props) => {
  const onClick = () => {
    const pageHeight = window.innerHeight;
    window.scrollBy({ left: 0, top: pageHeight, behavior: 'smooth' });
  };

  if (props.tooltip.length > 0) {
    return (
      <Tooltip {...props.tooltip[0]}>
        <Button {...props.button[0]} onClick={onClick} />
      </Tooltip>
    );
  }

  return <Button {...props.button[0]} onClick={onClick} />;
};

export default ScrollButton;

ScrollButton.propTypes = {
  /** Tooltip to wrap button in to display help text */
  tooltip(props, propName, componentName) {
    const components = ['Tooltip'];
    return validComponents(props, propName, componentName, components, 1);
  },
  button: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

ScrollButton.defaultProps = {
  tooltip: [],
};
