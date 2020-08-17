##### MuiAccordionDetails has the ability to render custom components.

MuiAccordionDetails Example:

```js
const content = [
  {
    component: 'MuiAccordionTypography',
    content: [{
      component: 'MuiText',
      content: 'Mui Accordion Details',
    }],
  },
  {
    component: 'MuiAccordionTypography',
    content: [{
      component: 'MuiIcon',
      iconName: 'google',
    }],
  },
];

<MuiAccordionDetails
  content={content}
/>
```