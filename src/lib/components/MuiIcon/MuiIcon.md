MuiIcon example:
[View All MUI Icons](https://material.io/resources/icons/?style=baseline)

```js
  <div styles={{ display: 'flex', flexDirection: 'row' }}>
    <MuiIcon
      iconName='home'
      color='primary'
    />
    <MuiIcon
      iconName='menu'
      color='secondary'
    />
    <MuiIcon
      iconName='close'
      color='action'
    />
    <MuiIcon
      iconName='accessibility'
      color='inherit'
    />
    <MuiIcon
      iconName='done'
      color='error'
    />

      <MuiIcon
      iconName='done'
      color='error'
      fontSize="small"
    />
  </div>
```

Social Icons for MuiIcon examples:
* iconName = 'facebook'
* iconName = 'bbb'
* iconName = 'google'
* iconName = 'linkedin'
* iconName = 'youtube'
* iconName = 'instagram'
* iconName = 'twitter'
* iconName = 'yelp'
* iconName = 'github'

```js
  <div styles={{ display: 'flex', flexDirection: 'row' }}>
    <MuiIcon
      iconName='facebook'
      color='primary'
      fontSize='large'
    />
    <MuiIcon
      iconName='bbb'
      color='secondary'
      fontSize='large'
    />
    <MuiIcon
      iconName='google'
      color='action'
      fontSize='large'
    />
    <MuiIcon
      iconName='linkedin'
      color='inherit'
      fontSize='large'
      rootClass={['margin-left: 10px', 'margin-right: 10px']}
    />
    <MuiIcon
      iconName='youtube'
      color='inherit'
      fontSize='large'
    />
    <MuiIcon
      iconName='instagram'
      color='secondary'
      fontSize='large'
    />
    <MuiIcon
      iconName='twitter'
      color='primary'
      fontSize='large'
    />
    <MuiIcon
      iconName='yelp'
      color='secondary'
      fontSize='large'
    />
    <MuiIcon
      iconName='github'
      color='inherit'
      fontSize='large'
    />
  </div>
```