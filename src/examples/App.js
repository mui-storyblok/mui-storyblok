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
    accessToken="9K1dqG8gQkc1jeVbOWRDUAtt"
    version="draft"
  />
);

export default App;
