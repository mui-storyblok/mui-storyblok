// import React from "react";
// import { TextInput } from "../lib";

// const App = () => (
//   <div style={{ width: 640, margin: "15px auto" }}>
//     <h1>Hello React</h1>
//     <TextInput label="Email Address" placeholder="name@example.com" />
//   </div>
// );

// export default App;


import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MuiStoryblok } from "../lib";

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