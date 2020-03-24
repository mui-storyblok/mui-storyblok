import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import StoryBlokPage from '../StoryBlokPage/StoryBlokPage';

export default class MuiStoryblok extends Component {
  render() {
    const {
      theme,
      accessToken,
      version,
    } = this.props;

    const muiTheme = createMuiTheme(theme);

    return (
      <MuiThemeProvider theme={muiTheme}>
          <StoryBlokPage
            accessToken={accessToken}
            version={version}
          />
      </MuiThemeProvider>
    );
  }
}

MuiStoryblok.propTypes = {
  /** theme for mui */
  theme: PropTypes.shape(),
  /** storyblok prop  'production' ? 'published' : 'draft' */
  version: PropTypes.string,

  /** acess key from storyblok you can make them in storyblok settings */
  accessToken: PropTypes.string.isRequired,
};

MuiStoryblok.defaultProps = {
  theme: {},
  version: 'draft',
};
