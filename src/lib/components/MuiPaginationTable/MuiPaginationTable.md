MuiPaginationTable medium example (default):

```js
const tHead = [{
    component: 'MuiPaginationTableHead',
    content: [{
      component: 'MuiPaginationTableRow',
      content: [{
        component: 'MuiTableCell',
        size: 'large',
        content: [{
          component: 'MuiTypography',
          content: [{
            component: 'MuiText',
            text: 'Table Header 1',
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
            text: 'Table Header 2',
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
            text: 'Table Header 3',
          }],
        }],
      }],
    }],
  }];

  const tRow = {
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
  };

  const tableBody = [];

  for (let i = 0; i < 20; i++) {
   tableBody.push(tRow);
  };

  const tBody = [
    {
      component: 'MuiPaginationTableBody',
      content: [...tableBody],
    },
  ];

  <MuiPaginationTable
    tHead={tHead}
    tBody={tBody}
    size='medium'
    rowsPerPageOptions={[10, 25, 50, 100]}
  />
```

MuiPaginationTable small example:

```js
const tHead = [{
    component: 'MuiPaginationTableHead',
    content: [{
      component: 'MuiPaginationTableRow',
      content: [{
        component: 'MuiTableCell',
        size: 'small',
        content: [{
          component: 'MuiTypography',
          content: [{
            component: 'MuiText',
            text: 'Table Header 1',
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
            text: 'Table Header 2',
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
            text: 'Table Header 3',
          }],
        }],
      }],
    }],
  }];

  const tRow = {
    component: 'MuiPaginationTableRow',
    content: [
      {
        component: 'MuiTableCell',
        size: 'small',
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
        size: 'small',
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
        size: 'small',
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
  };

  const tableBody = [];

  for (let i = 0; i < 20; i++) {
   tableBody.push(tRow);
  };

  const tBody = [
    {
      component: 'MuiPaginationTableBody',
      content: [...tableBody],
    },
  ];

  <MuiPaginationTable
    tHead={tHead}
    tBody={tBody}
    size='small'
    rowsPerPageOptions={[5, 10, 25, 50]}
  />
```