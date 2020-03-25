MuiExpansionPanel example:

```js noeditor
import MuiExpansionPanel from './MuiExpansionPanel';
```

```js

    const expansionPanelSummary = [{
       component: 'MuiExpansionPanelSummary',
       expandIcon: [{
           component: 'MuiIcon',
           iconName: 'star',
       }],
        content: [{
            component: 'MuiTypography',
            content: [{
                component: 'MuiText',
                text: 'something cool',
            }],
        }],
    }];

    const expansionPanelDetails = [{
        component: 'MuiExpansionPanelDetails',
        content: [{
            component: 'MuiTypography',
            content: [{
                component: 'MuiText',
                text: 'lets talk more about that',
            }],
        }],
    }];

  <MuiExpansionPanel
    expansionPanelSummary={expansionPanelSummary}
    expansionPanelDetails={expansionPanelDetails}
  />
```
