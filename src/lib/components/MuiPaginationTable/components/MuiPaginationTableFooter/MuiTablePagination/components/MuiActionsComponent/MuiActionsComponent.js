import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import StoryBlok from '../../../../../../../utils/Storyblok';

const MuiActionsComponent = ({
  count,
  page,
  rowsPerPage,
  onChangePage,
  rootClass,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const theme = useTheme();

  const handleFirstPageButtonClick = (e) => {
    onChangePage(e, 0);
  };

  const handleBackButtonClick = (e) => {
    onChangePage(e, page - 1);
  };

  const handleNextButtonClick = (e) => {
    onChangePage(e, page + 1);
  };

  const handleLastPageButtonClick = (e) => {
    onChangePage(e, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={styles.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
};

export default MuiActionsComponent;

MuiActionsComponent.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: -1
   * The total number of rows.
   */
  count: PropTypes.number,
  /**
   * mui prop: 0 (item quantity)
   * The zero-based index of the current page.
   */
  page: PropTypes.number,
  /**
   * mui prop: 25
   * The number of rows per page.
   */
  rowsPerPage: PropTypes.number,
  /**
   * mui prop: 25
   * The number of rows per page.
   */
  // eslint-disable-next-line react/require-default-props
  onChangePage: PropTypes.func,
};

MuiActionsComponent.defaultProps = {
  count: -1,
  page: 0,
  rowsPerPage: 25,
  rootClass: ['flexShrink: 0'],
};
