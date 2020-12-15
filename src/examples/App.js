import React from 'react';
import MuiStoryblok from '../lib/index';

const App = () => (
  <MuiStoryblok
    useObjectTheme={true}
    theme={{
      palette: {
        primary: {
          main: '#70AE6E',
          light: '#88BC86',
          dark: '#3E855E',
          contrastText: '#FEFEFF',
          backgroundColor: '#70AE6E',
        },
      },
    }}
    accessToken="fa2Qt4skFijvgTqoT2xYrAtt"
    version="draft"
  />
);

export default App;
