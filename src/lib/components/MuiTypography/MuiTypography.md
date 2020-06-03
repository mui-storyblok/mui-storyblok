MuiTypography nested icon/text example:

```js
const muiText = {
    component: 'MuiText',
    text: 'you can concatenate strings',
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

const muiText2 = {
    component: 'MuiText',
    text: 'like this',
    color: 'secondary',
}

const content = [muiText, iconButtonDownload, muiText2];

<MuiTypography
  content={content}
/>
```

MuiTypography Variants example:

```js
const h1 = [{
    component: 'MuiText',
    text: 'H1. Heading',
    variant: 'h1',
}];

const h2 = [{
    component: 'MuiText',
    text: 'H2. Heading',
    variant: 'h2',
}];

const h3 = [{
    component: 'MuiText',
    text: 'H3. Heading',
    variant: 'h3',
}];

const h4 = [{
    component: 'MuiText',
    text: 'H4. Heading',
    variant: 'h4',
}];

const h5 = [{
    component: 'MuiText',
    text: 'H5. Heading',
    variant: 'h5',
}];

const h6 = [{
    component: 'MuiText',
    text: 'H6. Heading',
    variant: 'h6',
}];

const subtitle1 = [{
    component: 'MuiText',
    text: 'subtitle 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
    variant: 'subtitle1',
}];

const subtitle2 = [{
    component: 'MuiText',
    text: 'subtitle 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
    variant: 'subtitle2',
}];

const body1 = [{
    component: 'MuiText',
    text: 'body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    variant: 'body1',
}];

const body2 = [{
    component: 'MuiText',
    text: 'body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
    variant: 'body2',
}];

const buttonVariant = [{
    component: 'MuiText',
    text: 'button text',
    variant: 'button',
}];

const caption = [{
    component: 'MuiText',
    text: 'caption text',
    variant: 'caption',
}];

const overline = [{
    component: 'MuiText',
    text: 'overline text',
    variant: 'overline',
}];


<div>
  <MuiTypography
    content={h1}
  />
  <MuiTypography
    content={h2}
  />
  <MuiTypography
    content={h3}
  />
  <MuiTypography
    content={h4}
  />
  <MuiTypography
    content={h5}
  />
  <MuiTypography
    content={h6}
  />
  <MuiTypography
    content={subtitle1}
  />
  <MuiTypography
    content={subtitle2}
  />
  <MuiTypography
    content={body1}
  />
  <MuiTypography
    content={body2}
  />
  <MuiTypography
    content={buttonVariant}
  />
  <MuiTypography
    content={caption}
  />
  <MuiTypography
    content={overline}
  />
</div>
```