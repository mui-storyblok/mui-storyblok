MuiAppBar example:

```js noeditor
import MuiAppBar from './MuiAppBar';
```

```js
const content = [{
  component: 'MuiButtonRedirect',
  redirectRoute: '',
  button: [{
    component: 'MuiButton',
    buttonText: 'here',
  }],
}];

  <MuiAppBar
    position="relative"
    content={content}
  />
```