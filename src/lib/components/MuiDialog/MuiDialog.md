MuiDialog Examples:

```js
const content = [{
  component: 'MuiDialogContent',
  content: [{
    component: 'MuiDialogContentTypography',
    content: [{
      component: 'MuiText',
      content: 'MuiDialogContentTypography text',
    }],
  }],
}];

const dialogTitle = [{
  component: 'MuiDialogTitle',
  text: 'Dialog Title',
}];

<MuiDialog
  content={content}
  dialogTitle={dialogTitle}
/>
```