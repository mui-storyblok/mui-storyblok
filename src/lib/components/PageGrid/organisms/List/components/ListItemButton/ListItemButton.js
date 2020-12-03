import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import { validComponents, muiStringProp } from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';
import appRedirect from 'lib/utils/appRedirect';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

const ListItemAvatar = lazy(() => import('lib/components/PageGrid/molecules/ListItemAvatar/ListItemAvatar'));
const ListItemIcon = lazy(() => import('lib/components/PageGrid/molecules/ListItemIcon/ListItemIcon'));
const ListItemText = lazy(() => import('lib/components/PageGrid/atoms/ListItemText/ListItemText'));

export const ListItemButton = ({
  rootClass,
  alignItems,
  dense,
  disableGutters,
  divider,
  selected,
  href,
  external,
  listItemAvatar,
  listItemIcon,
  listItemText,
  callback,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const externalRedirect = () => {
    window.location.replace(href);
  };

  const internalRedirect = () => {
    appRedirect(href);
  };

  const handleClick = () => {
    if (callback) callback();
    if (external) return externalRedirect();
    return internalRedirect();
  };

  const avatar = listItemAvatar[0];
  const icon = listItemIcon[0];
  const text = listItemText[0];
  return (
    <ListItem
      className={styles.root}
      dense={dense}
      alignItems={alignItems}
      disableGutters={disableGutters}
      divider={divider}
      selected={selected}
      button={true}
      onClick={handleClick}
    >
      {avatar ? (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge({ ListItemAvatar }, avatar)}
        </Suspense>
      ) : null}

      {icon ? (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge({ ListItemIcon }, icon)}
        </Suspense>
      ) : null}

      {text ? (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge({ ListItemText }, text)}
        </Suspense>
      ) : null}

    </ListItem>
  );
};

export default ListItemButton;

ListItemButton.propTypes = {
  /** storyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** mui prop: 'flex-start'| 'center'
   * Defines the align-items style property.
  */
  alignItems(props, propName, componentName) {
    return muiStringProp(props, propName, componentName, ['flex-start', 'center']);
  },
  /** mui prop: true | false
   * If true, compact vertical padding designed for keyboard and mouse input will be used.
   * */
  dense: PropTypes.bool,
  /** mui prop: true | false
   * If true, the left and right padding is removed.
   * */
  disableGutters: PropTypes.bool,
  /** mui prop: true | false
   * If true, a 1px light border is added to the bottom of the list item.
   * */
  divider: PropTypes.bool,
  /** mui prop: true | false
   * Use to apply selected styling.
   * */
  selected: PropTypes.bool,

  /** url to redirect to */
  href: PropTypes.string.isRequired,

  /** MuiListItemAvatar Allowed maximum: 1 */
  listItemAvatar(props, propName, componentName) {
    return validComponents(props, propName, componentName, ['MuiListItemAvatar'], 1);
  },
  /** MuiListItemIcon Allowed maximum: 1 */
  listItemIcon(props, propName, componentName) {
    return validComponents(props, propName, componentName, ['MuiListItemIcon'], 1);
  },
  /** MuiListItemText Allowed maximum: 1 */
  listItemText(props, propName, componentName) {
    return validComponents(props, propName, componentName, ['MuiListItemText'], 1);
  },
  /**
   * if false will redirect to a page in the app and should use '/page-whatever'
   *  if true will redirect to another site 'https://www.google.com/'
   * */
  external: PropTypes.bool,
  // callback to run before redirect
  callback: PropTypes.func,
};

ListItemButton.defaultProps = {
  alignItems: 'center',
  dense: false,
  disableGutters: false,
  divider: false,
  selected: false,
  rootClass: [],
  listItemAvatar: [],
  listItemIcon: [],
  listItemText: [],
  external: false,
  callback: undefined,
};
