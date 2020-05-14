MuiCircularProgress Example:

```js
<div styles={{ display: 'flex', flexDirection: 'row' }}>
  <MuiCircularProgress
    color='primary'
    size={40}
    thickness={3.6}
    variant='indeterminate'
    disableShrink={false}
  />

  <MuiCircularProgress
    color='secondary'
    size={50}
    thickness={4.5}
    variant='indeterminate'
    disableShrink={false}
  />

  <MuiCircularProgress
    color='inherit'
    size={30}
    thickness={3}
    variant='indeterminate'
    disableShrink={false}
  />
</div>
```