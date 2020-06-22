MuiHeroHeader example:

```js
    const muiGrid = {
      component: 'MuiHeroHeader',
      content: [{
        component: 'MuiGridItem',
        content: [{
          component: 'MuiIcon',
          iconName: 'android',
        }],
      }],
      backgroundImageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      height: '250px',
    };

    const content = [muiGrid];

  <MuiHeroHeader
    {...muiGrid}
  />
```
