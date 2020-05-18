MuiIconButtonDownload example:

```js
const iconButton = [{
  component: 'MuiIconButton',
  icon: [{
    component: 'MuiIcon',
    iconName: 'android',
  }],
}];

<MuiIconButtonDownload
  href="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
  fileName="cool.jpeg"
  iconButton={iconButton}
/>
```