import React, { createElement } from 'react';
// [{ componentName: 'MyCoolComp', Component: MyCoolComp, props: {} }]
export const customComponents = [];

export const pushToCustomComponets = (components) => {
  if (components.length > 0) components.forEach(component => customComponents.push(component));
};

export const renderComponents = (components, component, key = undefined) => {
  let props = { ...component, key };

  const customComponent = customComponents.find(comp => comp.componentName === component.component);
  if (customComponent) {
    props = Object.assign(customComponent.props, component, { key });
    const CustomComponent = customComponent.Component;
    return <CustomComponent {...props} />;
  }

  return createElement(components[component.component], props);
};

export default renderComponents;
