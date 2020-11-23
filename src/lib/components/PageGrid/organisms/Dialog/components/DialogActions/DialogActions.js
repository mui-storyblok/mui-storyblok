import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { DialogActions as MuiDialogActions } from '@material-ui/core/DialogActions';
import { validComponents } from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';
import { renderComponentsWithBridg } from 'lib/utils/customComponents';

/* istanbul ignore next */
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));

const components = {
  ButtonRedirect,
};

const DialogActions = ({
  content,
  rootClass,
  disableSpacing,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  return (
    <MuiDialogActions
      disableSpacing={disableSpacing}
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridg(components, component, key)}
        </Suspense>
      ))}
    </MuiDialogActions>
  );
};

export default DialogActions;

DialogActions.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
    'ButtonRedirect',
    */
  content(props, propName, componentName) {
    const comps = [
      'ButtonRedirect',
    ];
    return validComponents(props, propName, componentName, comps);
  },
};

DialogActions.defaultProps = {
  rootClass: [],
  content: [],
};
