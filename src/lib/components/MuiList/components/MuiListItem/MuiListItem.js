import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import {
  validComponents,
  muiStringProp,
  validComponentsRequired,
} from '../../../../utils/customProps';
import Storyblok from '../../../../utils/Storyblok';
import MuiListItemAvatar from './components/MuiListItemAvatar/MuiListItemAvatar';
import MuiListItemIcon from './components/MuiListItemIcon/MuiListItemIcon';
import MuiListItemSecondaryAction from './components/MuiListItemSecondaryAction/MuiListItemSecondaryAction';
import MuiListItemText from './components/MuiListItemText/MuiListItemText';
import MuiContactButton from '../../../MuiContactButton/MuiContactButton';

const MuiListItem = ({
  rootClass,
  alignItems,
  dense,
  disableGutters,
  divider,
  selected,
  contactButton,
  listItemAvatar,
  listItemIcon,
  listItemSecondaryAction,
  listItemText,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const avatar = listItemAvatar[0];
  const icon = listItemIcon[0];
  const secondaryAction = listItemSecondaryAction[0];
  const text = listItemText[0];
  const contact = contactButton[0];
  return (
    <ListItem
      className={styles.root}
      dense={dense}
      alignItems={alignItems}
      disableGutters={disableGutters}
      divider={divider}
      selected={selected}
    >
      {avatar ? <MuiListItemAvatar {...avatar} /> : null}
      {icon ? <MuiListItemIcon {...icon} /> : null}
      {text ? <MuiListItemText {...text} /> : null}
      {secondaryAction ? <MuiListItemSecondaryAction {...secondaryAction} /> : null}
      {contact ? <MuiContactButton {...contact} /> : null}
    </ListItem>
  );
};

export default MuiListItem;

MuiListItem.propTypes = {
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

MuiListItem.defaultProps = {
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
