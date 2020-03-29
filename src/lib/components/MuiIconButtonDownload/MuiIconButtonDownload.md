MuiIconButtonDownload example:

```js noeditor
import MuiIconButtonDownload from './MuiIconButtonDownload';
```

```js
  const icon = [{
      component: 'MuiIcon',
      iconName: 'done_all',
  }];

  <MuiIconButtonDownload
    herf="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
    fileName="cool.jpeg"
    icon={icon}
  />
```