import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../Grid/Grid';
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
import MuiImage from '../MuiImage/MuiImage';
import BlokForm from '../BlokForm/BlokForm';
import { dimensionProp } from '../../utils/customProps';

const MuiHeroHeader = (props) => {
  const components = {
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
    MuiImage,
  };

  let heroClass = {
    height: props.height,
    position: 'relative',
    padding: 0,
    margin: 0,
  };

  if (props.backgroundImageUrl) {
    heroClass = {
      ...heroClass,
      ...{
        backgroundImage: `url(${props.backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    };
  }

  return (
    <Grid
      {...props}
      style={heroClass}
      components={components}
    />
  );
};

export default MuiHeroHeader;

MuiHeroHeader.propTypes = {
  /** url for background img */
  backgroundImageUrl: PropTypes.string,
  /** height of the container */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
};

MuiHeroHeader.defaultProps = {
  height: '100%',
  backgroundImageUrl: '',
};
