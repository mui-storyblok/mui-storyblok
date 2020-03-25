MuiButton example:

```js noeditor
import MuiCard from './MuiCard';
```

```js

const header = {
        component: 'MuiCardHeader',
        title: 'this is a card',
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
            herf: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
            fileName: "cool.jpeg",
            icon: [{
                component: 'MuiIcon',
                iconName: 'star',
            }]
        }]
    };

const content = [header, media, cardcontent, action];


  <MuiCard
    content={content}
  />
```