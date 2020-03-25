MuiAppBar example:

```js noeditor
import MuiAppBar from './MuiAppBar';
```

```js
import MuiAppBar from './MuiAppBar';

const content = [{
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    text: 'here',
  }],
}];


  <MuiAppBar
    position="relative"
    content={content}
  />
```