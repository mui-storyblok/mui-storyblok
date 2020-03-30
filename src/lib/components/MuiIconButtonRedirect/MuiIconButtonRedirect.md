MuiIconButtonRedirect example:

```js noeditor
import MuiIconButtonRedirect from './MuiIconButtonRedirect';
```

```js
const iconButton = [{
  component: 'MuiIconButton',
  icon: [{
    component: 'MuiIcon',
    iconName: 'history',
  }],
}];

<MuiIconButtonRedirect
  redirectRoute=""
  iconButton={iconButton}
/>
```