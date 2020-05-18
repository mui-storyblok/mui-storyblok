MuiCardActions Examples:

```js
const content=[{
  button: [{
    buttonText: 'Mui Card Action Button',
    component: 'MuiButton',
  }],
  component: 'MuiButtonDialog',
  dialog: [{
    component: 'MuiDialog',
    dialogTitle: [{
      component: 'MuiDialogTitle',
      text: 'Dialog Title',
    }],
  }],
}];

// const action2 = {
//     component: 'MuiCardActions',
//     content: [{
//         component: 'MuiIconButtonDownload',
//         href: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
//         fileName: "cool.jpeg",
//         iconButton: [{
//         component: 'MuiIconButton',
//         icon: [{
//             component: 'MuiIcon',
//             iconName: 'android',
//         }],
//       }],
//     }]
// };

<MuiCardActions
  content={content}
/>

```