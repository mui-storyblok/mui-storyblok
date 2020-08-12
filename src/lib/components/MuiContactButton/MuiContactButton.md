MuiContactButton Examples:
##### If both phone and email address provided, it will default to a phone call.

```js
const phoneButton = [{
  component: 'MuiButton',
  buttonText: 'Call Us',
}];

const phoneNumber = '3035555555';

<MuiContactButton
  button={phoneButton}
  phone={phoneNumber}
/>
```
```js
const emailButton = [{
  component: 'MuiButton',
  buttonText: 'Email Us',
}];

const email = '1234@yahoo.com';

<MuiContactButton
  button={emailButton}
  email={email}
/>
```