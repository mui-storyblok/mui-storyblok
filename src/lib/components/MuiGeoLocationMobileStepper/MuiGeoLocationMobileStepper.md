MuiGeoLocationMobileStepper Example:

```js
const tab1 = [{
  component: 'MuiMobileTab',
  geocodeState: 'CO',
  tab: [{
    backgroundImageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
    component: 'MuiHeroHeader',
    height: '300px',
    content: [{
      component: 'MuiGridItem',
      content: [{
        component: 'MuiTypography',
        content: [{
          component: 'MuiText',
          content: 'Cool Beans',
        }],
      }],
    }],
  }],
}];

const tab2 = [{
  component: 'MuiMobileTab',
  geocodeState: 'CO',
  tab: [{
    backgroundImageUrl: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
    component: 'MuiHeroHeader',
    height: '300px',
    content: [{
      component: 'MuiGridItem',
      content: [{
        component: 'MuiTypography',
        content: [{
          component: 'MuiText',
          content: 'Cool Beans',
        }],
      }],
    }],
  }],
}];

const nextBtn = [{
  component: 'MuiIconButton',
  icon: [{
    component: 'MuiIcon',
    iconName: 'keyboard_arrow_right',
  }],
}];

const backBtn = [{
  component: 'MuiIconButton',
  icon: [{
    component: 'MuiIcon',
    iconName: 'keyboard_arrow_left',
  }],
}];

const tabs = [...tab1, ...tab2];

<MuiGeoLocationMobileStepper
  tabs={tabs}
  nextBtn={nextBtn}
  backBtn={backBtn}
/>
```