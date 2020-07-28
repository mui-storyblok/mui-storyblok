import React from 'react';
import MuiStoryblok from '../lib/index';

const MyCoolComp = () => <span>what?!</span>;

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
    customComponents={[{ componentName: 'MyCoolComp', Component: MyCoolComp, props: {} }]}
  />
);

export default App;
