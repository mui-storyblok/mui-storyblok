MuiIconButtonHref example:

```js noeditor
import MuiIconButtonHref from './MuiIconButtonHref';
```

```js
const iconButton = [{
  component: 'MuiIconButton',
  icon: [{
    component: 'MuiIcon',
    iconName: 'history',
  }],
}];

<MuiIconButtonHref
  href="https://github.com/apjames93/mui-storyblok"
  iconButton={iconButton}
/>
```