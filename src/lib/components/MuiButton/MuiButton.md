MuiButton example:

```js noeditor
import MuiButton from './MuiButton';
```

```js
const onClick = () => {
    alert('button was clicked')
}

<MuiButton
  buttonText="buttonText"
  onClick={onClick}
/>
```