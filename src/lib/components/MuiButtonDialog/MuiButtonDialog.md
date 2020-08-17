MuiButton example:

```js
const dialog = [{
    component: 'MuiDialog',
    content: [{
      component: 'MuiDialogContent',
      content: [{
        component: 'MuiDialogContentTypography',
        content: [{
          component: 'MuiText',
          content: 'Dialog Content Typography',
        }],
      }],
    }],
    dialogTitle: [{
      component: 'MuiDialogTitle',
      text: 'Dialog Title',
    }],
  }];

const button = [{
    component: 'MuiButton',
    buttonText: 'Open Dialog',
}];

  <MuiButtonDialog
    dialog={dialog}
    button={button}
  />
```