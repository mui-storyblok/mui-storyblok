MuiPaginationTableBody Examples:

```js
const tBody = [
  {
    component: 'MuiPaginationTableRow',
    content: [
      {
        component: 'MuiTableCell',
        size: 'large',
        content: [
          {
            component: 'MuiTypography',
            content: [
              {
                component: 'MuiText',
                text: 'Table Body 1',
              },
            ],
          },
        ],
      },
      {
        component: 'MuiTableCell',
        size: 'large',
        content: [
          {
            component: 'MuiTypography',
            content: [
              {
                component: 'MuiText',
                text: 'Table Body 2',
              },
            ],
          },
        ],
      },
      {
        component: 'MuiTableCell',
        size: 'large',
        content: [
          {
            component: 'MuiTypography',
            content: [
              {
                component: 'MuiText',
                text: 'Table Body 3',
              },
            ],
          },
        ],
      },
    ],
  },
];

const handleRowNums = content => {
  return content.length;
}

<MuiPaginationTableBody
  content={tBody}
  handleRowNums={handleRowNums}
  rowsPerPage={10}
/>

```