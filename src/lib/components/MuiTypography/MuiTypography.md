MuiTypography example:

```js noeditor
import MuiTypography from './MuiTypography';
```

```js

const muiText = {
    component: 'MuiText',
    text: 'you can concatenate stings',
}

const icon = {
    component: 'MuiIcon',
    iconName: 'done_all',
};

const iconButtonDownload = {
    component: 'MuiIconButtonDownload',
    herf: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    fileName: "cool.jpeg",
    icon: [icon],
};

const muiText2 = {
    component: 'MuiText',
    text: 'like this',
}

  const content = [muiText, iconButtonDownload, muiText2];

  <MuiTypography
    content={content}
  />
```