import React from 'react';
import Grid from '../Grid/Grid';
import MuiAppBar from '../MuiAppBar/MuiAppBar';
import MuiMobileStepper from '../MuiMobileStepper/MuiMobileStepper';
import MuiHeroHeader from '../MuiHeroHeader/MuiHeroHeader';
import MuiCircularProgress from '../MuiCircularProgress/MuiCircularProgress';
import MuiGridList from '../MuiGridList/MuiGridList';
import MuiButtonRedirect from '../MuiButtonRedirect/MuiButtonRedirect';
import MuiCard from '../MuiCard/MuiCard';
import MuiTypography from '../MuiTypography/MuiTypography';
import MuiMenu from '../MuiMenu/MuiMenu';
import MuiIcon from '../MuiIcon/MuiIcon';
import MuiAccordion from '../MuiAccordion/MuiAccordion';
import MuiList from '../MuiList/MuiList';
import MuiTable from '../MuiTable/MuiTable';
import MuiPaginationTable from '../MuiPaginationTable/MuiPaginationTable';
import MuiContactButton from '../MuiContactButton/MuiContactButton';
import MuiImage from '../MuiImage/MuiImage';
import MuiButtonHref from '../MuiButtonHref/MuiButtonHref';
import MuiNotificationBanner from '../MuiNotificationBanner/MuiNotificationBanner';
import BlokForm from '../BlokForm/BlokForm';
import MuiAudioPlayer from '../MuiAudioPlayer/MuiAudioPlayer';
import GoogleConversions from '../GoogleConversions/GoogleConversions';
import MuiIconButtonDialog from '../MuiIconButtonDialog/MuiIconButtonDialog';
import MuiButtonDialog from '../MuiButtonDialog/MuiButtonDialog';
import MuiGeoLocationMobileStepper from '../MuiGeoLocationMobileStepper/MuiGeoLocationMobileStepper';

const MuiGrid = (props) => {
  const components = {
    MuiHeroHeader,
    MuiAppBar,
    MuiMobileStepper,
    MuiCircularProgress,
    MuiGridList,
    MuiButtonRedirect,
    MuiCard,
    MuiTypography,
    MuiMenu,
    MuiIcon,
    MuiAccordion,
    MuiList,
    MuiTable,
    MuiPaginationTable,
    MuiContactButton,
    MuiImage,
    MuiButtonHref,
    MuiNotificationBanner,
    BlokForm,
    MuiAudioPlayer,
    GoogleConversions,
    MuiGeoLocationMobileStepper,
    MuiIconButtonDialog,
    MuiButtonDialog,
  };

  return (
    <Grid
      {...props}
      components={components}
    />
  );
};

export default MuiGrid;
