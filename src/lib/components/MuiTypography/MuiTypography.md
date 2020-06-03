MuiTypography example:

```js
const muiText = {
    component: 'MuiText',
    text: 'you can concatenate strings',
}

const icon = {
    component: 'MuiIcon',
    iconName: 'done_all',
};

const iconButtonDownload = {
    component: 'MuiIconButtonDownload',
    href: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    fileName: "cool.jpeg",
    iconButton: [{
      component: 'MuiIconButton',
      icon: [icon],
    }],
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

MuiTypography Variants example:

```js
const h1 = [{
    component: 'MuiText',
    text: 'H1. Heading',
    variant: 'h1',
}];

const h2 = [{
    component: 'MuiText',
    text: 'H2. Heading',
    variant: 'h2',
}];

const content = [h1, h2];

<MuiTypography
  content={content}
/>

// <MuiTypography
//   content={h2}
// />

```