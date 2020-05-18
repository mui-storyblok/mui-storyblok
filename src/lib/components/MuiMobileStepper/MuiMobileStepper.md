MuiMobileStepper example:

```js
const muiHeroHeaderOne = {
    component: 'MuiMobileTab',
    tab: [{
        component: 'MuiHeroHeader',
        height: '300px',
        backgroundImageUrl: 'https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg',
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
    }],
};

const muiHeroHeaderTwo = {
    component: 'MuiMobileTab',
    tab: [{
        component: 'MuiHeroHeader',
        backgroundImageUrl: 'https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/wave.ngsversion.1500050062134.adapt.1900.1.jpg',
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
    }],
};

const muiHeroHeaderThree = {
    component: 'MuiMobileTab',
    tab: [{
        component: 'MuiHeroHeader',
        backgroundImageUrl: 'https://www.atlasandboots.com/wp-content/uploads/2019/05/ama-dablam2-most-beautiful-mountains-in-the-world.jpg',
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
    }],
};

const tabs = [muiHeroHeaderOne, muiHeroHeaderTwo, muiHeroHeaderThree];

const nextBtn = [{
    component: 'MuiIconButton',
    icon: [{
        component: 'MuiIcon',
        iconName: 'skip_next',
    }],
}];

const backBtn = [{
    component: 'MuiIconButton',
    icon: [{
        component: 'MuiIcon',
        iconName: 'skip_previous',
    }],
}];

<MuiMobileStepper
    tabs={tabs}
    nextBtn={nextBtn}
    backBtn={backBtn}
/>
```