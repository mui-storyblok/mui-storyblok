MuiMobileStepper example:

```js noeditor
import MuiMobileStepper from './MuiMobileStepper';
```

```js
const muiHeroHeaderOne = {
    component: 'MuiHeroHeader',
    backgroundImageUrl: 'https://vistaenergymarketing.com/wp-content/themes/yootheme/cache/houston-skyline-7a651823.webp',
    content: [{
    component: 'MuiGrid',
    content: [{
        component: 'MuiGridItem',
        content: [{
        component: 'MuiIcon',
        iconName: 'android',
        }],
    }],
  }],
};

const muiHeroHeaderTwo = {
    component: 'MuiHeroHeader',
    backgroundImageUrl: 'https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg',
    content: [{
    component: 'MuiGrid',
    content: [{
        component: 'MuiGridItem',
        content: [{
        component: 'MuiIcon',
        iconName: 'star',
        }],
    }],
  }],
};

const tabs = [muiHeroHeaderOne, muiHeroHeaderTwo];

const nextBtn = [{
    component: 'MuiButton',
    buttonText: 'next',
}];

const backBtn = [{
    component: 'MuiButton',
    buttonText: 'back',
}];

<MuiMobileStepper
    tabs={tabs}
    nextBtn={nextBtn}
    backBtn={backBtn}
/>
```