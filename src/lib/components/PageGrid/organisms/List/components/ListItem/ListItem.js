import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { ListItem as MuiListItem } from '@material-ui/core';
import {
  validComponents,
  muiStringProp,
  validComponentsRequired,
} from 'lib/utils/customProps';
import { renderComponentsWithBridg } from 'lib/utils/customComponents';
import Storyblok from 'lib/utils/Storyblok';

const ListItemText = lazy(() => import('./components/ListItemText/ListItemText'));

const ListItem = ({
  rootClass,
  alignItems,
  dense,
  disableGutters,
  divider,
  selected,
  listItemText,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const text = listItemText[0];

  return (
    <MuiListItem
      className={`${styles.root} ${storyblokClass}`}
      dense={dense}
      alignItems={alignItems}
      disableGutters={disableGutters}
      divider={divider}
      selected={selected}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <Suspense fallback={<></>}>
        {renderComponentsWithBridg({ ListItemText }, text)}
      </Suspense>
    </MuiListItem>
  );
};

export default ListItem;

ListItem.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** mui prop: 'flex-start', 'center'
   * Defines the align-items style property.
  */
  alignItems(props, propName, componentName) {
    const validProps = ['flex-start', 'center'];
    return muiStringProp(props, propName, componentName, validProps);
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
  /** MuiListItemAvatar Allowed maximum: 1 */
  listItemAvatar(props, propName, componentName) {
    const components = ['MuiListItemAvatar'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** MuiListItemAvatar Allowed maximum: 1 */
  contactButton(props, propName, componentName) {
    const components = ['MuiListItemAvatar'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** MuiListItemIcon Allowed maximum: 1 */
  listItemIcon(props, propName, componentName) {
    const components = ['MuiListItemIcon'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** MuiListItemText Allowed maximum: 1 */
  listItemText(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiListItemText'], 1);
  },
  /** MuiListItemSecondaryAction Allowed maximum: 1 */
  listItemSecondaryAction(props, propName, componentName) {
    const components = ['MuiListItemSecondaryAction'];
    return validComponents(props, propName, componentName, components, 1);
  },
};

ListItem.defaultProps = {
  alignItems: 'center',
  dense: false,
  disableGutters: false,
  divider: false,
  selected: false,
  rootClass: [],
  listItemAvatar: [],
  listItemIcon: [],
  listItemSecondaryAction: [],
  contactButton: [],
  listItemText: [],
};
