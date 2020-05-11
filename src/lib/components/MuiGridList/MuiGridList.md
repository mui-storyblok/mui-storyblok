MuiGridList Example:

```js noeditor
import MuiGridList from './MuiGridList';
```

```js
const yoda = 'https://d.newsweek.com/en/full/1571628/baby-yoda.webp?w=790&f=163be219fae1ece8c6cbb38755c119b2';
const cupcake = 'https://www.lifeloveandsugar.com/wp-content/uploads/2018/01/Chocolate-Covered-Strawberry-Cupcakes4.jpg';
const content = [
  {
    cols: '2',
    component: 'MuiTileData',
    image: cupcake,
    rows: '1',
    title: 'Cupcake',
    MuiGridListTileBar: [
      {
        component: 'MuiGridListTileBar',
        subtitle: '2 Col Span',
        title: 'A Grid Item',
        titlePosition: 'bottom',
        actionIcon: [
          {
            component: 'MuiIconButtonRedirect',
            redirectRoute: '',
            iconButton: [
              {
                component: 'MuiIconButton',
                icon: [
                  {
                    component: 'MuiIcon',
                    iconName: 'home',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cols: '1',
    component: 'MuiTileData',
    image: yoda,
    rows: '1',
    title: 'Yoda',
    MuiGridListTileBar: [
      {
        component: 'MuiGridListTileBar',
        subtitle: '1 Col Span',
        title: 'Yoda Item',
        titlePosition: 'bottom',
        actionIcon: [
          {
            component: 'MuiIconButtonRedirect',
            redirectRoute: '',
            iconButton: [
              {
                component: 'MuiIconButton',
                icon: [
                  {
                    component: 'MuiIcon',
                    iconName: 'menu',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cols: '1',
    component: 'MuiTileData',
    image: cupcake,
    rows: '1',
    title: 'Cupcake',
    MuiGridListTileBar: [
      {
        component: 'MuiGridListTileBar',
        subtitle: 'A Subtitle',
        title: 'Cupcake Grid',
        titlePosition: 'bottom',
        actionIcon: [
          {
            component: 'MuiIconButtonRedirect',
            redirectRoute: '',
            iconButton: [
              {
                component: 'MuiIconButton',
                icon: [
                  {
                    component: 'MuiIcon',
                    iconName: 'close',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    cols: '2',
    component: 'MuiTileData',
    image: yoda,
    rows: '1',
    title: 'Yoda',
    MuiGridListTileBar: [
      {
        component: 'MuiGridListTileBar',
        subtitle: 'A Subtitle',
        title: 'Yoda Grid',
        titlePosition: 'bottom',
        actionIcon: [
          {
            component: 'MuiIconButtonRedirect',
            redirectRoute: '',
            iconButton: [
              {
                component: 'MuiIconButton',
                icon: [
                  {
                    component: 'MuiIcon',
                    iconName: 'menu',
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


<MuiGridList
  cellHeight={180}
  cols={2}
  spacing={4}
  height={550}
  width={450}
  content={content}
/>
```