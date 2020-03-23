import StoryblokClient from 'storyblok-js-client';
import { makeStyles } from '@material-ui/core/styles';

const accessToken = () => {
  if (process.env.REACT_APP_ENV === 'production') {
    return '4KWRQxfTx3WVCmJC13fXUwtt';
  }

  if (process.env.REACT_APP_ENV === 'stage') {
    return 'OusGlkeBv0HLadri7lZZtQtt';
  }

  return 'kC3FAVf9oA1KtsFLtRdzDgtt';
};

const client = new StoryblokClient({
  accessToken: accessToken(),
  cache: {
    clear: 'auto',
    type: 'memory',
  },
});

const version = process.env.REACT_APP_ENV === 'production' ? 'published' : 'draft';

class StoryBlock {
  static async get(route, options = {}) {
    try {
      const res = await client.get(`cdn/stories/${route}`, Object.assign({ version }, options));
      return res.data.story.content.body;
    } catch (err) {
      throw new Error(err);
    }
  }

  // takes a array of strings in key value pars and returns mui with style strings
  // ex ['color: black'] = { color: 'black' }
  static arrayToMuiStyles(array = [], defaultStyles = {}, styleKey = 'root') {
    const stylesObj = {};
    array.forEach((pair) => {
      const [key, value] = pair.split(': ');
      stylesObj[key.trim()] = value.trim();
    });

    const useStyles = makeStyles({ [styleKey]: { ...stylesObj, ...defaultStyles } });
    return useStyles();
  }
}

export default StoryBlock;
