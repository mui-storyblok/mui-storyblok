MuiTabs example:

```js noeditor
import MuiTabs from './MuiTabs';
```

```js
const tabOne = {
    component: 'MuiTab',
    label: 'one',
    content: [{
        component: 'MuiIcon',
        iconName: 'star',
    }],
};

const tabTwo = {
    component: 'MuiTab',
    label: 'two',
    content: [{
        component: 'MuiIcon',
        iconName: 'android',
    }],
};

  const tabs = [tabOne, tabTwo];

  <MuiTabs
    orientation='horizontal'
    tabs={tabs}
  />
```