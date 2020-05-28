import React from 'react';
import Grid from '../Grid/Grid';
import MuiAppBar from '../MuiAppBar/MuiAppBar';
import MuiMobileStepper from '../MuiMobileStepper/MuiMobileStepper';
import MuiHeroHeader from '../MuiHeroHeader/MuiHeroHeader';
import MuiCircularProgress from '../MuiCircularProgress/MuiCircularProgress';
import MuiGridItem from './components/MuiGridItem/MuiGridItem';
import MuiGridList from '../MuiGridList/MuiGridList';
import MuiButtonRedirect from '../MuiButtonRedirect/MuiButtonRedirect';
import MuiCard from '../MuiCard/MuiCard';
import MuiTypography from '../MuiTypography/MuiTypography';
import MuiMenu from '../MuiMenu/MuiMenu';
import MuiIcon from '../MuiIcon/MuiIcon';
import MuiExpansionPanel from '../MuiExpansionPanel/MuiExpansionPanel';
import MuiList from '../MuiList/MuiList';
import MuiTable from '../MuiTable/MuiTable';
import MuiPaginationTable from '../MuiPaginationTable/MuiPaginationTable';
import MuiContactButton from '../MuiContactButton/MuiContactButton';
import BlokForm from '../BlokForm/BlokForm';

const MuiGrid = (props) => {
  const gridItemComponets = {
    MuiHeroHeader,
    MuiGridItem,
    MuiAppBar,
    MuiMobileStepper,
    MuiCircularProgress,
    MuiGridList,
    MuiButtonRedirect,
    MuiCard,
    MuiTypography,
    MuiMenu,
    MuiIcon,
    MuiExpansionPanel,
    MuiList,
    MuiTable,
    MuiPaginationTable,
    MuiContactButton,
    BlokForm,
  };

  return (
    <Grid
      {...props}
      gridItemComponets={gridItemComponets}
    />
  );
};

export default MuiGrid;