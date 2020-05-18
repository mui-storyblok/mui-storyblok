MuiHeroHeader example:

```js
    const muiGrid = {
        component: 'MuiGrid',
        content: [{
          component: 'MuiGridItem',
          content: [{
            component: 'MuiIcon',
            iconName: 'android',
          }],
        }],
    };

    const content = [muiGrid];

  <MuiHeroHeader
    content={content}
    backgroundImageUrl="https://vistaenergymarketing.com/wp-content/themes/yootheme/cache/houston-skyline-7a651823.webp"
  />
```
