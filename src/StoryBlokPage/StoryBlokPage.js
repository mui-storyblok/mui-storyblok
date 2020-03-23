import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Storyblok from '../utils/Storyblok';

import Blok from './components/Blok/Blok';
import styles from './StoryBlokPage.module.scss';

export class StoryBlokPage extends Component {
  state = {
    story: [],
    loading: true,
    error: '',
  };

  components = {
    Blok,
  }

  async componentDidMount() {
    await this.getPage();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      await this.getPage();
    }
  }

  getPage = async () => {
    try {
      const route = window.location.pathname === '/' ? 'page-welcome' : window.location.pathname.slice(1);
      const story = await Storyblok.get(route);
      this.setStory(story);
    } catch (err) {
      await this.pageNotFound();
    }
  };

  pageNotFound = async () => {
    try {
      const story = await Storyblok.get('page-not-found');
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
              <div key={index} className={styles.list}>
                {React.createElement(this.components[item.component], item)}
              </div>
            ))}
          </div>
        )}
      </Grid>
    );
  }
}

export default withRouter(StoryBlokPage);

StoryBlokPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
