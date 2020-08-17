##### MuiTableHead has the ability to render custom components.

MuiTableHead small example:

```js
const tHead = [{
  component: 'MuiTableRow',
  content: [{
    component: 'MuiTableCell',
    size: 'small',
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        content: 'Table Header 1',
      }],
    }],
  },
  {
    component: 'MuiTableCell',
    size: 'small',
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        content: 'Table Header 2',
      }],
    }],
  },
  {
    component: 'MuiTableCell',
    size: 'small',
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        content: 'Table Header 3',
      }],
    }],
  }],
}];

<MuiTableHead
  content={tHead}
/>
```

MuiTableHead large example:

```js
const tHead = [{
  component: 'MuiTableRow',
  content: [{
    component: 'MuiTableCell',
    size: 'large',
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        content: 'Table Header 1',
      }],
    }],
  },
  {
    component: 'MuiTableCell',
    size: 'large',
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        content: 'Table Header 2',
      }],
    }],
  },
  {
    component: 'MuiTableCell',
    size: 'large',
    content: [{
      component: 'MuiTypography',
      content: [{
        component: 'MuiText',
        content: 'Table Header 3',
      }],
    }],
  }],
}];

<MuiTableHead
  content={tHead}
/>
```