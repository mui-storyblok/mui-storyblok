import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MuiCircularProgress from '../MuiCircularProgress/MuiCircularProgress';
import Storyblok from '../../utils/Storyblok';
import styles from './StoryBlokPage.module.scss';
import downloadSbAsset from '../../utils/json-sb-asset';
import { renderComponents } from '../../utils/customComponents';

import PageGrid from '../PageGrid/PageGrid';

export class StoryBlokPage extends Component {
  state = {
    story: [],
    loading: true,
    error: '',
    muiTheme: {},
  };

  components = {
    PageGrid,
  }

  async componentDidMount() {
    this.appendStoryblokBridgeScript(this.props.accessToken);
    await this.getPage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme && this.props.useObjectTheme) {
      this.setpropTheme(this.props.theme);
    }
  }

  appendStoryblokBridgeScript = (accessToken) => {
    if (process.env.REACT_APP_ENV !== 'production') {
      const existingScript = document.getElementById('storyblokBridge');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${accessToken}`;
        script.id = 'storyblokBridge';
        document.body.appendChild(script);
        script.onload = () => {
          // Initialize the Storyblok JS Bridge
          window.storyblok.init({ accessToken });

          // Ping the Visual Editor and enter Editmode manually
          window.storyblok.pingEditor(() => {
            if (window.storyblok.inEditor) {
              window.storyblok.enterEditmode();

              window.storyblok.on(['change', 'saved'], () => {
                window.location.reload(true);
              });
            }
          });
        };
      }
    }
  }

  setpropTheme = (theme) => {
    const muiTheme = createMuiTheme(theme);
    this.setState({ muiTheme });
  }

  getUrlTheme = async (urlTheme, theme) => {
    let res;
    try {
      res = await downloadSbAsset(urlTheme);
      return createMuiTheme(res);
    } catch (err) {
      console.warn(`issue getting theme from ${urlTheme} using to ${theme ? 'theme passed by props' : 'mui default theme'}  `);
      return createMuiTheme(theme);
    }
  };

  pickTheme = async (urlTheme, theme) => {
    let muiTheme;
    if (urlTheme && !this.props.useObjectTheme) {
      muiTheme = await this.getUrlTheme(urlTheme);
    } else {
      muiTheme = createMuiTheme(theme);
    }
    return muiTheme;
  };

  getPage = async () => {
    try {
      let route;
      if (window.location.pathname === '/') {
        route = window.location.pathname === '/' ? this.props.dynamicSlug : window.location.pathname.slice(1);
      } else if (this.props.staticSlug) {
        route = this.props.staticSlug;
      } else {
        route = window.location.pathname.slice(1);
      }
      const story = await Storyblok.get(route, this.props.accessToken, this.props.version);
      const muiTheme = await this.pickTheme(story[1], this.props.theme);
      this.setState({ muiTheme });

      this.setStory(story[0]);
    } catch (err) {
      await this.pageNotFound();
    }
  };

  pageNotFound = async () => {
    try {
      const story = await Storyblok.get('page-not-found', this.props.accessToken, this.props.version);
      this.setStory(story);
    } catch (err) {
      this.setState({
        error: 'Unable to fetch page content please refresh and try again or check to make sure you are at the right url',
      });
    }
  };

  setStory = (story) => {
    // scroll to top of page when setting a new story
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    this.setState({ loading: false, story });
  };

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        styles={this.props.pageStyles}
      >
        {this.state.loading && !this.state.error && (
          <MuiCircularProgress />
        )}
        {this.state.error && <span style={{ color: 'red' }}>{this.state.error}</span>}
        {!this.state.loading && (
        <MuiThemeProvider theme={this.state.muiTheme}>
          <CssBaseline />
          <div className={styles.container}>
            {this.state.story
                && this.state.story
                  .map((item, index) => renderComponents(this.components, item, index))}
          </div>
        </MuiThemeProvider>
        )}
      </Grid>
    );
  }
}

export default StoryBlokPage;

StoryBlokPage.propTypes = {
  /** If Static Slug is provided storyblok will only load the page provided */
  staticSlug: PropTypes.string,
  /** Override for default route page */
  dynamicSlug: PropTypes.string,
  version: PropTypes.string.isRequired,
  /** acess key from storyblok you can make them in storyblok settings */
  accessToken: PropTypes.string.isRequired,
  /** theme for mui */
  theme: PropTypes.shape(),
  /**
   * override url theme to edit in mui-theme tool
   */
  useObjectTheme: PropTypes.bool,
  pageStyles: PropTypes.shape({}),
};

StoryBlokPage.defaultProps = {
  theme: {},
  useObjectTheme: false,
  dynamicSlug: 'page-welcome',
  staticSlug: '',
  pageStyles: {},
};
