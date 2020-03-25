import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiStoryblok from '../lib';

const App = () => (
  <BrowserRouter>
    <MuiStoryblok
      theme={{}}
      accessToken="kC3FAVf9oA1KtsFLtRdzDgtt"
      version="draft"
    />
  </BrowserRouter>
);

export default App;
