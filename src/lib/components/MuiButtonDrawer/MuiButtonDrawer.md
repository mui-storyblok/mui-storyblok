MuiButtonDrawer Example:

```js noeditor
import MuiButtonDrawer from './MuiButtonDrawer';
```

```js
const content = [
  {
    component: 'MuiList',
    content: [
      {
        component: 'MuiListItem',
        listItemText: [
          {
            component: 'MuiListItemText',
            primary: 'home',
          }
        ],
        listItemSecondaryAction: [
          {
            component: 'MuiListItemSecondaryAction',
            content: [
              {
                component: 'MuiIconButtonRedirect',
                redirectRoute: '/',
                iconButton: [
                  {
                    component: 'MuiIconButton',
                    icon: [
                      {
                        component: 'MuiIcon',
                        iconName: 'home',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const button = [
  {
    buttonText: 'Open Drawer',
    component: 'MuiButton',
  },
];

<MuiButtonDrawer
  anchor='left'
  content={content}
  button={button}
  elevation='16'
  variant='temporary'
/>

```