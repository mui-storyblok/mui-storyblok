import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import { validComponents, muiStringProp } from '../../../../utils/customProps';
import Storyblok from '../../../../utils/Storyblok';
import appRedirect from '../../../../utils/appRedirect';
import MuiListItemAvatar from '../MuiListItem/components/MuiListItemAvatar/MuiListItemAvatar';
import MuiListItemIcon from '../MuiListItem/components/MuiListItemIcon/MuiListItemIcon';
import MuiListItemText from '../MuiListItem/components/MuiListItemText/MuiListItemText';
import MuiContactButton from '../../../MuiContactButton/MuiContactButton';

export const MuiListItemButton = ({
  rootClass,
  alignItems,
  dense,
  disableGutters,
  divider,
  selected,
  redirectRoute,
  contactButton,
  href,
  listItemAvatar,
  listItemIcon,
  listItemText,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  let handleClick;
  if (href === undefined && redirectRoute === undefined) {
    handleClick = () => {};
  } else if (href !== undefined && href !== '') {
    handleClick = () => window.location.assign(href);
  } else if (redirectRoute !== undefined && redirectRoute !== '') {
    handleClick = async () => appRedirect(redirectRoute);
  }

  const avatar = listItemAvatar[0];
  const icon = listItemIcon[0];
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
      button={true}
      onClick={handleClick}
    >
      {avatar ? <MuiListItemAvatar {...avatar} /> : null}
      {icon ? <MuiListItemIcon {...icon} /> : null}
      {text ? <MuiListItemText {...text} /> : null}
      {contact ? <MuiContactButton {...contact} /> : null}
    </ListItem>
  );
};

export default MuiListItemButton;

MuiListItemButton.propTypes = {
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
  /** redirect route */
  redirectRoute: PropTypes.string,
  /** url to redirect to */
  href: PropTypes.string,
  /** MuiListItemAvatar Allowed maximum: 1 */
  contactButton(props, propName, componentName) {
    const components = ['MuiListItemAvatar'];
    return validComponents(props, propName, componentName, components, 1);
  },
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
};

MuiListItemButton.defaultProps = {
  alignItems: 'center',
  dense: false,
  disableGutters: false,
  divider: false,
  selected: false,
  redirectRoute: undefined,
  href: undefined,
  rootClass: [],
  listItemAvatar: [],
  listItemIcon: [],
  listItemText: [],
  contactButton: [],
};
