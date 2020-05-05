MuiButtonSnackbar Example:

```js noeditor
import React from 'react';
import MuiButtonSnackbar from './MuiButtonSnackbar';
```

```js
const button = [
  {
    buttonText: 'Open Snackbar',
    component: 'MuiButton',
  },
];

const closingIcon = [
  {
    component: 'MuiIconButton',
    icon: [
      {
        component: 'MuiIcon',
        iconName: 'close',
      },
    ],
  },
];

<MuiButtonSnackbar
  message='I am a snackbar'
  anchorOrigin={ ['vertical: bottom, horizontal: center'] }
  autoHideDuration='2000'
  button={button}
  closingIcon={closingIcon}
/>

```