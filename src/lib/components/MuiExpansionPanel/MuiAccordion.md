MuiAccordion example:

```js
    const expansionPanelSummary = [{
       component: 'MuiAccordionSummary',
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
        component: 'MuiAccordionDetails',
        content: [{
            component: 'MuiTypography',
            content: [{
                component: 'MuiText',
                text: 'lets talk more about that',
            }],
        }],
    }];

  <MuiAccordion
    expansionPanelSummary={expansionPanelSummary}
    expansionPanelDetails={expansionPanelDetails}
  />
```
