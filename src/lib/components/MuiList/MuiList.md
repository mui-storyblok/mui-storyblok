MuiList example:

```js noeditor
import MuiList from './MuiList';
```

```js
import MuiList from './MuiList';

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
        herf: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        fileName: "cool.jpeg",
        icon: [{
            component: 'MuiIcon',
            iconName: 'play_for_work',
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