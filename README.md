<p align="center">
  <img width="300" src="./mui-storyblok-logo.svg " alt="wyg.js"/>
  <h1 align="center">mui-storyblok</h1>
</p>


[![NPM](https://img.shields.io/npm/v/mui-storyblok.svg)](https://www.npmjs.com/package/mui-storyblok) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Climate Grade](https://img.shields.io/codeclimate/coverage-letter/apjames93/mui-storyblok?color=%2345D198&label=Code%20Climate%20Grade)](https://codeclimate.com/github/apjames93/mui-storyblok)
[![Circle CI](https://img.shields.io/circleci/build/github/mui-storyblok/mui-storyblok/master?color=%23DE89FF)](https://app.circleci.com/projects/project-dashboard/github/mui-storyblok/)



> use react and mui to build pages with storyblok

> [React ](https://reactjs.org/): A JavaScript library for building user interfaces

> [Storyblok ](https://www.storyblok.com/): Managing digital content with a headless CMS

> [Material-UI ](https://material-ui.com/): React components for faster and easier web development.

## Install

```bash
npm install --save mui-storyblok
```

## Usage

```jsx
import React, { Component } from 'react'
import MuiStoryblok from 'mui-storyblok'

class Page extends Component {
  render () {
    return (
      <MuiStoryblok
        theme={{}} // mui theme obj `https://material-ui.com/customization/theming/`
        accessToken="sdcawrt23t32t23t" //storyblok public API-Key
        version="draft" // storyblok version [published or draft] in development use draft and published in production
      />
    )
  }
}

export default Page;
```

> MuiStoryblok will work for any route with a prefix of `page`

  ⋅ ex [`page-welcome`, `page-about`, `page-whatever-dude`]

> in your react project add this to your routes to get your pages from storyblok
```jsx
  import Page from 'PAGE_FILE_PATH';

  <Route path="/page**" component={Page} exact />
```

## Storyblok

In your `.bash_profile` or `.bashrc` add two exports (remember to source it after you export vars)

`export  STORYBLOK_OAUTH_TOKEN="STORYBLOK_OAUTH_TOKEN"`
 - > [STORYBLOK_OAUTH_TOKEN DOCS ](https://www.storyblok.com/docs/api/management#topics/authentication)

`export STORYBLOK_SPACE_ID="STORYBLOK_SPACE_ID"`
  - > [STORYBLOK_SPACE_ID DOCS ](https://www.storyblok.com/docs/api/management#core-resources/spaces/spaces)

`export STORYBLOK_ACCESS_TOKEN="STORYBLOK_ACCESS_TOKEN"`
  - > [STORYBLOK_ACCESS_TOKEN DOCS ](https://www.storyblok.com/docs/api/content-delivery#topics/authentication)

## Storyblok Command Line Interface 

We are using the [Storyblok Command Line Interface  ](https://www.storyblok.com/docs/Guides/command-line-interface) and 
need to log in before we can run the following cmds.
 - install `npm i storyblok -g`
 - run login `storyblok login` follow the props for email and password 

### mui-sotryblok CLI Commands
###### For new Storyblok spaces
Once env is configured run cmd:
`npx migrate-new-mui-storyblok`
This will add all components to your storyblok account with three demo pages.
⋅ [`page-welcome`, `page-demo`, `page-not-found`]

###### For Storyblok page examples
Once env is configured run cmd:
`npx migrate-storyblok-stories`
This will add three demo pages to storyblok space.
⋅ [`page-welcome`, `page-demo`, `page-not-found`]

###### To migrate mui-storyblok components to space
Once env is configured run cmd:
`npx migrate-storyblok-components`
This will add all components to your storyblok account.

###### To migrate mui-storyblok presets to space
###### WARNING!!: only do this on a new space alittle hacky will not override existing presets with same name but will update all presets defaults
Once env is configured run cmd:
`npx migrate-storyblok-presets`
This will add all presets to the components in your storyblok account.

### Custom Components in MuiStoryblok
###### Usage:
* Create a custom component.
* Pass custom component down as prop to `<MuiStoryblok />`.
```js
<MuiStoryblok
  customComponents={[{ componentName: 'NameOfCustomComp', Component: **CompName**, props: {} }]}
/>
```
* Create Custom Component in Storyblok space.

## License

MIT © [apjames93](https://github.com/apjames93)



