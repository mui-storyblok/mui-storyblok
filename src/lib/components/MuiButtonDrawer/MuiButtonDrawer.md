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

const leftButton = [
  {
    buttonText: 'Left Drawer',
    component: 'MuiButton',
  },
];

const topButton = [
  {
    buttonText: 'Top Drawer',
    component: 'MuiButton',
  },
];

const rightButton = [
  {
    buttonText: 'Right Drawer',
    component: 'MuiButton',
  },
];

const bottomButton = [
  {
    buttonText: 'Bottom Drawer',
    component: 'MuiButton',
  },
];

<div style={{display: 'flex', flexDirection: 'row'}}>
  <MuiButtonDrawer
    anchor='left'
    content={content}
    button={leftButton}
    elevation='16'
    variant='temporary'
  />

  <MuiButtonDrawer
    anchor='top'
    content={content}
    button={topButton}
    elevation='16'
    variant='temporary'
  />

  <MuiButtonDrawer
    anchor='right'
    content={content}
    button={rightButton}
    elevation='16'
    variant='temporary'
  />

  <MuiButtonDrawer
    anchor='bottom'
    content={content}
    button={bottomButton}
    elevation='16'
    variant='temporary'
  />
</div>

```