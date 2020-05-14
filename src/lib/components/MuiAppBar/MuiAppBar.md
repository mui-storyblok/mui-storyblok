MuiAppBar example:

```js noeditor
import MuiAppBar from './MuiAppBar';
```

```js
const content = [
  {
    btnText: 'an MuiMenu',
    component: 'MuiMenu',
    content: [{
      buttonText: 'Menu Item',
      component: 'MuiMenuItem',
      redirectRoute: '/',
    }],
  },
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