import React from 'react';
import MuiStoryblok from '../lib/index';

const App = () => (
  <MuiStoryblok
    useObjectTheme={true}
    theme={{
      palette: {
        primary: {
          main: '#42B540',
        },
      },
    }}
    accessToken="fa2Qt4skFijvgTqoT2xYrAtt"
    version="draft"
  />
);

export default App;
