MuiAppBar example:

```js
const content = [{
  component: 'MuiAppBarGrid',
  alignContent: 'stretch',
  direction: 'row',
  justifyContent: 'space-between',
  wrap: 'wrap',
  spacing: '2',
  content: [
    {
      component: 'MuiAppBarGridItem',
      direction: 'row',
      alignContent: 'stretch',
      alignItems: 'center',
      justify: 'center',
      wrap: 'wrap',
      content: [{
        component: 'MuiIconButtonDrawer',
        content: [{
          component: 'MuiList',
          content: [{
            component: 'MuiListItemButton',
            listItemIcon: [{
              component: 'MuiListItemIcon',
              content: [{
                component: 'MuiIcon',
                iconName: 'home',
              }],
            }],
            listItemText: [{
              component: 'MuiListItemText',
              primary: 'Home',
            }],
          }],
        }],
        icon: [{
          component: 'MuiIconButton',
          icon: [{
            component: 'MuiIcon',
            iconName: 'menu',
          }],
        }],
      }],
    },
  ],
}];

  <MuiAppBar
    position="relative"
    content={content}
    disableGutters={false}
    variant="regular"
  />
```