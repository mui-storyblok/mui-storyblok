# mui-storyblok

[![NPM](https://img.shields.io/npm/v/mui-storyblok.svg)](https://www.npmjs.com/package/mui-storyblok) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


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

Set `STORYBLOK_OAUTH_TOKEN` and `STORYBLOK_SPACE_ID` in your `.env` file. link to docs below

> [create-react-app custom environment variables docs ](https://create-react-app.dev/docs/adding-custom-environment-variables/)

> [STORYBLOK_OAUTH_TOKEN docs ](https://www.storyblok.com/docs/api/management#topics/authentication)

> [STORYBLOK_SPACE_ID docs ](https://www.storyblok.com/docs/api/management#core-resources/spaces/spaces)

### CLI Commands

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


## License

MIT © [apjames93](https://github.com/apjames93)



