import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Grow,
  Paper,
  Popper,
  MenuList,
  Button,
  ClickAwayListener,
} from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';
import MuiActionCard from './components/MuiActionCard/MuiActionCard';

const MuiActionCardContainer = ({
  rootClass,
  menuName,
  actionCards,
  height,
  width,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const styles = StoryBlok.arrayToMuiStyles(rootClass, { padding: '0px 10%' });

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
    <div>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          data-testid="menuButton"
        >
          {menuName}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper style={{ minWidth: '100vw', height: '100%' }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className={styles.root}
                    style={{
                      display: 'flex', flexWrap: 'wrap', justfiyContent: 'space-evenly', outline: 'none',
                    }}
                  >
                    {actionCards.map((card, index) => (
                      <MuiActionCard {...card} key={index} height={height} width={width} />
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default MuiActionCardContainer;

MuiActionCardContainer.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Override or extend the styles applied to the component
  * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Text Displayed for menu
   */
  menuName: PropTypes.string,
  /**
   * Height of the each Action Card.
   */
  height: PropTypes.string,
  /**
   * Width of the each Action Card.
   */
  width: PropTypes.string,
  /**
   * Cards passed ot MuiActionCardContainer to render
   * Component: MuiActionCard
   */
  actionCards: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiActionCardContainer.defaultProps = {
  rootClass: [],
  menuName: 'Action Card Menu',
  height: '100px',
  width: '200px',
};
