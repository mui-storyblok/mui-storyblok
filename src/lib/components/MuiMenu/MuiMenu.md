MuiMenu example:

```js noeditor
import MuiMenu from './MuiMenu';
```

```js
const menuItem = {
    component: 'MuiMenuItem',
    buttonText: 'button',
    redirectRoute: '',
};

const menuItem2 = {
    component: 'MuiMenuItem',
    buttonText: 'another button',
    redirectRoute: '',
};

const content = [menuItem, menuItem2];

<MuiMenu
  btnText="drop down menu"
  content={content}
/>
```