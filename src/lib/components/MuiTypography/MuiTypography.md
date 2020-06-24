MuiTypography nested icon/text example:

```js
const muiText = {
    component: 'MuiTypography',
    content: [
      {
      component: 'MuiText',
      content: 'you can concatenate strings',
      },
      {
      component: 'MuiText',
      content: ' like this',
      color: 'secondary',
      },
    ],
    height: '100%',
    variant: 'h3',
    width: '100%',
    color: 'inherit',
}

const icon = {
    component: 'MuiIcon',
    iconName: 'done_all',
};

const iconButtonDownload = {
    component: 'MuiIconButtonDownload',
    href: "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
    fileName: "cool.jpeg",
    iconButton: [{
      component: 'MuiIconButton',
      icon: [icon],
    }],
};

<MuiTypography {...muiText} />
```

MuiTypography Variants example:

```js
const h1 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'H1. Heading',
    variant: 'h1',
  }],
};

const h2 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'H2. Heading',
    variant: 'h2',
  }],
};

const h3 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'H3. Heading',
    variant: 'h3',
  }],
};

const h4 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'H4. Heading',
    variant: 'h4',
  }],
};

const h5 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'H5. Heading',
    variant: 'h5',
  }],
};

const h6 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'H6. Heading',
    variant: 'h6',
  }],
};

const subtitle1 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'subtitle 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
    variant: 'subtitle1',
  }],
};

const subtitle2 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'subtitle 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
    variant: 'subtitle2',
  }],
};

const body1 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    variant: 'body1',
  }],
};

const body2 = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    variant: 'body2',
  }],
};

const buttonVariant = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'button text',
    variant: 'button',
  }],
};

const caption = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'caption text',
    variant: 'caption',
  }],
};

const overline = {
  component: 'MuiTypography',
  content: [{
    component: 'MuiText',
    content: 'overline text',
    variant: 'overline',
  }],
};


<div>
  <MuiTypography {...h1} />
  <MuiTypography {...h2} />
  <MuiTypography {...h3} />
  <MuiTypography {...h4} />
  <MuiTypography {...h5} />
  <MuiTypography {...h6} />
  <MuiTypography {...subtitle1} />
  <MuiTypography {...subtitle2} />
  <MuiTypography {...body1} />
  <MuiTypography {...body2} />
  <MuiTypography {...buttonVariant} />
  <MuiTypography {...caption} />
  <MuiTypography {...overline} />
</div>
```