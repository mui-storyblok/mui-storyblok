import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import Storyblok from '../../../../utils/Storyblok';
import { validComponents } from '../../../../utils/customProps';
import MuiIconButtonRedirect from '../../../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../../../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../../../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from '../../../MuiIconButtonDialog/MuiIconButtonDialog';
import MuiIcon from '../../../MuiIcon/MuiIcon';

/**
 * MuiCardHeader is used in storyblok
 */

export const MuiCardHeader = ({
  rootClass,
  subheader,
  title,
  action,
  avatar,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const muiavatar = avatar[0];
  const muiaction = action[0];

  return (
    <CardHeader
      className={styles.root}
      title={title}
      subheader={subheader}
      avatar={(
        <>
          {
            muiavatar
              ? createElement(
                components[muiavatar.component],
                muiavatar,
              )
              : null
          }
        </>
      )}
      action={(
        <>
          {
            muiaction
              ? createElement(
                components[muiaction.component],
                muiaction,
              )
              : null
          }
        </>
      )}
    />
  );
};

export default MuiCardHeader;

MuiCardHeader.propTypes = {
  /**
   * The content of the Card Title.
   */
  title: PropTypes.string.isRequired,
  /**
   * subheader.
  */
  subheader: PropTypes.string,
  /**
   * MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog,
   * Allowed maximum: 1
   * The action to display in the card header.
   * */
  action(props, propName, componentName) {
    const components = [
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiIconButtonDialog',
    ];
    return validComponents(props, propName, componentName, components, 1);
  },

  /**
   * MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog,
   * Allowed maximum: 1
   * The Avatar for the Card Header.
   * */
  avatar(props, propName, componentName) {
    const components = [
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiIconButtonDialog',
    ];
    return validComponents(props, propName, componentName, components, 1);
  },
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiCardHeader.defaultProps = {
  action: [],
  avatar: [],
  rootClass: [],
  subheader: '',
};
