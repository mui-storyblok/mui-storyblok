import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiStoryblok from '../lib';

const App = () => (
  <BrowserRouter>
    <MuiStoryblok
      theme={{}}
      accessToken="9K1dqG8gQkc1jeVbOWRDUAtt"
      version="draft"
    />
  </BrowserRouter>
);

export default App;
