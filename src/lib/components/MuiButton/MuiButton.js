import React from 'react';
import MuiTooltip from '../MuiTooltip/MuiTooltip';
import Button from './components/Button/Button';
import {
  validComponents,
} from '../../utils/customProps';
/**
   * MuiButton controls Dialog open state from true to false.
   * More docs and demos at https://material-ui.com/api/button/
   */

export const MuiButton = (props) => {
  if (props.tooltip.length > 0) {
    return (
      <MuiTooltip {...props.tooltip[0]}>
        <Button {...props} />
      </MuiTooltip>
    );
  }

  return <Button {...props} />;
};

export default MuiButton;

MuiButton.propTypes = {
  /** Tooltip to wrap button in to display help text */
  tooltip(props, propName, componentName) {
    const components = ['MuiTooltip'];
    return validComponents(props, propName, componentName, components, 1);
  },
};

MuiButton.defaultProps = {
  tooltip: [],
};
