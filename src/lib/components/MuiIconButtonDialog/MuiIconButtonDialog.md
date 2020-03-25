MuiIconButtonDialog example:

```js noeditor
import MuiIconButtonDialog from './MuiIconButtonDialog';
```

```js
import MuiIconButtonDialog from './MuiIconButtonDialog';

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

  const icon = [{
      component: 'MuiIcon',
      iconName: 'extension',
  }];


  <MuiIconButtonDialog
    dialog={dialog}
    button={button}
    icon={icon}
  />
```