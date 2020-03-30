import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import StoryBlokPage from './components/StoryBlokPage/StoryBlokPage';

export const MuiStoryblok = ({
  theme,
  accessToken,
  version,
}) => {
  const muiTheme = createMuiTheme(theme);
  return (
    <MuiThemeProvider theme={muiTheme}>
      <StoryBlokPage
        accessToken={accessToken}
        version={version}
      />
    </MuiThemeProvider>
  );
};

export default MuiStoryblok;

MuiStoryblok.propTypes = {
  /** theme for mui */
  theme: PropTypes.shape(),
  /** storyblok prop  'published' : 'draft' */
  version: PropTypes.string,

  /** acess key from storyblok you can make them in storyblok settings */
  accessToken: PropTypes.string.isRequired,
};

MuiStoryblok.defaultProps = {
  theme: {},
  version: 'draft',
};
