##### MuiIconButtonDrawer has the ability to render custom components.

MuiIconButtonDrawer Example:

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

const icon = [
  {
    component: 'MuiIconButton',
    icon: [
      {
        component: 'MuiIcon',
        iconName: 'menu',
      },
    ],
  },
];

<MuiIconButtonDrawer
  anchor='left'
  content={content}
  icon={icon}
  elevation='16'
  variant='temporary'
/>

```