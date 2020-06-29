import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Storyblok from '../../utils/Storyblok';
import Blok from './components/Blok/Blok';
import MuiTransitions from '../MuiTransitions/MuiTransitions';
import styles from './StoryBlokPage.module.scss';

export class StoryBlokPage extends Component {
  state = {
    story: [],
    loading: true,
    error: '',
  };

  components = {
    Blok,
    MuiTransitions,
  }

  async componentDidMount() {
    await this.getPage();
  }

  getPage = async () => {
    try {
      const route = window.location.pathname === '/' ? 'page-welcome' : window.location.pathname.slice(1);
      const story = await Storyblok.get(route, this.props.accessToken, this.props.version);
      this.setStory(story);
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
      >
        {this.state.loading && !this.state.error && (
          <CircularProgress />
        )}
        {this.state.error && <span style={{ color: 'red' }}>{this.state.error}</span>}
        {!this.state.loading && (
          <div className={styles.container}>
            {this.state.story && this.state.story.map((item, index) => (
              <div key={index}>
                {createElement(this.components[item.component], item)}
              </div>
            ))}
          </div>
        )}
      </Grid>
    );
  }
}

// export default withRouter(StoryBlokPage);
export default StoryBlokPage;

StoryBlokPage.propTypes = {
  accessToken: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};
