import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import Grid from 'lib/components/PageGrid/templates/Grid/Grid';
import GridItem from 'lib/components/PageGrid/templates/GridItem/GridItem';
import Icon from 'lib/components/PageGrid/atoms/Icon/Icon';

// atoms
const Image = lazy(() => import('lib/components/PageGrid/atoms/Image/Image'));
const Video = lazy(() => import('lib/components/PageGrid/atoms/Video/Video'));
// molecules
const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));
const ButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/ButtonDownload/ButtonDownload'));
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));
const IconButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/IconButtonDownload/IconButtonDownload'));
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));
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
const ButtonDialog = lazy(() => import('lib/components/PageGrid/templates/ButtonDialog/ButtonDialog'));
const ButtonDrawer = lazy(() => import('lib/components/PageGrid/templates/ButtonDrawer/ButtonDrawer'));
const Form = lazy(() => import('lib/components/PageGrid/templates/Form/Form'));
const IconButtonDialog = lazy(() => import('lib/components/PageGrid/templates/IconButtonDialog/IconButtonDialog'));
const IconButtonDrawer = lazy(() => import('lib/components/PageGrid/templates/IconButtonDrawer/IconButtonDrawer'));

const components = {
  Icon,
  Image,
  Video,
  Typography,
  ButtonDownload,
  ButtonDrawer,
  Form,
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
  ButtonDialog,
  IconButtonDialog,
  IconButtonDrawer,
  MobileTabGridItem: GridItem,
};

const MobileTab = ({
  tab,
}) => (
  <div style={{ overflow: 'hidden' }}>
    <Grid {...tab} components={components} />
  </div>
);

export default MobileTab;

MobileTab.propTypes = {
  /** State you would like to show if user is in this state */
  geocodeState: PropTypes.string,
  /** props to spread to  */
  tab: PropTypes.shape.isRequired,
};

MobileTab.defaultProps = {
  geocodeState: '',
};
