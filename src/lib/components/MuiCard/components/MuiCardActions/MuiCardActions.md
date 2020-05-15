MuiCardAction - examples:

```js noeditor
import MuiCard from '../../MuiCard';
```

```js
const content = [{
  component: 'MuiCardActions',
  content: [{
    component: 'MuiButtonDialog',
    button: [{
      buttonText: 'Mui Button',
      component: 'MuiButton',
      variant: 'text',
    }],
    dialog: [{
      component: 'MuiDialog',
      dialogTitle: [{
        component: 'MuiDialogTitle',
        text: 'An Mui Dialog Title',
      }],
    }],
  }],
}];

<MuiCard
  content={content}
/>

```