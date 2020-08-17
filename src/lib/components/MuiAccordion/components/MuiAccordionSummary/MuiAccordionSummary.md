##### MuiAccordionSummary has the ability to render custom components.

MuiAccordionSummary Example:

```js

const expandIcon = [{
    component: 'MuiIcon',
    iconName: 'keyboard_arrow_down',
}];

const content = [{
  component: 'MuiAccordionTypography',
  content: [{
    component: 'MuiText',
    content: 'This is MuiAccordionTypography in MuiAccordionSummary.',
  }],
}];

<MuiAccordionSummary
  content={content}
  expandIcon={expandIcon}
/>
```