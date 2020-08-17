##### MuiList has the ability to render custom components.

MuiList example:

```js
const listItemAvatar = {
    component: 'MuiListItemAvatar',
    content: [{
        component: 'MuiIcon',
        iconName: 'explore',
    }],
};

const listItemIcon = {
    component: 'MuiListItemIcon',
    content: [{
        component: 'MuiIcon',
        iconName: 'history',
    }],
};

const listItemText = {
    component: 'MuiListItemText',
    primary: "primary text",
};

const listItemSecondaryAction = {
    component: 'MuiListItemSecondaryAction',
    content: [{
    component: 'MuiIconButtonDownload',
        href: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        fileName: "cool.jpeg",
        iconButton: [{
        component: 'MuiIconButton',
        icon: [{
            component: 'MuiIcon',
            iconName: 'android',
        }],
      }],
    }],
};

const listItem = {
      component: 'MuiListItem',
      listItemAvatar: [listItemAvatar],
      listItemIcon: [listItemIcon],
      listItemText: [listItemText],
      listItemSecondaryAction: [listItemSecondaryAction],
  };


  const content = [listItem];

  <MuiList
    content={[listItem]}
  />
```