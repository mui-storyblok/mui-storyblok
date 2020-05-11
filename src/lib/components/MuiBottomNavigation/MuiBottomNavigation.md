MuiBottomNavigation example:

```js noeditor
import MuiBottomNavigation from './MuiBottomNavigation';
```

```js
  const navActions = [{
    component: 'MuiBottomNavigationAction',
    icon: [{
      component: 'MuiIconButton',
      disableFocusRipple: true,
      disableRipple: true,
      icon: [{
        component: 'MuiIcon',
        iconName: 'home',
      }],
    }],
  },
  {
    component: 'MuiBottomNavigationAction',
    icon: [{
      component: 'MuiIconButton',
      disableFocusRipple: true,
      disableRipple: true,
      icon: [{
        component: 'MuiIcon',
        iconName: 'menu',
      }],
    }],
  },
  {
    component: 'MuiBottomNavigationAction',
    icon: [{
      component: 'MuiIconButton',
      disableFocusRipple: true,
      disableRipple: true,
      icon: [{
        component: 'MuiIcon',
        iconName: 'add',
      }],
    }],
  },
  {
    component: 'MuiBottomNavigationAction',
    icon: [{
      component: 'MuiIconButton',
      disableFocusRipple: true,
      disableRipple: true,
      icon: [{
        component: 'MuiIcon',
        iconName: 'accessibility',
      }],
    }],
  }];

  const rootClass = ['bottom: 0', 'position: relative'];

  <MuiBottomNavigation
    showLabels={true}
    width={600}
    navActions={navActions}
    rootClass={rootClass}
  />
```