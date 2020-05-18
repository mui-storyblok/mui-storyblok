MuiButton - Contained Buttons:

```js
const onClick = () => {
    alert('button was clicked')
}

<div style={{ display: 'flex', flexDirection: 'row' }}>
  <MuiButton
    buttonText="Default"
    onClick={onClick}
    color='default'
    variant='contained'
  />
  <MuiButton
    buttonText="Primary"
    onClick={onClick}
    color='primary'
    variant='contained'
  />
  <MuiButton
    buttonText="Secondary"
    onClick={onClick}
    color='secondary'
    variant='contained'
  />
  <MuiButton
    buttonText="Disabled"
    onClick={onClick}
    color='secondary'
    variant='disabled'
  />
</div>
```

MuiButton - Text Buttons:

```js
const onClick = () => {
    alert('button was clicked')
}

<div style={{ display: 'flex', flexDirection: 'row' }}>
  <MuiButton
    buttonText="Default"
    onClick={onClick}
    color='default'
  />
  <MuiButton
    buttonText="Primary"
    onClick={onClick}
    color='primary'
  />
  <MuiButton
    buttonText="Secondary"
    onClick={onClick}
    color='secondary'
  />
  <MuiButton
    buttonText="Disabled"
    onClick={onClick}
    color='secondary'
  />
</div>
```

MuiButton - Outlined Buttons:

```js
const onClick = () => {
    alert('button was clicked')
}

<div style={{ display: 'flex', flexDirection: 'row' }}>
  <MuiButton
    buttonText="Default"
    onClick={onClick}
    color='default'
    variant='outlined'
  />
  <MuiButton
    buttonText="Primary"
    onClick={onClick}
    color='primary'
    variant='outlined'
  />
  <MuiButton
    buttonText="Secondary"
    onClick={onClick}
    color='secondary'
    variant='outlined'
  />
  <MuiButton
    buttonText="Disabled"
    onClick={onClick}
    color='secondary'
    variant='outlined'
  />
</div>
```


MuiButton - Button Sizes:

```js
const onClick = () => {
    alert('button was clicked')
}

<div style={{ display: 'flex', flexDirection: 'row' }}>
  <MuiButton
    buttonText="Small"
    onClick={onClick}
    color='default'
    variant='outlined'
    size='small'
  />
  <MuiButton
    buttonText="Medium"
    onClick={onClick}
    color='primary'
    variant='outlined'
    size='medium'
  />
  <MuiButton
    buttonText="Large"
    onClick={onClick}
    color='secondary'
    variant='outlined'
    size='large'
  />
</div>
```
