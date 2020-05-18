MuiAppBar example:

```js
const content = [
  {
    anchor: 'left',
    component: 'MuiIconButtonDrawer',
    variant: 'temporary',
    content: [{
      component: 'MuiList',
      content: [{
        component: 'MuiListItem',
        listItemSecondaryAction: [{
          component: 'MuiListItemSecondaryAction',
          content: [{
            component: 'MuiIconButtonRedirect',
            redirectRoute: '/',
            iconButton: [{
              component: 'MuiIconButton',
              icon: [{
                component: 'MuiIcon',
                iconName: 'home',
              }],
            }],
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
      size: 'medium',
      icon: [{
        color: 'secondary',
        component: 'MuiIcon',
        iconName: 'menu',
      }],
    }],
  },
  {
    btnText: 'MuiMenu',
    component: 'MuiMenu',
    content: [{
      buttonText: 'Menu Item',
      component: 'MuiMenuItem',
      redirectRoute: '/',
    }],
  },
  {
    component: 'MuiButtonRedirect',
    redirectRoute: '',
    button: [{
      component: 'MuiButton',
      buttonText: 'here',
    }],
  },
];

  <MuiAppBar
    position="relative"
    content={content}
    disableGutters={false}
    variant="regular"
  />
```