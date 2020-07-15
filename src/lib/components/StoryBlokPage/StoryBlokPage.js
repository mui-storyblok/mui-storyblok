import React, { Component, createElement } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import MuiCircularProgress from '../MuiCircularProgress/MuiCircularProgress';
import Storyblok from '../../utils/Storyblok';
import Blok from './components/Blok/Blok';
import MuiTransitions from '../MuiTransitions/MuiTransitions';
import styles from './StoryBlokPage.module.scss';
import downloadSbAsset from '../../utils/json-sb-asset';

export class StoryBlokPage extends Component {
  state = {
    story: [],
    loading: true,
    error: '',
    muiTheme: {},
  };

  components = {
    Blok,
    MuiTransitions,
  }

  async componentDidMount() {
    await this.getPage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme && this.props.useObjectTheme) {
      this.setpropTheme(this.props.theme);
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
      const route = window.location.pathname === '/' ? 'page-welcome' : window.location.pathname.slice(1);
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
    const { customLoader } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {this.state.loading && !this.state.error && (
          <MuiCircularProgress customLoader={customLoader} />
        )}
        {this.state.error && <span style={{ color: 'red' }}>{this.state.error}</span>}
        {!this.state.loading && (
        <MuiThemeProvider theme={this.state.muiTheme}>
          <div className={styles.container}>
            {this.state.story && this.state.story.map((item, index) => (
              <div key={index}>
                {createElement(this.components[item.component], item)}
              </div>
            ))}
          </div>
        </MuiThemeProvider>
        )}
      </Grid>
    );
  }
}

export default StoryBlokPage;

StoryBlokPage.propTypes = {
  version: PropTypes.string.isRequired,
  /** acess key from storyblok you can make them in storyblok settings */
  accessToken: PropTypes.string.isRequired,
  /** theme for mui */
  theme: PropTypes.shape(),
  /** Custom Loader used instead of MuiCircularProgress */
  customLoader: PropTypes.node,
  /**
   * override url theme to edit in mui-theme tool
   */
  useObjectTheme: PropTypes.bool,
};

StoryBlokPage.defaultProps = {
  theme: {},
  useObjectTheme: false,
  customLoader: undefined,
};
