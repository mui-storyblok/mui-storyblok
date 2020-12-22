import { lazy } from 'react';
import PropTypes from 'prop-types';
import { muiStringProp } from 'lib/utils/customProps';
import Grid from 'lib/components/PageGrid/templates/Grid/Grid';
import GridItem from 'lib/components/PageGrid/templates/GridItem/GridItem';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

// atoms
const Icon = lazy(() => import('lib/components/PageGrid/atoms/Icon/Icon'));
const Image = lazy(() => import('lib/components/PageGrid/atoms/Image/Image'));
const Video = lazy(() => import('lib/components/PageGrid/atoms/Video/Video'));
const Divider = lazy(() => import('lib/components/PageGrid/atoms/Divider/Divider'));
// molecules
const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));
const ButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/ButtonDownload/ButtonDownload'));
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));
const IconButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/IconButtonDownload/IconButtonDownload'));
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));
const ContactButton = lazy(() => import('lib/components/PageGrid/molecules/ContactButton/ContactButton'));
// organisms
const Accordion = lazy(() => import('lib/components/PageGrid/organisms/Accordion/Accordion'));
const ActionCardContainer = lazy(() => import('lib/components/PageGrid/organisms/ActionCardContainer/ActionCardContainer'));
const AudioPlayer = lazy(() => import('lib/components/PageGrid/organisms/AudioPlayer/AudioPlayer'));
const Card = lazy(() => import('lib/components/PageGrid/organisms/Card/Card'));
const GridList = lazy(() => import('lib/components/PageGrid/organisms/GridList/GridList'));
const List = lazy(() => import('lib/components/PageGrid/organisms/List/List'));
const ListDropdown = lazy(() => import('lib/components/PageGrid/organisms/ListDropdown/ListDropdown'));
const MusicCard = lazy(() => import('lib/components/PageGrid/organisms/MusicCard/MusicCard'));
const ReviewCard = lazy(() => import('lib/components/PageGrid/organisms/ReviewCard/ReviewCard'));
const PostCard = lazy(() => import('lib/components/PageGrid/organisms/PostCard/PostCard'));
const PricingCard = lazy(() => import('lib/components/PageGrid/organisms/PricingCard/PricingCard'));
const StyledList = lazy(() => import('lib/components/PageGrid/organisms/StyledList/StyledList'));
// templates
const AppBar = lazy(() => import('lib/components/PageGrid/templates/AppBar/AppBar'));
const ButtonDialog = lazy(() => import('lib/components/PageGrid/templates/ButtonDialog/ButtonDialog'));
const ButtonDrawer = lazy(() => import('lib/components/PageGrid/templates/ButtonDrawer/ButtonDrawer'));
const Form = lazy(() => import('lib/components/PageGrid/templates/Form/Form'));
const GeoLocationMobileStepper = lazy(() => import('lib/components/PageGrid/templates/GeoLocationMobileStepper/GeoLocationMobileStepper'));
const GeoLocationTabs = lazy(() => import('lib/components/PageGrid/templates/GeoLocationTabs/GeoLocationTabs'));
const IconButtonDialog = lazy(() => import('lib/components/PageGrid/templates/IconButtonDialog/IconButtonDialog'));
const IconButtonDrawer = lazy(() => import('lib/components/PageGrid/templates/IconButtonDrawer/IconButtonDrawer'));
const MobileStepper = lazy(() => import('lib/components/PageGrid/templates/MobileStepper/MobileStepper'));
const NotificationBanner = lazy(() => import('lib/components/PageGrid/templates/NotificationBanner/NotificationBanner'));
const Tabs = lazy(() => import('lib/components/PageGrid/templates/Tabs/Tabs'));

const components = {
  Icon,
  Image,
  Video,
  Typography,
  ContactButton,
  ButtonDownload,
  ButtonDrawer,
  Divider,
  Form,
  GeoLocationMobileStepper,
  GeoLocationTabs,
  ButtonRedirect,
  IconButtonDownload,
  IconButtonRedirect,
  Accordion,
  ActionCardContainer,
  AudioPlayer,
  Card,
  GridList,
  List,
  ListDropdown,
  MusicCard,
  ReviewCard,
  PostCard,
  PricingCard,
  StyledList,
  AppBar,
  ButtonDialog,
  IconButtonDialog,
  IconButtonDrawer,
  MobileStepper,
  NotificationBanner,
  Tabs,
  NestedGridItem: GridItem,
  NestedGrid: Grid,
};

const NestedGrid = (props) => {
  const p = { ...props, components };
  return renderComponentsWithBridge(components, p);
};

export default NestedGrid;

NestedGrid.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
   * Defines the align-content style property. It's applied for all screen sizes.
   */
  alignContent(props, propName, componentName) {
    const validProp = ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop: 'flex-start' , 'center' , 'flex-end' , 'stretch' , 'baseline'
   * Defines the align-items style property. It's applied for all screen sizes.
   */
  alignItems(props, propName, componentName) {
    const validProp = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /*
  * mui prop: 'row', 'row-reverse', 'column', 'column-reverse'
  * Defines the flex-direction style property. It is applied for all screen sizes.
  */
  direction(props, propName, componentName) {
    const validProp = ['row', 'row-reverse', 'column', 'column-reverse'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop:
   * 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'
   * Defines the justify-content style property. It is applied for all screen sizes.
   */
  justify(props, propName, componentName) {
    const validProp = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop:  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
   * Defines the space between the type item
   component. It can only be used on a type container component.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * mui prop: 'nowrap', 'wrap', 'wrap-reverse'
   * Defines the flex-wrap style property. It's applied for all screen sizes.
   */
  wrap(props, propName, componentName) {
    const validProp = ['nowrap', 'wrap', 'wrap-reverse'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * Content passed to render
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** style obj to pass to grid */
  style: PropTypes.shape(),
};

NestedGrid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'center',
  rootClass: [],
  direction: 'row',
  justify: 'center',
  spacing: '2',
  wrap: 'wrap',
  style: {},
};
