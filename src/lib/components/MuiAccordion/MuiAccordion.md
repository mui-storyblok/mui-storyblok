MuiAccordion example:

```js
    const accordionSummary = [{
       component: 'MuiAccordionSummary',
       expandIcon: [{
           component: 'MuiIcon',
           iconName: 'instagram',
       }],
        content: [{
            component: 'MuiAccordionTypography',
            content: [{
                component: 'MuiText',
                content: 'Expand ME!',
            }],
        }],
    }];

    const accordionDetails = [{
        component: 'MuiAccordionDetails',
        content: [{
            component: 'MuiAccordionTypography',
            content: [{
                component: 'MuiText',
                content: 'lets talk more about that',
            }],
        }],
    }];

  <MuiAccordion
    accordionSummary={accordionSummary}
    accordionDetails={accordionDetails}
  />
```
