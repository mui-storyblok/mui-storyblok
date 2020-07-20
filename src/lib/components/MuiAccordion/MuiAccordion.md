MuiAccordion example:

```js
    const accordionSummary = [{
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

    const accordionDetails = [{
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
    accordionSummary={accordionSummary}
    accordionDetails={accordionDetails}
  />
```
