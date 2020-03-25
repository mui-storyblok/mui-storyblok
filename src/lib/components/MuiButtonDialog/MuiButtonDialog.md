MuiButton example:

```js noeditor
import MuiButtonDialog from './MuiButtonDialog';
```

```js
import MuiButtonDialog from './MuiButtonDialog';

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

const button = [{
    component: 'MuiButton',
    buttonText: 'buttonText',
}];

  <MuiButtonDialog
    dialog={dialog}
    button={button}
  />
```