MuiTable regular table (default):

```js
  const tHead = [{
    component: 'MuiTableHead',
    content: [{
      component: 'MuiTableRow',
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


  const tBody = [
    {
      component: 'MuiTableBody',
      content: [
        {
          component: 'MuiTableRow',
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
        {
          component: 'MuiTableRow',
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
        {
          component: 'MuiTableRow',
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
      ],
    },
  ];

  <MuiTable
    tHead={tHead}
    tBody={tBody}
    size='large'
  />
```

MuiTable small table:

```js
  const tHead = [{
    component: 'MuiTableHead',
    content: [{
      component: 'MuiTableRow',
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


  const tBody = [
    {
      component: 'MuiTableBody',
      content: [
        {
          component: 'MuiTableRow',
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
        },
        {
          component: 'MuiTableRow',
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
        },
        {
          component: 'MuiTableRow',
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
        },
      ],
    },
  ];

  <MuiTable
    tHead={tHead}
    tBody={tBody}
    size='small'
  />
```
