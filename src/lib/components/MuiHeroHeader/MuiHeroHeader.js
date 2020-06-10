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
import BlokForm from '../BlokForm/BlokForm';

const MuiHeroHeader = (props) => {
  const gridItemComponents = {
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
      gridItemComponents={gridItemComponents}
    />
  );
};

export default MuiHeroHeader;

MuiHeroHeader.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** url for background img */
  backgroundImageUrl: PropTypes.string,

  /** height of the container */
  height: PropTypes.string,
  /**
   * mui prop: 'stretch'| 'center'| 'flex-start'| 'flex-end'| 'space-between'| 'space-around'
   * Defines the align-content style property. It's applied for all screen sizes.
   */
  alignContent: PropTypes.string,
  /**
   * mui prop: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
   * Defines the align-items style property. It's applied for all screen sizes.
   */
  alignItems: PropTypes.string,
  /*
  * mui prop: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  * Defines the flex-direction style property. It is applied for all screen sizes.
  */
  direction: PropTypes.string,
  /**
   * mui prop:
   'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
   * Defines the justify-content style property. It is applied for all screen sizes.
   */
  justify: PropTypes.string,
  /**
   * mui prop:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
   * Defines the space between the type item component.
   It can only be used on a type container component.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * mui prop: 'nowrap' | 'wrap' | 'wrap-reverse'
   * Defines the flex-wrap style property. It's applied for all screen sizes.
   */
  wrap: PropTypes.string,
  /**
   * Content passed to render
   * components: MuiGrid
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiHeroHeader.defaultProps = {
  height: '100%',
  alignContent: 'stretch',
  alignItems: 'center',
  rootClass: [],
  direction: 'row',
  justify: 'center',
  spacing: '2',
  wrap: 'wrap',
  backgroundImageUrl: '',
};
