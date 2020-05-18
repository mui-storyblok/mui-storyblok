MuiIconButtonDialog example:

```js
const dialog = [{
    component: 'MuiDialog',
    content: [{
      component: 'MuiDialogContent',
      content: [{
        component: 'MuiTypography',
        content: [{
          component: 'MuiText',
          text: 'text',
        }],
      }],
    }],
    dialogTitle: [{
      component: 'MuiDialogTitle',
      text: 'text',
    }],
  }];

  const iconButton = [{
    component: 'MuiIconButton',
    icon: [{
      component: 'MuiIcon',
      iconName: 'star',
    }],
  }];

  <MuiIconButtonDialog
    dialog={dialog}
    iconButton={iconButton}
  />
```