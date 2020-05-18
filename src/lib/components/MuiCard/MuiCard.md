MuiCard With MuiCardActions:

```js
const cardcontent2 = {
    component: 'MuiCardContent',
    content: [{
        component: 'MuiTypography',
        content: [{
            component: 'MuiText',
            text: "This is a card",
        }],
    }],
}

const action2 = {
    component: 'MuiCardActions',
    content: [{
        component: 'MuiIconButtonDownload',
        href: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        fileName: "cool.jpeg",
        iconButton: [{
        component: 'MuiIconButton',
        icon: [{
            component: 'MuiIcon',
            iconName: 'android',
        }],
      }],
    }]
};

const content2 = [cardcontent2, action2];

  <MuiCard
    content={content2}
  />

```

MuiCard With MuiCardActions, MuiCardMedia, MuiCardHeader, MuiCardContent:

```js
const header = {
        component: 'MuiCardHeader',
        title: 'Card Example with card media and Action',
        content: [{
            component: 'MuiIcon',
            iconName: "star",
        }]
    }

const media = {
        component: 'MuiCardMedia',
        alt: 'alt',
        title: 'title',
        image: 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg',
    }

const cardcontent = {
    component: 'MuiCardContent',
    content: [{
        component: 'MuiTypography',
        content: [{
            component: 'MuiText',
            text: "whatever dude",
        }],
    }],
}


const action = {
    component: 'MuiCardActions',
    content: [{
        component: 'MuiIconButtonDownload',
        href: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
        fileName: "cool.jpeg",
        iconButton: [{
        component: 'MuiIconButton',
        icon: [{
            component: 'MuiIcon',
            iconName: 'android',
        }],
      }],
    }]
};

const content = [header, media, cardcontent, action];


  <MuiCard
    content={content}
  />

```