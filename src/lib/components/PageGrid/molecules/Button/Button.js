import React from 'react';
import {
  validComponents,
} from 'lib/utils/customProps';
import Tooltip from '../../atoms/Tooltip/Tooltip';
import Button from './components/Button/Button';
/**
   * MuiButton controls Dialog open state from true to false.
   * More docs and demos at https://material-ui.com/api/button/
   */

export const MuiButton = (props) => {
  if (props.tooltip.length > 0) {
    return (
      <Tooltip {...props.tooltip[0]}>
        <Button {...props} />
      </Tooltip>
    );
  }

  return <Button {...props} />;
};

export default MuiButton;

MuiButton.propTypes = {
  /** Tooltip to wrap button in to display help text */
  tooltip(props, propName, componentName) {
    const components = ['Tooltip'];
    return validComponents(props, propName, componentName, components, 1);
  },
};

MuiButton.defaultProps = {
  tooltip: [],
};
