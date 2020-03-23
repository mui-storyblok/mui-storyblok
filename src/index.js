import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import styles from './styles.css';

import StoryBlokPage from './StoryBlokPage/StoryBlokPage';


export default class ExampleComponent extends Component {
  render() {
    const {
      theme,
    } = this.props;

    const muiTheme = createMuiTheme(theme);

    return (
      <MuiThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <StoryBlokPage />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

ExampleComponent.propTypes = {
  theme: PropTypes.shape(),

};

ExampleComponent.defaultProps = {
  theme: {},
};
